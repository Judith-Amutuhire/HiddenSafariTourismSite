import "../App.css";
import { background } from "../assets";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="h-full w-full object-cover"
          src={background}
          alt="Trekking silhouette"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative px-4 py-32 sm:px-6 sm:py-40 lg:py-52 lg:px-8">
        <div className="max-w-2xl mx-0 ml-4 sm:ml-6 lg:ml-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl text-left">
            Experience
            <br />
            Nature
          </h1>
          <p className="mt-6 text-xl text-gray-300 text-left">
            India's Largest Trekking Organization
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center text-white">
              <span className="text-2xl mr-2">👣</span>
              <div>
                <p className="font-bold">2,11,500+</p>
                <p className="text-sm">Participants</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <span className="text-2xl mr-2">👥</span>
              <div>
                <p className="font-bold">2750+</p>
                <p className="text-sm">Volunteers</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <span className="text-2xl mr-2">🏔</span>
              <div>
                <p className="font-bold">88+</p>
                <p className="text-sm">Events</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <span className="text-2xl mr-2">⏱</span>
              <div>
                <p className="font-bold">11</p>
                <p className="text-sm">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
