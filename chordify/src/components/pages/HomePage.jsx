import HeroSection from "../HeroSection";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Video from "../Video";
import CardCarousel from "../CardCarousel";
import { useState, useEffect } from "react";
import * as images from "/src/assets";
import Testimonial from "../Testimonial.jsx";

export default function HomePage() {
  const [highlightedEvents, setHighlightedEvents] = useState([]);
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${URL}events/highlighted-events`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event, index) => ({
          id: event.id || index,
          title: event.heading || "Untitled",
          location: event.heading || "Unknown",
          image: event.bannerImages1 || images.kilimanjaro,
        }));
        setHighlightedEvents(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch highlighted Events", err);
      });
  }, []);
  const [snowTreks, setSnowTreks] = useState([]);

  useEffect(() => {
    fetch(`${URL}events/snow-treks-events`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event, index) => ({
          id: event.id || index,
          title: event.heading || "Untitled",
          location: event.heading || "Unknown",
          image: event.bannerImages1 || images.kilimanjaro,
        }));
        setSnowTreks(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch snow treks", err);
      });
  }, []);
  const [summerEvents, setSummerEvents] = useState([]);

  useEffect(() => {
    fetch(`${URL}events/summer-events`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event, index) => ({
          id: event.id || index,
          title: event.heading || "Untitled",
          location: event.heading || "Unknown",
          image: event.bannerImages1 || images.kilimanjaro,
        }));
        setSummerEvents(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch summer Events", err);
      });
  }, []);
  const [epicAdventure, setEpicAdventure] = useState([]);

  useEffect(() => {
    fetch(`${URL}events/epic-adventure-events`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event, index) => ({
          id: event.id || index,
          title: event.heading || "Untitled",
          location: event.heading || "Unknown",
          image: event.bannerImages1 || images.kilimanjaro,
        }));
        setEpicAdventure(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch Epic Adventure", err);
      });
  }, []);
  // Special Events
  const [specialEvents, setSpecialEvents] = useState([]);

  useEffect(() => {
    fetch(`${URL}events/special-events`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event, index) => ({
          id: event.id || index,
          title: event.heading || "Untitled",
          location: event.heading || "Unknown",
          image: event.bannerImages1 || images.kilimanjaro,
        }));
        setSpecialEvents(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch special events", err);
      });
  }, []);
  // Monsoon Events
  const [monsoonEvents, setMonsoonEvents] = useState([]);

  useEffect(() => {
    fetch(`${URL}events/monsoon-events`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event, index) => ({
          id: event.id || index,
          title: event.heading || "Untitled",
          location: event.heading || "Unknown",
          image: event.bannerImages1 || images.kilimanjaro,
        }));
        setMonsoonEvents(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch monsoon events", err);
      });
  }, []);
  const [youTubeVideos, setYouTubeVideos] = useState([
    {
      id: 1,
      image: images.youTube1,
      link: "https://youtu.be/s3G2kLruJJo?si=JK-25YAbCClAlb0p",
    },
    {
      id: 2,
      image: images.youTube2,
      link: "https://youtu.be/366ooN49spY?si=R631QjO5Qqkz5OVu",
    },
    {
      id: 3,
      image: images.youTube3,
      link: "https://youtu.be/qYu7L08GV0k?si=ti8DD2NFHZiqpD-P",
    },
    {
      id: 4,
      image: images.youTube1,
      link: "https://youtu.be/s3G2kLruJJo?si=JK-25YAbCClAlb0p",
    },
    {
      id: 5,
      image: images.youTube2,
      link: "https://youtu.be/366ooN49spY?si=R631QjO5Qqkz5OVu",
    },
    {
      id: 6,
      image: images.youTube3,
      link: "https://youtu.be/qYu7L08GV0k?si=ti8DD2NFHZiqpD-P",
    },
  ]);
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    fetch(`${URL}info/testimonials`)
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoadingTestimonials(false);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials", err);
        setLoadingTestimonials(false);
      });
  }, []);
  return (
    <div className="">
      <HeroSection />
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
          Highlighted Events
        </p>
        <p className="text-xl md:text-sm mb-2 md:mb-4">
          Recommended camps by our instructors
        </p>
        <CardCarousel>
          {highlightedEvents.map((event) => (
            <Card1
              key={event.id}
              id={event.id}
              image={event.image}
              title={event.title}
            />
          ))}
        </CardCarousel>
      </div>
      {/* Snow Treks */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Snow Treks</p>
        <p className="text-xl md:text-sm mb-2 md:mb-4">
          Experience the magic of winter with our guided snow treks
        </p>
        <CardCarousel>
          {snowTreks.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-64 md:w-72">
              <Card2
                id={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
              />
            </div>
          ))}
        </CardCarousel>
      </div>
      {/* Monsoon Events */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Monsoon Events</p>
        <p className="text-xl md:text-sm mb-2 md:mb-4">
          Experience the magic of monsoon
        </p>
        <CardCarousel>
          {monsoonEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-64 md:w-72">
              <Card2
                id={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
              />
            </div>
          ))}
        </CardCarousel>
      </div>


      {/* Summer Events */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Summer Events
        </p>
        <p className="mb-4 md:mb-8 bg-darkBrown">
          Join our exciting range of summer activities
        </p>
        <CardCarousel>
          {summerEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-64 md:w-72">
              <Card2
                id={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
              />
            </div>
          ))}
        </CardCarousel>
      </div>

      {/* Epic Adventures */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Epic Adventure
        </p>
        <p className="mb-4 md:mb-8 bg-darkBrown">
          Push your limits with our most thrilling outdoor challenges.
        </p>
        <CardCarousel>
          {epicAdventure.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-64 md:w-72">
              <Card2
                id={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
              />
            </div>
          ))}
        </CardCarousel>
      </div>

      {/* Special Events */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Special Events
        </p>
        <p className="mb-4 md:mb-8 bg-darkBrown">
          Join us for unique, limited-time gatherings that celebrate remarkable
          occasions
        </p>
        <CardCarousel>
          {specialEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-64 md:w-72">
              <Card2
                id={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
              />
            </div>
          ))}
        </CardCarousel>
      </div>

      {/* YouTube Videos */}
      <div className="p-4 md:p-8 bg-orange-600">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Experience Yourself
        </p>
        <p className="mb-4 md:mb-8 text-black">
          Exclusive footage from our camps
        </p>
        <CardCarousel>
          {youTubeVideos.map((video) => (
            <div key={video.id} className="flex-shrink-0 w-64 md:w-72">
              <Video
                id={video.id}
                image={video.image}
                link={video.link}
                altText={video.title || "YouTube video thumbnail"}
                className="w-full h-full"
              />
            </div>
          ))}
        </CardCarousel>
      </div>
      {loadingTestimonials ? (
        <p className="text-center py-8">Loading testimonials...</p>
      ) : (
        <Testimonial testimonials={testimonials} />
      )}
    </div>
  );
}
