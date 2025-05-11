import React from 'react'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('Fullname');
    const storedEmail = localStorage.getItem('Email');
    if (storedName) setFullname(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('Fullname')
    localStorage.removeItem('Email')
    navigate('/')
  }

  return (
    <div>
      <nav className="bg-green-800">
        <div className="container flex items-center px-3">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <div className="text-white text-lg font-bold pr-10 pl-3">IETI_MARIKINA</div>
          <div className="text-align-center flex items-center">
            <h1 className='text-white text-lg font-bold'>{Fullname}</h1>
          </div>
          <ul className="flex ml-auto">
            <li className="hover:bg-gray-700 px-5 py-10">
              <Link to="/dashboard/home" className="text-white">Home</Link>
            </li>
            <li className="hover:bg-gray-700 px-5 py-10">
              <Link to="/dashboard/profile" className="text-white">Profile</Link>
            </li>
            <li className="hover:bg-gray-700 px-5 py-10">
              <Link to="/dashboard/users" className="text-white">Users</Link>
            </li>
            <li className="hover:bg-gray-700 px-5 py-10">
              <button onClick={handleLogout} className="text-white">Logout</button>
            </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
