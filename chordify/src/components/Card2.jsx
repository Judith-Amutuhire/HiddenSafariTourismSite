import { Link } from "react-router-dom";
export default function Card2(props) {
  return (
    <>
      <Link to="/details" className="block group">
        <div className="flex flex-col w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative h-full">
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 p-4 bg-black/50">
              <h3 className="text-2xl font-bold text-white">{props.title}</h3>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-end h-1/4">
            <p className="text-sm/9 text-black">{props.location}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
