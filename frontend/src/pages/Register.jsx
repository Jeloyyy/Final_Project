import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [formData, setFormData] = useState({
    Fullname: '',
    Email: '',  
    Username: '',
    Password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData , [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/adduser', formData);
      alert(res.data.message);
  
      navigate('/');
    }catch (error) {
      alert(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  }

  return (
    <div className="bg-gray-400 flex items-center justify-center min-h-screen">
      <div className="p-8 shadow-md w-full max-w-md border border-black rounded-2xl" style={{ backgroundColor: '#d6cab2' }}>
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <form className="flex flex-col gap-4 text-center" onSubmit={handleSubmit}>
            <label className="font-bold text-left">Fullname</label>
            <input
              type="text"
              name="Fullname"
              placeholder="Enter Fullname"
              className="bg-white border border-black p-2 rounded"
              value={formData.Fullname}
              onChange={handleChange}
              required
            />
            <label className="font-bold text-left">Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter Email"
              className="bg-white border border-black p-2 rounded"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <label className="font-bold text-left">Username</label>
            <input
              type="text"
              name="Username"
              placeholder="Enter Username"
              className="bg-white border border-black p-2 rounded"
              value={formData.Username}
              onChange={handleChange}
              required
            />
            <label className="font-bold text-left">Password</label>
            <input
              type="password"
              name="Password"
              placeholder="Enter Password"
              className="bg-white border border-black p-2 rounded"
              value={formData.Password}
              onChange={handleChange}
              required
            />
          <button type="submit" className="bg-green-600 text-white p-2 rounded">Register</button>
        </form>
        <p className="text-gray-500 text-center mt-4">
          Already have an account? <a href="/" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;