import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // This threshold determines how far from the bottom the user must scroll
      // before we show the footer
      const scrollThreshold = 200;
      
      // Calculate if we're near the bottom
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when scrolling near the bottom, but not at the very bottom
      // This prevents content from being obscured
      if (documentHeight - (scrollPosition + windowHeight) < scrollThreshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Add spacer div that's the same height as the footer */}
      {showFooter && <div className="h-40 md:h-32" />}
      
      {/* Sticky footer that appears at bottom but doesn't use fixed positioning */}
      <footer 
        className={`w-full bg-orange-600 p-4 shadow-md transition-opacity duration-300 sticky bottom-0 ${
          showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">HiddenSafari</h1>
            
            <nav className="flex flex-wrap justify-center space-x-4 text-sm mb-3">
              <Link to="/team" className="hover:underline">Teams</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/events" className="hover:underline">Events</Link>
              <Link to="/contact" className="hover:underline">Contact US</Link>
              <Link to="/terms" className="hover:underline">Terms and Condition</Link>
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </nav>
            
            <div className="flex flex-wrap items-center justify-center gap-100">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  className="py-1 px-3 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Search size={16} />
                </button>
              </div>
              
              <div className="flex space-x-2">
                <a href="https://linkedin.com" className="text-blue-600 hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://facebook.com" className="text-blue-600 hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" className="text-black hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" className="text-red-600 hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// IMPORTANT: Layout component that ensures proper footer behavior
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Footer, Layout };
export default Layout;