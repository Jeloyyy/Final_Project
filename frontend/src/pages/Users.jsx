import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/viewusers')
      .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => console.error('Error fetching users:', error));
}, []);

  const filteredUsers = users.filter((user) =>
    user.Fullname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Users</h2>

      <input
        type='text'
        placeholder='Search users...'
        className='mb-4 p-2 border rounded w-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border border-gray-300 p-2'>User ID</th>
            <th className='border border-gray-300 p-2'>Full Name</th>
            <th className='border border-gray-300 p-2'>Email</th>
            <th className='border border-gray-300 p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className='hover:bg-gray-100'>
              <td className='border border-gray-300 p-2'>{user.StudentID}</td>
              <td className='border border-gray-300 p-2'>{user.Fullname}</td>
              <td className='border border-gray-300 p-2'>{user.Email}</td>
              <td className='border border-gray-300 p-2'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>Edit</button>
                <button className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;