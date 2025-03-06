import { Link } from "react-router-dom";

const images = [
  { id: 1, src: "/images/5.png", title: "Luxury Hill Resorts" },
  { id: 2, src: "/images/2.png", title: "Scenic Cottages" },
  { id: 3, src: "/images/1.png", title: "Ooty Lake Stays" },
  { id: 4, src: "/images/3.jpg", title: "Tea Estate Retreats" },
  { id: 5, src: "/images/4.jpg", title: "Heritage Bungalows" }
];

const featuredStays = [
  { id: 1, name: "Nilgiri Mountain Cottage", price: 3500, image: "/images/4.jpg" },
  { id: 2, name: "Ooty Lake View Resort", price: 5500, image: "/beach.jpg" },
  { id: 3, name: "Colonial Tea Estate Villa", price: 4200, image: "/city.jpg" }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white py-24 px-6"
        style={{
          backgroundImage: "url('/images/hotel-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">Discover Ooty - Queen of Hill Stations</h1>
          <p className="text-lg mt-3">Experience the magic of the Nilgiris with our handpicked accommodations and guided tours.</p>
          <div className="mt-6">
            <Link to="/tours">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition-all">
                Explore Ooty Tours
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stays */}
      <section className="p-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Featured Stays in Ooty</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {featuredStays.map((stay) => (
            <div 
              key={stay.id} 
              className="relative overflow-hidden rounded-xl shadow-lg bg-white w-full sm:w-64 md:w-72"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-left">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{stay.name}</h3>
                  <p className="text-green-600 font-medium">₹{stay.price}/night</p>
                </div>
                <Link to={`/tours/${stay.id}`}>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-3 w-full hover:bg-green-700 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid */}
      <section className="p-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Explore Ooty Accommodations</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 grid-rows-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-xl shadow-md ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
              style={{ height: index === 0 ? "300px" : "150px" }}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 p-10 text-center mt-10">
        <h2 className="text-3xl font-semibold mb-6">What Our Guests Say About Ooty</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 italic">"The tea estate tour was breathtaking! Our guide was knowledgeable and the mountain views were spectacular."</p>
            <p className="mt-2 font-semibold">- Priya S.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 italic">"Staying near Ooty Lake was magical. The cottage was cozy and we could see the sunrise over the mountains every morning."</p>
            <p className="mt-2 font-semibold">- Rahul K.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Ooty Travels & Stays. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;