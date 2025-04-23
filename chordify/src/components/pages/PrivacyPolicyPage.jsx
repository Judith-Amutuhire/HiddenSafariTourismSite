import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [policyData, setPolicyData] = useState({
    title: "Privacy Policy",
    content: ""
  });
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${URL}info/privacy-policy`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch privacy policy: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data);
        
        // Store the full policy data
        setPolicyData(data);
        
        // Process the content to extract sections
        if (data && data.content) {
          // Process content into sections
          const processedSections = processContent(data.content);
          setSections(processedSections);
        } else {
          throw new Error("Content not found in API response");
        }
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  // Function to process content into sections
  const processContent = (content) => {
    // Split the content by section headings followed by colon
    const sectionRegex = /\n([^:\n]+):/g;
    const sectionMatches = [...content.matchAll(sectionRegex)];
    
    const processedSections = [];
    
    if (sectionMatches.length > 0) {
      // Process each found section
      for (let i = 0; i < sectionMatches.length; i++) {
        const currentMatch = sectionMatches[i];
        const nextMatch = sectionMatches[i + 1];
        
        const title = currentMatch[1].trim();
        const startIndex = currentMatch.index + currentMatch[0].length;
        const endIndex = nextMatch ? nextMatch.index : content.length;
        
        const sectionContent = content.substring(startIndex, endIndex).trim();
        
        processedSections.push({
          title,
          content: sectionContent
        });
      }
    } else {
      // If no sections found, use the whole content as one section
      processedSections.push({
        title: "Privacy Policy",
        content: content.trim()
      });
    }
    
    return processedSections;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange background header area that extends full width */}
      <div className="bg-orange-600 text-white w-full">
        {/* Content area with proper padding - navbar would be above this */}
        <div className="container mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-2">{policyData.title}</h1>
          <p className="text-xl">Our commitment to your privacy</p>
        </div>
      </div>

      {/* Main content area with white background */}
      <div className="container mx-auto px-4 py-10 bg-white">
        {loading && <p className="text-center text-lg">Loading privacy policy...</p>}
        
        {error && (
          <div className="text-center text-red-500 mb-6">
            <p>Error: {error}</p>
            <p className="mt-2 text-sm">Please try again later.</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="max-w-4xl">
            {sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-medium text-orange-800 mb-4">{section.title}</h2>
                <p className="text-gray-800 text-lg">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}