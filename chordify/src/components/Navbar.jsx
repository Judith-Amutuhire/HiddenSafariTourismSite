import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

export default function NavBar({ isAuthenticated, setIsAuthenticated }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-orange-600/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-gray-300 text-2xl font-bold">HiddenSafari</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                <span className="mr-1">🏠</span> Home
              </NavLink>
              <NavLink to="/events" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                <span className="mr-1">🏔</span> Events
              </NavLink>
              <NavLink to="/team" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                <span className="mr-1">👥</span> Team
              </NavLink>
              <NavLink to="/about" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                <span className="mr-1">📄</span> About
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                <span className="mr-1">📞</span> Contact
              </NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink to="/profile" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                    <span className="mr-1">👤</span> Profile
                  </NavLink>
                  <button 
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  >
                    <span className="mr-1">🚪</span> Logout
                  </button>
                </>
              ) : (
                <NavLink to="/login" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                  <span className="mr-1">🔑</span> Login
                </NavLink>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
              <span className="mr-1">🏠</span> Home
            </NavLink>
            <NavLink to="/events" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
              <span className="mr-1">🏔</span> Events
            </NavLink>
            <NavLink to="/team" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
              <span className="mr-1">👥</span> Team
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
              <span className="mr-1">📄</span> About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
              <span className="mr-1">📞</span> Contact
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/profile" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
                  <span className="mr-1">👤</span> Profile
                </NavLink>
                <button 
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <span className="mr-1">🚪</span> Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
                <span className="mr-1">🔑</span> Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}