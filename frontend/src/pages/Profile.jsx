import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {

  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail= localStorage.getItem('Email')
      setFullname(storedEmail)
  },[]);

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

        setEmail(response.data.Email);
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
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
      <div className="ml-10 flex justify mt-4">
        <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full" />
      </div>
      <div className="ml-10 mt-4 ">
        <p className="text-lg">Name: {Fullname}</p>
        <p className="text-lg">Email: {Email}</p>
      </div>
    </div>
  )
}

export default Profile;