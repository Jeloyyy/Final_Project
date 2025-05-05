import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
  const [Fullname, setFullname] = useState('')
  
  useEffect(() => {
    const storedName= localStorage.getItem('Fullname')
      setFullname(storedName)
  },[]);



  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('Fullname')
    navigate('/')
  }

  return (
    <div>
      <nav className="bg-green-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
          <img src="src/assets/logo.png" alt="Logo" className="h-20 w-20 mr-2" /><div className="text-white text-lg font-bold">IETI_MARIKINA</div>
          </div>
          <div className="text-white text-lg font-bold">{Fullname}</div>
          <ul className="flex space-x-4">
            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <Link to="/home" className="text-white">Home</Link>
            </li>
            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <Link to="/dashboard" className="text-white">Dashboard</Link>
            </li>
            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <Link to="/profile" className="text-white">Profile</Link>
            </li>
            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <Link to="/users" className="text-white">Users</Link>
            </li>
            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <button onClick={handleLogout} className="text-white">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-gray-400 flex items-center justify-center min-h-screen">
        <div className="p-8 shadow-md w-full max-w-md border border-black rounded-2xl" style={{ backgroundColor: '#d6cab2' }}>
          <h1 className="text-3xl font-bold text-center mb-6">Welcome to MyApp</h1>
          <p className="text-center">Your one-stop solution for everything!</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar