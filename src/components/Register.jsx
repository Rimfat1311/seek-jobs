import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/logo.svg';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 py-10'>
            <div className='flex flex-col p-10 w-2/7 max-w-md bg-white border rounded-md'>
                <form className='flex flex-col items-center justify-center'>
                    <img src={logo} alt="Logo" width='200' />
                    <p className='mt-4 text-3xl pb-5'>Register</p>
                    <label className='flex self-start text-lg' htmlFor="name">Name</label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-80 mt-2 my-1 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                    />

                    <label className='flex self-start text-lg' htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-80 mt-2 my-1 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                    />

                    <label className='flex self-start py-2 text-lg' htmlFor="password">Password</label>
                    <input
                        id='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-80 mb-5 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <button className='bg-[#3B82F6] hover:bg-blue-600 w-80 py-1 my-3 text-white rounded-md'>Submit</button>
                    <button className='bg-blue-200 hover:bg-blue-600 w-80 py-1 my-3 text-[#3B82F6] hover:text-white rounded-md'>Demo App</button>
                    <p>Already a member? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link></p> {/* Updated Link */}
                </form>
            </div>
        </div>
    );
};

export default Register;