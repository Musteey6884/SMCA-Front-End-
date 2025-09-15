import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function App(){
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleLogin = (username) => {
    setUser({ id: username, username })
    navigate('/dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <Routes>
      <Route path='/' element={<Login onLogin={handleLogin} />} />
      <Route path='/dashboard' element={<Dashboard user={user} onLogout={handleLogout} />} />
    </Routes>
  )
}
