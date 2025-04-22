import { useEffect, useState } from 'react';
import * as images from '/src/assets';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        // Direct API call without fallbacks
        const response = await fetch('http://54.210.95.246:3005/api/v1/team');
        
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        
        const data = await response.json();
        setTeam(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  // Function to get the corresponding image based on profileName
  const getImage = (profileName) => {
    return images[profileName] || images.milton;
  };

  return (
    <div className="team-page">
      {/* Orange header section with title and subtitle */}
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">Meet the heroes behind our Success</p>
        </div>
      </div>
      
      {/* Team grid */}
      <div className="container mx-auto py-12">
        {loading && <p className="text-center">Loading team members...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image component */}
              <img 
                src={getImage(member.profileName)} 
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}