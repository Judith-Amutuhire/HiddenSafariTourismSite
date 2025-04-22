import { useState } from "react";
import { Star, StarHalf, Star as StarEmpty } from "lucide-react";
import "../App.css";

export default function Testimonial({ testimonials }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Return early with a message if no testimonials are provided
  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <section className="max-w-5xl py-12 px-4 md:px-8">
      <h2 className="text-xl text-[#8B3D6F] font-semibold mb-2">
        Why people ❤️ Invincible
      </h2>
      <h3 className="text-2xl font-bold mb-6">Experience the best with us</h3>
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-xl shadow p-4 md:p-6">
        {/* Sidebar - People */}
        <div className="md:w-1/3 space-y-4">
          {testimonials.map((person, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={person.profileImage}
                alt={person.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{person.name}</p>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-2">
            <button
              onClick={handleNext}
              className="text-2xl text-gray-500 hover:text-gray-700"
            >
              ⬇️
            </button>
          </div>
        </div>

        {/* Testimonial Display */}
        <div className="md:w-2/3 mt-6 md:mt-0 md:pl-6">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => {
              const rating = testimonials[selectedIndex].ratings;

              if (i < Math.floor(rating)) {
                // Full star
                return (
                  <Star
                    key={i}
                    className="text-yellow-400 mr-1"
                    fill="currentColor"
                    stroke="none"
                    size={20}
                  />
                );
              } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
                // Half star
                return (
                  <StarHalf
                    key={i}
                    className="text-yellow-400 mr-1"
                    fill="currentColor"
                    stroke="none"
                    size={20}
                  />
                );
              } else {
                // Empty star (unfilled star)
                return (
                  <StarEmpty
                    key={i}
                    className="text-gray-300 mr-1"
                    fill="none"
                    stroke="currentColor"
                    size={20}
                  />
                );
              }
            })}
          </div>
          <p className="text-gray-700 text-lg">
            {testimonials[selectedIndex].review}
          </p>
        </div>
      </div>
    </section>
  );
}
