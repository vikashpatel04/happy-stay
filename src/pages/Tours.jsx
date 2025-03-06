import { Link } from "react-router-dom";

const tours = [
  { id: 1, name: "Nilgiri Hills Explorer", price: 4500, image: "/ooty.jpeg" },
  { id: 2, name: "Ooty Botanical Gardens Tour", price: 2500, image: "/wildlife.jpg" },
  { id: 3, name: "Tea Plantation & Factory Visit", price: 3500, image: "/temple.jpg" },
  { id: 4, name: "Doddabetta Peak Adventure", price: 3800, image: "/doddabetta.jpg" },
  { id: 5, name: "Ooty Lake Boating Experience", price: 2200, image: "/ooty-lake.jpg" },
  { id: 6, name: "Pykara Falls & Lake Tour", price: 3200, image: "/pykara.jpg" },
  { id: 7, name: "Emerald Lake Scenic Tour", price: 2900, image: "/emerald-lake.jpg" },
  { id: 8, name: "Rose Garden Walking Tour", price: 1800, image: "/rose-garden.jpg" },
  { id: 9, name: "Tribal Village Experience", price: 3700, image: "/tribal-village.jpg" }
];

const Tours = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Discover Ooty Tours</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">Explore the Queen of Hill Stations with our carefully curated tours showcasing the most beautiful destinations in Ooty and the Nilgiri Hills.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white border-0 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Maintain 16:9 Aspect Ratio */}
            <div className="w-full aspect-16/9 overflow-hidden">
              <img src={tour.image} alt={tour.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.name}</h3>
              <p className="text-green-600 font-semibold text-lg mb-4">₹{tour.price}</p>
              <Link to={`/tours/${tour.id}`} className="block">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;