import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userRole, setUserRole] = useState('');
  const [name, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUserRole(decoded.role);
      setUsername(decoded.name); // Assuming the token contains the username
    }
  }, [navigate]);

  const renderCards = () => {
    switch (userRole) {
      case 'Super Admin':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 1</h3>
                <p className="text-gray-400">Description for Card 1</p>
              </div>
            </div>
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 2</h3>
                <p className="text-gray-400">Description for Card 2</p>
              </div>
            </div>
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 3</h3>
                <p className="text-gray-400">Description for Card 3</p>
              </div>
            </div>
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 4"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 4</h3>
                <p className="text-gray-400">Description for Card 4</p>
              </div>
            </div>
          </div>
        );
      case 'Admin':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 1</h3>
                <p className="text-gray-400">Description for Card 1</p>
              </div>
            </div>
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 2</h3>
                <p className="text-gray-400">Description for Card 2</p>
              </div>
            </div>
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 3</h3>
                <p className="text-gray-400">Description for Card 3</p>
              </div>
            </div>
          </div>
        );
      case 'User':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 1</h3>
                <p className="text-gray-400">Description for Card 1</p>
              </div>
            </div>
            <div className="card bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Card 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Card 2</h3>
                <p className="text-gray-400">Description for Card 2</p>
              </div>
            </div>
          </div>
        );
      default:
        return <p className="text-center text-red-500">Access Denied</p>;
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="text-center text-white mb-6">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-xl font-medium">{userRole}</p>
      </div>
      <div>{renderCards()}</div>
    </div>
  );
};

export default Dashboard;
