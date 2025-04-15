import HeroSection from "../HeroSection";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Video from "../Video";
import CardCarousel  from "../CardCarousel";
import { useState } from "react";
import * as images from "/src/assets";
import Testimonial from '../Testimonial.jsx'

export default function HomePage() {
  const [highlightedEvents, setHighlightedEvents] = useState([
    { id: 1, image: images.kilimanjaro, title: "Kilimanjaro" },
    { id: 2, image: images.madagascar, title: "Madagascar" },
    { id: 3, image: images.capeTown, title: "Cape Town" },
    { id: 4, image: images.kilimanjaro, title: "Kilimanjaro" },
    { id: 5, image: images.madagascar, title: "Madagascar" },
    { id: 6, image: images.capeTown, title: "Cape Town" },
    { id: 7, image: images.kilimanjaro, title: "Kilimanjaro" },
    { id: 8, image: images.madagascar, title: "Madagascar" },
    { id: 9, image: images.capeTown, title: "Cape Town" },
  ]);
  const [snowTreks, setSnowTreks] = useState([
    {
      id: 1,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },
    {
      id: 2,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },{
      id: 3,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },{
      id: 4,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },{
      id: 5,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },{
      id: 6,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },{
      id: 7,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },
  ]);
  const [summerEvents, setSummerEvents] = useState([
    {
      id: 1,
      title: "KRUGER PARK",
      location: "Kruger Park",
      image: images.kruger,
    },
    {
      id: 2,
      title: "WESTERN CAPE",
      location: "Western Cape",
      image: images.westernCape,
    },
    {
      id: 3,
      title: "ADDO PARK",
      location: "Addo Park",
      image: images.addoPark,
    },
    {
      id: 4,
      title: "MASAI MARA",
      location: "Masai Mara",
      image: images.masaiMara,
    },
    {
      id: 5,
      title: "KRUGER PARK",
      location: "Kruger Park",
      image: images.kruger,
    },
    {
      id: 6,
      title: "WESTERN CAPE",
      location: "Western Cape",
      image: images.westernCape,
    },
    {
      id: 7,
      title: "ADDO PARK",
      location: "Addo Park",
      image: images.addoPark,
    },
    {
      id: 8,
      title: "MASAI MARA",
      location: "Masai Mara",
      image: images.masaiMara,
    },
  ]);    // Set authentication state
  const [epicAdventure, setEpicAdventure] = useState([
    {
      id: 1,
      title: "KILIMANJARO",
      location: "Kilimanjaro Trek",
      image: images.kilimanjaro,
    },
    {
      id: 2,
      title: "HWANGE PARK",
      location: "Hwange Park",
      image: images.hwangePark,
    },
    { id: 3, title: "BOTSWANA", location: "Botswana", image: images.botswana },
    {
      id: 4,
      title: "KILIMANJARO",
      location: "Kilimanjaro Trek",
      image: images.kilimanjaro,
    },
    {
      id: 5,
      title: "HWANGE PARK",
      location: "Hwange Park",
      image: images.hwangePark,
    },
    { id: 6, title: "BOTSWANA", location: "Botswana", image: images.botswana },
  ]);
  const [specialEvents, setSpecialEvents] = useState([
    { id: 1, title: "HUNTING", location: "Hunting", image: images.hunting },
    {
      id: 2,
      title: "TRAINING CAMP",
      location: "Training Camp",
      image: images.trainingCamp,
    },
    { id: 3, title: "HUNTING", location: "Hunting", image: images.hunting },
    {
      id: 4,
      title: "TRAINING CAMP",
      location: "Training Camp",
      image: images.trainingCamp,
    },
    { id: 5, title: "HUNTING", location: "Hunting", image: images.hunting },
    {
      id: 6,
      title: "TRAINING CAMP",
      location: "Training Camp",
      image: images.trainingCamp,
    },
    { id: 7, title: "HUNTING", location: "Hunting", image: images.hunting },
    {
      id: 8,
      title: "TRAINING CAMP",
      location: "Training Camp",
      image: images.trainingCamp,
    },
    
  ]);
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
  const testimonials = [
    {
      name: "Milton Austin",
      role: "Sales Manager, ABC",
      image: images.milton,
      rating: 5,
      testimonial:
        "This trekking organization is excellent. Their costs are minimal due to their NGO’s non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and a balan.",
    },
    {
      name: "Annie",
      role: "Head of Sales, ABC",
      image: images.annie,
      rating: 5,
      testimonial:
        "Amazing experience! The team was supportive and well-organized throughout. Highly recommend this for first-time trekkers.",
    },
    {
      name: "Sandra",
      role: "Head of Sales, ABC",
      image: images.sandra,
      rating: 4,
      testimonial:
        "Very efficient service, and the food provided was very healthy and balanced. Will definitely book again.",
    },
  ];

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
            <Card1 key={event.id} image={event.image} title={event.title} />
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
                image={video.image}
                link={video.link}
                altText={video.title || "YouTube video thumbnail"}
                className="w-full h-full"
              />
            </div>
          ))}
        </CardCarousel>
      </div>
      {/* Testimonials */}
      <Testimonial testimonials={testimonials} />
    </div>
  );
}
