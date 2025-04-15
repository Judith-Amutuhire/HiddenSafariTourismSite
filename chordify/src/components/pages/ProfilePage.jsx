import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage({ isAuthenticated }) {
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, don't render the component
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange background header area that extends full width */}
      <div className="bg-orange-600 text-white w-full">
        {/* Content area with proper padding - navbar would be above this */}
        <div className="container mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-xl">Manage your account and preferences</p>
        </div>
      </div>

      {/* Main content area with white background */}
      <div className="container mx-auto px-4 py-10 bg-white">
        <div className="max-w-4xl">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-16 w-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl">
                <span>👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-600">user@example.com</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value="John Doe" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    value="user@example.com" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    value="+1 234 567 8900" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Location</label>
                  <input 
                    type="text" 
                    value="New York, USA" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">My Adventure Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-orange-800">12</p>
                <p className="text-gray-600">Trips Completed</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-orange-800">8</p>
                <p className="text-gray-600">Countries Visited</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-orange-800">3</p>
                <p className="text-gray-600">Upcoming Trips</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive emails about new adventures and offers</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">SMS Updates</p>
                  <p className="text-sm text-gray-600">Receive text messages about trip status</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                </label>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}