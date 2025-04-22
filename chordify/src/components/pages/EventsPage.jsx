import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import * as images from "/src/assets";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://54.210.95.246:3005/api/v1/events/all-events');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        setEvents(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on search query
  const filteredEvents = events.filter(event => 
    event.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange header that extends across the page including navbar area */}
      <div className="w-full bg-orange-600 text-white pb-8">
        <div className="container mx-auto px-4 pt-20 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Events</h1>
              <p className="text-lg">Life is either a daring adventure or nothing.</p>
            </div>
            <div className="relative w-full md:w-64 lg:w-80">
              <input
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full py-2 px-4 rounded-lg text-gray-700 focus:outline-none"
              />
              <button className="absolute right-0 top-0 bg-orange-700 p-2 rounded-r-lg h-full flex items-center justify-center">
                <Search size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">Loading events...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-600">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Safari Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.bannerImages && event.bannerImages.length > 0 ? event.bannerImages[0] : '/api/placeholder/400/320'} 
                      alt={event.heading}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/400/320'; 
                      }}
                    />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div 
                          key={dot} 
                          className={`h-2 w-2 rounded-full ${dot === 1 ? 'bg-white' : 'bg-gray-400 bg-opacity-60'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.heading}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">
                        {event.eventDate ? `Date: ${new Date(event.eventDate).toLocaleDateString()}` : 'Date: TBA'}
                      </p>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                        </span>
                        {event.location || 'Location TBA'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show message if no events match the search */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">No events found matching your search.</p>
              </div>
            )}

            {/* Load More Button - Only show if there are events */}
            {filteredEvents.length > 0 && (
              <div className="flex justify-center mt-8">
                <button className="text-orange-500 font-semibold text-lg hover:underline">
                  LOAD MORE
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}