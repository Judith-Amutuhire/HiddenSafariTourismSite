import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [aboutData, setAboutData] = useState({
    vision: '',
    mission: '',
    objectives: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        console.log("Fetching about us data...");
        
        const response = await fetch('http://54.210.95.246:3005/api/v1/info/about-us');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch about us data: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data);
        setRawData(data);
        
        // Handle different possible response formats
        let contentToProcess = '';
        
        // Check if data is directly an object with content
        if (data && data.content) {
          contentToProcess = data.content;
        } 
        // Check if data is an array of objects with content
        else if (Array.isArray(data) && data.length > 0) {
          if (data[0].content) {
            contentToProcess = data[0].content;
          }
        } 
        // Check if data is a direct string
        else if (typeof data === 'string') {
          contentToProcess = data;
        }
        // Check if data has a 'data' property that contains our content
        else if (data && data.data) {
          if (typeof data.data === 'string') {
            contentToProcess = data.data;
          } else if (data.data.content) {
            contentToProcess = data.data.content;
          } else if (Array.isArray(data.data) && data.data.length > 0 && data.data[0].content) {
            contentToProcess = data.data[0].content;
          }
        }
        
        console.log("Content to process:", contentToProcess);
        
        if (contentToProcess) {
          // Process the content string
          const contentParts = contentToProcess.split('\n\n');
          console.log("Content parts:", contentParts);
          
          // Extract with more flexible indexing
          const vision = contentParts.length > 1 ? contentParts[1] : 'Vision information not available';
          const mission = contentParts.length > 3 ? contentParts[3] : 'Mission information not available';
          let objectives = contentParts.length > 5 ? contentParts[5] : 'Objectives information not available';
          
          if (objectives.includes('Keeping the ethics')) {
            objectives = objectives.replace('Keeping the ethics', '\nKeeping the ethics');
          }
          
          setAboutData({
            vision,
            mission,
            objectives
          });
        } else {
          throw new Error("Could not find content in API response");
        }
      } catch (err) {
        console.error("Error fetching about us data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Render raw data for debugging
  const renderRawData = () => {
    return (
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="text-lg font-semibold mb-2">Debug: Raw API Response</h3>
        <pre className="text-xs overflow-auto max-h-60">{JSON.stringify(rawData, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange background header area that extends full width */}
      <div className="bg-orange-600 text-white w-full">
        {/* Content area with proper padding - navbar would be above this */}
        <div className="container mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-xl">Who we are & where do we stand</p>
        </div>
      </div>

      {/* Main content area with white background */}
      <div className="container mx-auto px-4 py-10 bg-white">
        {loading && <p className="text-center">Loading about us information...</p>}
        {error && (
          <div className="text-center text-red-500 mb-6">
            <p>Error: {error}</p>
            <p className="mt-2 text-sm">Check the console for more details.</p>
          </div>
        )}
        
        <div className="max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-orange-800 mb-3">Vision</h2>
            <p className="text-gray-800 text-lg">
              {loading ? "Loading..." : aboutData.vision}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-orange-800 mb-3">Mission</h2>
            <p className="text-gray-800 text-lg">
              {loading ? "Loading..." : aboutData.mission}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-orange-800 mb-3">Objectives</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              aboutData.objectives.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-800 text-lg mb-4">
                  {paragraph}
                </p>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
}