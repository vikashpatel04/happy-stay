import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Predefined admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@ootytours.com",
  password: "admin123",
  name: "Admin",
  isAdmin: true
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Initialize admin credentials if not already set
  useState(() => {
    if (!localStorage.getItem("adminInitialized")) {
      localStorage.setItem("adminUser", JSON.stringify(ADMIN_CREDENTIALS));
      localStorage.setItem("adminInitialized", "true");
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if this is an admin login
    const adminUser = JSON.parse(localStorage.getItem("adminUser"));
    if (email === adminUser.email && password === adminUser.password) {
      localStorage.setItem("user", JSON.stringify(adminUser));
      alert("Admin login successful!");
      navigate("/admin");
      return;
    }

    // Regular user login (existing functionality)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder="Enter your email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            id="password"
            placeholder="Enter your password" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 shadow-md"
        >
          Login
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
            Sign up
          </Link>
        </p>
      </div>
      
      <div className="mt-6 p-3 bg-gray-50 rounded-md border border-gray-200">
        <p className="text-sm text-gray-700 font-medium mb-1">Admin Access:</p>
        <p className="text-sm text-gray-600">Email: admin@ootytours.com</p>
        <p className="text-sm text-gray-600">Password: admin123</p>
      </div>
    </div>
  );
};

export default Login;