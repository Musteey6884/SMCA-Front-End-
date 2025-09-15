import React, { useState } from 'react'

export default function Login({ onLogin }){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if(!username) return
    onLogin(username)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[color:var(--card)] rounded-2xl p-8 shadow-lg border border-gray-800">
        <div className="flex items-center gap-4 mb-6">
          <img src="/logo.svg" alt="logo" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-bold">SecureComm</h1>
            <p className="text-xs text-gray-400">Defense Messaging Prototype</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full p-3 rounded-md bg-[#071827] border border-gray-800" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 rounded-md bg-[#071827] border border-gray-800" />
          <button className="w-full py-3 rounded-md bg-sec-green text-black font-semibold">Connect</button>
        </form>

        <div className="mt-4 text-xs text-gray-500">Demo only — credentials are mocked.</div>
      </div>
    </div>
  )
}
