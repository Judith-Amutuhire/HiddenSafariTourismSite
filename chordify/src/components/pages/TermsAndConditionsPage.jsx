import { useEffect, useState } from 'react';

export default function TermsAndConditionsPage() {
  const [terms, setTerms] = useState({ title: '', sections: [] });
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${URL}info/terms-condition`);
        const data = await res.json();

        const content = data.content;
        const rawSections = content.split(/\n(?=\d+\.\s)/g); // Split on lines starting with numbers like "1. "
        
        const structuredSections = rawSections.map((section) => {
          const lines = section.split('\n').filter(line => line.trim() !== '');
          const titleLine = lines[0].trim();
          const title = titleLine.replace(/^(\d+\.\s)/, '');
          const contentLines = lines.slice(1);
          return { title, content: contentLines };
        });

        setTerms({
          title: data.title,
          sections: structuredSections,
        });
      } catch (error) {
        console.error('Error fetching terms:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-orange-600 text-white w-full">
        <div className="container mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-2">{terms.title}</h1>
          <p className="text-xl">Meet the norms behind our Success</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 bg-white">
        <div className="max-w-4xl">
          <section className="mb-6">
            <h2 className="text-xl font-medium text-orange-800 mb-3">
              Booking, payments and cancellations
            </h2>

            {terms.sections.map((section, index) => (
              <div className="mb-4" key={index}>
                <h3 className="font-medium text-gray-800 mb-2">{index + 1}. {section.title}</h3>
                {section.content.map((paragraph, idx) => (
                  <p className="text-gray-800 mb-3" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
