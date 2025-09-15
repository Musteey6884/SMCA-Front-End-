import React from 'react'

export default function Navbar({ user, onLogout }){
  return (
    <div className="w-full bg-gradient-to-r from-[#061427] to-[#071024] border-b border-gray-800 p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="w-10 h-10"/>
        <div>
          <div className="text-sec-green font-bold">SecureComm Defense Prototype</div>
          <div className="text-xs text-gray-400">SMCA - Secure Messaging</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-300">Signed in: <span className="font-medium">{user?.username || 'Guest'}</span></div>
        <button onClick={onLogout} className="px-3 py-1 bg-[#0b1220] rounded-md border border-gray-800 text-sm hover:bg-[#0f1724]">Logout</button>
      </div>
    </div>
  )
}
