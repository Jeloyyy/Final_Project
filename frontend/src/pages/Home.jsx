import React from 'react'
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-400 flex items-center justify-center min-h-screen">
        <div className="p-8 shadow-md w-full max-w-md border border-black rounded-2xl" style={{ backgroundColor: '#d6cab2' }}>
          <h1 className="text-3xl font-bold text-center mb-6">Welcome to MyApp</h1>
          <p className="text-center">Your one-stop solution for everything!</p>
        </div>
      </div>  
    </div>
  );
}

export default Home