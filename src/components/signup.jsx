import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signup } from '../API'; 
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password visibility toggle

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSignup = async () => {
    try {
      await signup({ name, email, password, role });
      toast.success('Signup successful!');
      window.location.href = '/login';
    } catch (error) {
      toast.error('Signup failed!');
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-gray-900 p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Create an Account</h2>
        <p className="text-center text-gray-400 mb-6">Sign up to get started</p>

        <input
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition duration-300"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition duration-300"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            placeholder="Create a password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
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

        <label htmlFor="role" className="block text-gray-300 mb-2 font-medium">Select Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-4 mb-6 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition duration-300"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Super Admin">Super Admin</option>
        </select>

        <button
          onClick={handleSignup}
          className="w-full p-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300 font-bold"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
