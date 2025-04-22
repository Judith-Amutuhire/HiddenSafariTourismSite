// This file will help you test the app before connecting to a real API
// src/data/adventures.js

import * as images from '/src/assets';

export const adventuresData = [
  {
    id: 1,
    title: "KILIMANJARO",
    location: "Kilimanjaro, Tanzania",
    image: images.kilimanjaro,
    coverImage: images.kilimanjaro, // Use a wider image for the cover if available
    price: "$7,999",
    duration: "7 days",
    rating: 4.8,
    reviews: 425,
    maxGroupSize: 12,
    description: "Mount Kilimanjaro, the highest peak in Africa, stands tall at 5,895 meters (19,341 feet). Africa's best-known mountain is located in Tanzania. The snow-capped peak offers breathtaking views across the African plains. Mount Kilimanjaro offers a unique opportunity to 'climb to the roof of Africa.' Diverse vegetation transitions from rainforest through alpine meadow to finally barren lunar landscape. From alpine stretches to barren alpine deserts and finally to its glaciers.",
    categories: ["Trekking", "Adventure", "Expert", "Medium"],
    tags: ["Travelling", "First Aid", "Accesories", "Insurance"],
    days: [
      {
        day: 1,
        title: "Arrival in Forest Camp",
        elevation: "2,800m to 3,000m",
        distance: "11 km",
        duration: "5-6 hours",
        description: "We'll depart Moshi for Londorossi Gate, taking about 2 hours. Here you will complete the park entry formalities. From there we'll drive to the Lemosho trailhead. Upon arrival at trailhead, we'll begin hiking through undisturbed forest, which winds to the first camp site. We'll have dinner and then continue through the undisturbed forest which winds to the first campsite.",
        image: images.kilimanjaro
      },
      {
        day: 2,
        title: "Forest Camp to Shira Camp",
        elevation: "3,000m to 3,800m",
        distance: "8 km",
        duration: "4-5 hours",
        description: "We'll continue our ascent, heading out of the forest area into a savannah of tall grasses, heather, and volcanic rock draped with lichen beards. We will ascend through the lush rolling hills below the Shira plateau, finally reaching camp at the edge of the plateau at Shira Camp. The views of Kibo from this spot on the plateau are amazing.",
        image: images.kilimanjaro
      },
      {
        day: 3,
        title: "Shira Camp to Moir Hut",
        elevation: "3,800m to 4,200m",
        distance: "14 km",
        duration: "5-6 hours",
        description: "Today we continue to the east up a ridge, passing the junction towards the peak of Kibo. As we continue, our direction changes to the South East towards the Lava Tower, called the 'Shark's Tooth.' Shortly after the tower, we come to the second junction which brings us up to the Arrow Glacier at an altitude of 4,876m. We now continue down to the Barranco Hut at an altitude of 3,860m. Here we rest, enjoy dinner, sleep and overnight. Although, you end the day at the same elevation as when you started, this day is very important for acclimatization.",
        image: images.kilimanjaro
      }
    ],
    additionalInfo: [
      "Suitable for intermediate hikers",
      "Porters will carry up to 15kg of your gear"
    ]
  },
  // Add more adventures with similar structure for HWANGE PARK, BOTSWANA, etc.
];

// Mock API function to get adventure by ID
export const getAdventureById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const adventure = adventuresData.find(adv => adv.id === parseInt(id));
      if (adventure) {
        resolve(adventure);
      } else {
        reject(new Error('Adventure not found'));
      }
    }, 500); // Simulate network delay
  });
};