import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({ 
        Username: '', 
        Password: '' 
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [e.target.name]: e.target.value,});
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', formData);
            if (response.data.token) {

                navigate('/home');
            } else {
                alert(response.data.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-gray-400 flex items-center justify-center min-h-screen">
            <div className="p-8 shadow-md w-full max-w-md border border-black rounded-2xl" style={{ backgroundColor: '#d6cab2' }}>
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                <form className="flex flex-col gap-4 text-center" onSubmit={handleLogin}>
                        <input
                            type="text"
                            name="Username"
                            placeholder="Username"
                            className="bg-white border border-black p-2 rounded"
                            value={formData.Username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            className="bg-white border border-black p-2 rounded"
                            value={formData.Password}
                            onChange={handleChange}
                            required
                        />
                    <button type="submit" className="bg-green-600 text-white p-2 rounded">Login</button>
                </form>
                <p className="text-gray-500 text-center mt-4">
                    Don't have an account? <a href="/register" className="text-blue-500">Register</a>
                </p>
                <p className="text-gray-500 text-center">
                    Forgot password? <a href="/reset" className="text-blue-500">Reset</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
