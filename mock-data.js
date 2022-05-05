//@ts-check

module.exports = () => {
  return {
    restaurants: makeMockRestaurants(),
  };
};

/** @returns {import('./src/app/interfaces/restaurant').Restaurant[]} */
function makeMockRestaurants() {
  return [
    {
      imageUrl: "https://source.unsplash.com/collection/345703/300x300?v=1",
      name: "Jammi Kebabai",
      address: "Stoties g. 22",
      distanceInKm: 4.5,
      rating: 7.5,
    },
    {
      imageUrl: "https://source.unsplash.com/collection/345703/300x300?v=2",
      name: "Čili Picerija",
      address: "Vikingų g. 4",
      distanceInKm: 1,
      rating: 4.5,
      discount: "-20%",
    },
    {
      imageUrl: "https://source.unsplash.com/collection/345703/300x300?v=3",
      name: "Grill London",
      address: "Vilniaus g. 7",
      distanceInKm: 2.5,
      rating: 9.5,
      discount: "Nemokamas atvežimas",
    },
    {
      imageUrl: "https://source.unsplash.com/collection/345703/300x300?v=3",
      name: "McDonalds",
      address: "Gedimino pr. 5",
      distanceInKm: 6.5,
      rating: 9.5,
    },
  ];
}
