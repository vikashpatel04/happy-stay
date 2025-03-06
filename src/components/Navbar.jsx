import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-white text-gray-500 p-4 flex justify-around shadow-md">
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-900 text-lg">Home</Link>
        <Link to="/tours" className="hover:text-gray-900 text-lg">Tours</Link>
        {user && <Link to="/my-trips" className="hover:text-gray-900 text-lg">My Trips</Link>}
        {user?.isAdmin && <Link to="/admin" className="hover:text-gray-900 text-lg">Admin Page</Link>}
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4 text-black text-lg">Welcome, {user.name}</span>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded-sm text-black text-lg">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4 text-black text-lg">Login</Link>
            <Link to="/signup" className="bg-blue-500 px-4 py-1 rounded-sm text-black text-lg">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
