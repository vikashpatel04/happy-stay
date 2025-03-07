import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const guides = [
  { id: 1, name: "Mohan Raj", cost: 1200, rating: 4.7 },
  { id: 2, name: "Lakshmi Devi", cost: 1500, rating: 4.9 },
  { id: 3, name: "Suresh Kumar", cost: 1000, rating: 4.5 }
];

const tours = {
  1: { 
    name: "Nilgiri Hills Explorer", 
    price: 4500, 
    image: "/images/ooty.jpeg",
    description: "Explore the beautiful Nilgiri Hills with this comprehensive tour that takes you through scenic viewpoints, mountain trails, and local villages. Experience the fresh mountain air and breathtaking vistas of the Blue Mountains."
  },
  2: { 
    name: "Ooty Botanical Gardens Tour", 
    price: 2500, 
    image: "/images/botanical_garden.jpg",
    description: "Visit the 55-acre Government Botanical Gardens established in 1848. Explore exotic and indigenous plants, fossilized tree trunks, and the beautiful terraced garden layout. Perfect for nature lovers and photography enthusiasts."
  },
  3: { 
    name: "Tea Plantation & Factory Visit", 
    price: 3500, 
    image: "/images/tea_planation_factory_visit.jpg",
    description: "Experience Ooty's famous tea culture with visits to sprawling tea estates and a working tea factory. Learn about the tea production process from plucking to packaging and enjoy tea tasting sessions with stunning mountain backdrops."
  },
  4: { 
    name: "Doddabetta Peak Adventure", 
    price: 3800, 
    image: "/images/doddabeta_peak_adventure.jpg",
    description: "Visit the highest peak in the Nilgiri mountains standing at 2,637 meters. Enjoy panoramic views of the surrounding landscapes, visit the telescope house for enhanced viewing, and experience the thrill of being at the junction of the Western and Eastern Ghats."
  },
  5: { 
    name: "Ooty Lake Boating Experience", 
    price: 2200, 
    image: "/images/ooty_lake.jpg",
    description: "Enjoy a serene boating experience on the artificial Ooty Lake created by John Sullivan in 1824. Choose between paddle boats, row boats, or motor boats and soak in the picturesque surroundings while gliding across the calm waters."
  },
  6: { 
    name: "Pykara Falls & Lake Tour", 
    price: 3200, 
    image: "/images/pykara_waterfalls.jpg",
    description: "Visit the stunning Pykara Falls and Lake located about 20km from Ooty. Enjoy boating on the serene lake, witness the majestic waterfall, and explore the surrounding Shola forests. A perfect destination for nature lovers and photographers."
  },
  7: { 
    name: "Emerald Lake Scenic Tour", 
    price: 2900, 
    image: "/images/emarald_lake.jpg",
    description: "Discover the hidden gem of Emerald Lake, situated amidst tea plantations and eucalyptus trees. Enjoy the tranquil atmosphere of this less crowded destination, perfect for picnics and peaceful nature walks with stunning views of the Nilgiri hills."
  },
  8: { 
    name: "Rose Garden Walking Tour", 
    price: 1800, 
    image: "/images/rose_garden.jpg",
    description: "Explore one of the largest rose gardens in India with over 20,000 varieties of roses. Spread across 4 hectares in a terraced arrangement, this garden offers a visual treat with its colorful blooms and fragrant atmosphere perfect for flower enthusiasts."
  },
  9: { 
    name: "Tribal Village Experience", 
    price: 3700, 
    image: "/images/tribal_village.jpg",
    description: "Immerse yourself in the cultural heritage of the Nilgiris with visits to traditional Toda and Kota tribal villages. Learn about their unique customs, architectural styles, traditional crafts, and sustainable lifestyle that has remained largely unchanged for centuries."
  }
};

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours[id];
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [selectedGuide, setSelectedGuide] = useState(null);

  if (!tour) return <p className="text-center mt-10 text-xl">Tour not found!</p>;

  const handleBooking = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("You must be logged in to book a tour!");
      navigate("/login");
      return;
    }

    if (!name || !phone || !date || !selectedGuide) {
      alert("Please fill all details!");
      return;
    }

    const trip = {
      tourName: tour.name,
      date,
      phone,
      guide: selectedGuide.name,
      totalCost: tour.price + selectedGuide.cost,
      bookedBy: user.email
    };

    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    trips.push(trip);
    localStorage.setItem("trips", JSON.stringify(trips));

    alert("Booking confirmed!");
    navigate("/my-trips");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Tour Header Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="relative h-80">
          <img 
            src={tour.image} 
            alt={tour.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white">{tour.name}</h2>
        </div>
        
        {/* Tour Info Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold">
              ₹{tour.price} per person
            </p>
            <div className="flex items-center text-yellow-500">
              <span className="mr-1">★★★★</span>
              <span className="text-gray-600 text-sm">(4.8/5 from 42 reviews)</span>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Guided Tour</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">6-8 Hours</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Pickup Included</span>
          </div>
        </div>
      </div>
      
      {/* Booking Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-6 pb-2 border-b">Book Your Tour</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Tour Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Guide Selection Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-6 pb-2 border-b">Select a Local Ooty Guide</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <div 
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                selectedGuide?.id === guide.id 
                  ? "border-green-500 bg-green-50" 
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-3 flex items-center justify-center text-gray-400">
                  {guide.name.charAt(0)}
                </div>
                <h4 className="font-semibold text-lg">{guide.name}</h4>
                <div className="flex items-center text-yellow-400 mt-1">
                  {"★".repeat(Math.floor(guide.rating))}
                  <span className="text-gray-600 ml-1">{guide.rating}</span>
                </div>
                <p className="mt-2 font-medium text-gray-700">₹{guide.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Booking Summary */}
      {selectedGuide && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Tour Price:</span>
            <span>₹{tour.price}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Guide Fee:</span>
            <span>₹{selectedGuide.cost}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-2 mt-2">
            <span>Total:</span>
            <span>₹{tour.price + selectedGuide.cost}</span>
          </div>
        </div>
      )}
      
      <button 
        onClick={handleBooking} 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default TourDetails;