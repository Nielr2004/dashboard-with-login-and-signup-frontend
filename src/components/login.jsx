import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../API';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons from react-icons

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email: inputEmail, password: inputPassword });
      console.log(response.data);
      alert('Login successful');

      localStorage.setItem('token', response.data.token);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed');
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-gray-900 p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Welcome Back!</h2>
        <p className="text-center text-gray-400 mb-6">Log in to your account</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition duration-300"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            placeholder="Enter your password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="w-full p-4 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition duration-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full p-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300 font-bold"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/" className="text-indigo-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
