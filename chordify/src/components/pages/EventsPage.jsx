import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedEvents, setHighlightedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const endpoints = [
      'highlighted-events',
      'snow-treks-event',
      'summer-events',
      'epic-adventure-events',
      'special-events',
      'monsoon-events'
    ];

    const fetchEvents = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((endpoint) =>
            fetch(`${URL}events/${endpoint}`)
              .then((res) => {
                if (!res.ok) {
                  throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
                }
                return res.json();
              })
              .catch((err) => {
                console.error(`Fetch error for ${endpoint}:`, err);
                return []; // return empty array on error so the rest continue
              })
          )
        );

        const allEvents = responses.flat().map((event, index) => ({
          id: event.id || index,
          heading: event.heading || 'Untitled',
          location: event.heading || 'Unknown',
          bannerImages1: event.bannerImages1 || '/api/placeholder/400/320',
          calendarDates: event.calendarDates,
          eventDate: event.eventDate,
        }));

        setHighlightedEvents(allEvents);
      } catch (err) {
        console.error('Unexpected fetch error:', err);
        setError('Failed to fetch events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = highlightedEvents.filter((event) =>
    event.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">Loading events...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.bannerImages1}
                      alt={event.heading}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/400/320';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.heading}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">
                        {event.location ||
                          (event.eventDate
                            ? `Date: ${new Date(event.eventDate).toLocaleDateString()}`
                            : 'Date: TBA')}
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
                        {event.calendarDates}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">No events found matching your search.</p>
              </div>
            )}

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
