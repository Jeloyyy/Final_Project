import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {

  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [StudentID, setStudentID] = useState('');
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
        setStudentID(response.data.StudentID);

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
      <div className="ml-10 mt-4 border p-4 rounded-lg shadow-md bg-white">
        <p className="text-lg"><b>Student ID:</b> {StudentID}</p>
        <p className="text-lg"><b>Name:</b> {Fullname}</p>
        <p className="text-lg"><b>Email:</b> {Email}</p>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate('../editprofile')}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile;