import React, { useState } from "react";
import {
  Clock,
  UserRound,
  Clipboard,
  Calendar,
  Wind,
  Umbrella,
  Mountain,
} from "lucide-react";
import { kilimanjaro } from "../../assets";

export default function DetailsPage() {
  const [selectedDay, setSelectedDay] = useState(1);

  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bg-gray-100 font-sans ">
      <div className="relative">
        <img
          src={kilimanjaro}
          alt="Mountain landscape"
          className="w-full h-80 object-cover rounded-t-lg"
        />
      </div>

      <div className="bg-white p-4">
        <h3 className="text-gray-500 text-sm font-medium">
          Highlighted Experts
        </h3>
        <h1 className="text-xl font-bold mb-1">
          Embark on an unforgettable adventure
        </h1>
        <h2 className="text-lg mb-3">Ethiopian Tour</h2>

        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1">
              <Clock size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">7 days</span>
            </div>
            <div className="flex items-center space-x-1">
              <UserRound size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">15 persons max</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">Jan - Oct</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">4.9/5</span>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <div>
            <h3 className="font-medium mb-2">About</h3>
            <p className="text-sm text-gray-600 max-w-lg">
              Mount Choke represents the highest peak in Amhara region and is
              part of Ethiopia's Choke Massif. When you reach its summit in
              Menasha, this diverse landscape offers breathtaking views of
              Ethiopia's central highlands and unique ecological zones. Our
              expert guides lead you through spectacular Ethiopian valleys,
              unique geological formations to hidden alpine deserts, and finally
              to the planet's highlands.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-center mb-2">
              $7,899{" "}
              <span className="text-sm font-normal text-gray-600">
                / person
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-lg mr-2">
                  <Calendar size={16} className="text-orange-500" />
                </div>
                <span className="text-sm">Travelling</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-2">
                  <Wind size={16} className="text-red-500" />
                </div>
                <span className="text-sm">First Aid</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-2">
                  <Mountain size={16} className="text-blue-500" />
                </div>
                <span className="text-sm">Accessories</span>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-2">
                  <Umbrella size={16} className="text-purple-500" />
                </div>
                <span className="text-sm">Instructor</span>
              </div>
            </div>

            <button className="bg-orange-500 text-white w-full py-2 rounded-lg font-medium">
              Book Now
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Today</h3>
          <div className="flex space-x-2 mb-6">
            {days.map((day) => (
              <button
                key={day}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedDay === day
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <h3 className="font-medium mb-3">Schedule</h3>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 1</h4>
              <div className="text-sm text-gray-600 mb-1">
                Elevation rise to Sanoti Camp
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 25, 2024 to 15:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 6 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 4 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Moorland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                We'll depart Addis for Sanoma's Moorlands. After a scenic 3-hour
                hike you will complete the day's excursion. The path leads
                through dense juniper forests, across open grassy areas, and
                finally to our destination at Sanoti Camp, at 3,540 meters above
                sea level, with awe-inspiring views of the untouched lower
                region around by the first campsite.
              </p>
              <img
                src={kilimanjaro}
                alt="Camping site"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>

            {/* Day 2 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 2</h4>
              <div className="text-sm text-gray-600 mb-1">
                Continue climb to Dinso Camp
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 26, 2024 to 15:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 8 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 5 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Moorland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                We'll continue our steady heading up of the forest until into a
                expanse of tall grasses, heather, and volcanic rock making the
                difficult ascension. We will pass through the rock valley. This
                area must always be hiked, we will stop at the Dinso Camp before
                ascending further into area. Overall the task is to reach across
                the plateau to amazing experiences.
              </p>
              <img
                src={kilimanjaro}
                alt="Mountain landscape"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>

            {/* Day 3 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 3</h4>
              <div className="text-sm text-gray-600 mb-1">
                Dinso Camp Up Winds to Beke hut
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 27, 2024 to 18:00 to 20:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 14 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 12 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Highland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Today is a challenging day, but achievable for A-list day. It is
                a gentle walk past several Dirko's glaciated peak, across the
                plateau, and by Beke's Camp's and waterfall headwaters by
                systems. Then we'll continue to bush hut, a little-used site on
                the mountain's eastern face. The campsite lies at 4,750 meters,
                so while climbing and your ascent and acclimatization, there is
                no a climb higher purpose to benefit.
              </p>
              <img
                src={kilimanjaro}
                alt="Mountain sunset"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>
            {/* Day 4 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 4</h4>
              <div className="text-sm text-gray-600 mb-1">
                Dinso Camp Up Winds to Beke hut
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 27, 2024 to 18:00 to 20:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 14 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 12 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Highland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Today is a challenging day, but achievable for A-list day. It is
                a gentle walk past several Dirko's glaciated peak, across the
                plateau, and by Beke's Camp's and waterfall headwaters by
                systems. Then we'll continue to bush hut, a little-used site on
                the mountain's eastern face. The campsite lies at 4,750 meters,
                so while climbing and your ascent and acclimatization, there is
                no a climb higher purpose to benefit.
              </p>
              <img
                src={kilimanjaro}
                alt="Mountain sunset"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>
            {/* Day 5 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 5</h4>
              <div className="text-sm text-gray-600 mb-1">
                Dinso Camp Up Winds to Beke hut
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 27, 2024 to 18:00 to 20:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 14 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 12 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Highland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Today is a challenging day, but achievable for A-list day. It is
                a gentle walk past several Dirko's glaciated peak, across the
                plateau, and by Beke's Camp's and waterfall headwaters by
                systems. Then we'll continue to bush hut, a little-used site on
                the mountain's eastern face. The campsite lies at 4,750 meters,
                so while climbing and your ascent and acclimatization, there is
                no a climb higher purpose to benefit.
              </p>
              <img
                src={kilimanjaro}
                alt="Mountain sunset"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>
            {/* Day 6 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 6</h4>
              <div className="text-sm text-gray-600 mb-1">
                Dinso Camp Up Winds to Beke hut
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 27, 2024 to 18:00 to 20:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 14 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 12 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Highland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Today is a challenging day, but achievable for A-list day. It is
                a gentle walk past several Dirko's glaciated peak, across the
                plateau, and by Beke's Camp's and waterfall headwaters by
                systems. Then we'll continue to bush hut, a little-used site on
                the mountain's eastern face. The campsite lies at 4,750 meters,
                so while climbing and your ascent and acclimatization, there is
                no a climb higher purpose to benefit.
              </p>
              <img
                src={kilimanjaro}
                alt="Mountain sunset"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>
            {/* Day 7 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium">Day 7</h4>
              <div className="text-sm text-gray-600 mb-1">
                Dinso Camp Up Winds to Beke hut
              </div>
              <div className="text-sm text-gray-600 mb-1">
                November 27, 2024 to 18:00 to 20:00
              </div>
              <div className="text-sm text-gray-600 mb-1">Duration: 14 hrs</div>
              <div className="text-sm text-gray-600 mb-1">
                Hiking Time: 12 hours
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Habitat: Highland
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Today is a challenging day, but achievable for A-list day. It is
                a gentle walk past several Dirko's glaciated peak, across the
                plateau, and by Beke's Camp's and waterfall headwaters by
                systems. Then we'll continue to bush hut, a little-used site on
                the mountain's eastern face. The campsite lies at 4,750 meters,
                so while climbing and your ascent and acclimatization, there is
                no a climb higher purpose to benefit.
              </p>
              <img
                src={kilimanjaro}
                alt="Mountain sunset"
                className="w-80 h-80 object-cover rounded-lg mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
