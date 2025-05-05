import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import Profile from './Profile';
import Users from './Users';

function Dashboard() {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='h-screen flex flex-col'>
        <div className='flex-1 p-8 bg-gray-50 overflow-auto'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>      
      </div>
    </div>
  );
}

export default Dashboard;