import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        console.log("Fetching contact data...");
        
        const response = await fetch(`${URL}contact`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch contact data: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data);
        
        // Check if data is in the expected format
        if (Array.isArray(data)) {
          setOffices(data);
        } else if (data && Array.isArray(data.data)) {
          // Handle if the response has a data property containing the array
          setOffices(data.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        console.error("Error fetching contact data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  // Function to format address from a single string
  const formatAddress = (addressString) => {
    // Split the address into parts for better display
    const parts = addressString.split(',');
    
    // Return formatted address parts as separate elements
    return parts.map((part, index) => (
      <p key={index} className="mb-1">{part.trim()}</p>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange header section with title and quote */}
      <div className="bg-orange-600 text-white py-16 px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-lg">Life is either a daring adventure or nothing.</p>
        </div>
      </div>

      {/* Main content with office cards */}
      <div className="container mx-auto px-4 py-12">
        {loading && <p className="text-center text-lg">Loading contact information...</p>}
        
        {error && (
          <div className="text-center text-red-500 mb-6">
            <p>Error: {error}</p>
            <p className="mt-2 text-sm">Please try again later.</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.length > 0 ? (
              offices.map((office, index) => (
                <div key={index} className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">{office.name}</h2>
                  
                  {formatAddress(office.address)}
                  
                  <p className="mb-4">Office Timings: {office.office_timings}</p>
                  
                  <div className="space-y-2 mb-4">
                    {office.contact_numbers && office.contact_numbers.map((number, idx) => (
                      <p key={idx} className="flex items-center text-orange-600">
                        <span className="mr-2">📞</span> {number}
                      </p>
                    ))}
                  </div>
                  
                  <div className="text-right">
                    <a href="#" className="text-orange-600 inline-flex items-center">
                      View On Map <span className="ml-1">↗</span>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-2 text-center text-lg">No office locations found.</p>
            )}
          </div>
        )}
      </div>
      
      {/* Footer is already included separately */}
    </div>
  );
}