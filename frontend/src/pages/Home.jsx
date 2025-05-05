import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [Fullname, setFullname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('No token found. Please log in again.');
          navigate('/');
          return;
        }

        const { StudentID } = JSON.parse(atob(token.split('.')[1]));

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
    <div className="h-screen flex flex-col">  
      <div className="h-screen flex flex-col">
        <div className="flex-1 p-8 bg-gray-50 overflow-auto" style={{ backgroundColor: '#d6cab2' }}>
          <h1 className="text-3xl font-bold text-center mb-6">Welcome, {Fullname || 'User'}!</h1>
          <p className="text-center">Your one-stop solution for everything!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;