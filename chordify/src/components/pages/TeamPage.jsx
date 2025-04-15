import * as images from '/src/assets';
export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: "Emmy Rosum",
      role: "Founder",
      image: images.milton
    },
    {
      id: 2,
      name: "Nandan Manek",
      role: "Project Director",
      image: images.annie
    },
    {
      id: 3,
      name: "Hana Mira",
      role: "Project Advisor",
      image: images.sandra
    },
    {
      id: 4,
      name: "Jitendra",
      role: "Project Leader",
      image: images.milton
    },
    {
      id: 5,
      name: "William Henry",
      role: "Project Leader",
      image: images.annie
    },
    {
      id: 6,
      name: "Emily Rose",
      role: "Project Leader",
      image: images.sandra
    },
    {
      id: 7,
      name: "Sophie Anne",
      role: "Asst Project Leader",
      image: images.milton
    },
    {
      id: 8,
      name: "Emmy Rosum",
      role: "Asst Project Leader",
      image: images.annie
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange header section with title and subtitle */}
      <div className="bg-orange-600 text-white py-16 px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Our Team</h1>
          <p className="text-lg">Meet the heroes behind our Success</p>
        </div>
      </div>

      {/* Team grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(member => (
            <div key={member.id} className="relative rounded-lg overflow-hidden shadow-md">
              {/* Replace the next line with your actual image component */}
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white py-3 px-4 text-center rounded-b-lg">
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}