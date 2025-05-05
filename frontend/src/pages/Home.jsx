import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [Fullname, setFullname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Retrieve the token and decode the StudentID
        const token = localStorage.getItem('token');
        if (!token) {
          alert('No token found. Please log in again.');
          navigate('/');
          return;
        }

        // Decode the token to get the StudentID
        const { StudentID } = JSON.parse(atob(token.split('.')[1]));

        // Fetch user details from the backend
        const response = await axios.get(`http://localhost:5000/api/users/viewuser/${StudentID}`);
        setFullname(response.data.Fullname);
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('Failed to fetch user details. Please try again.');
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-400 flex items-center justify-center min-h-screen">
        <div className="p-8 shadow-md w-full max-w-md border border-black rounded-2xl" style={{ backgroundColor: '#d6cab2' }}>
          <h1 className="text-3xl font-bold text-center mb-6">Welcome, {Fullname || 'User'}!</h1>
          <p className="text-center">Your one-stop solution for everything!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;