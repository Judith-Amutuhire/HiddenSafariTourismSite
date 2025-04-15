import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }


    if (email === 'user@example.com' && password === 'password') {
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange background header area that extends full width */}
      <div className="bg-orange-600 text-white w-full">
        {/* Content area with proper padding - navbar would be above this */}
        <div className="container mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-2">Login</h1>
          <p className="text-xl">Access your HiddenSafari account</p>
        </div>
      </div>

      {/* Main content area with white background */}
      <div className="container mx-auto px-4 py-10 bg-white flex justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {error && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>{error}</p>
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            
            <div className="mt-6 border-t border-gray-300 pt-4">
              <p className="text-center text-gray-700 text-sm">
                Don't have an account?{' '}
                <a href="#" className="font-bold text-orange-600 hover:text-orange-800">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
          
          <p className="text-center text-gray-500 text-xs">
            &copy; 2025 HiddenSafari. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}