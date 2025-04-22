import "../App.css";
import {
  BusFront,
  UtensilsCrossed,
  HousePlus,
  Footprints,
  BriefcaseMedical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

export default function Card1(props) {
  return (
    <div className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
      <Link to="/details" className="">
        <div className="relative h-full">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-[160px] left-0 right-0 p-4">
            <h3 className="text-2xl font-bold card1Font text-white text-center font-loader">
              {props.title}
            </h3>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-6 items-center">
            <BusFront className="text-white w-6 h-6" />
            <UtensilsCrossed className="text-white w-6 h-6" />
            <HousePlus className="text-white w-6 h-6" />
            <Footprints className="text-white w-6 h-6" />
            <BriefcaseMedical className="text-white w-6 h-6" />
          </div>
        </div>
      </Link>
    </div>
  );
}
