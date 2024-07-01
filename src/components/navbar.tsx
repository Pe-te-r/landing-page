
import  { useState } from 'react';
import { Link} from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/" className="text-white">
            Phantom
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer transition duration-300 ease-in-out">
              Home
            </Link>
            <Link to="/service" className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer transition duration-300 ease-in-out">
              Services
            </Link>
            <button><Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer transition duration-300 ease-in-out">
              About
            </Link></button>
            <button><Link to="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer transition duration-300 ease-in-out">
              Contact
            </Link></button>
            <button><Link to="/login" className="text-white bg-gray-700 hover:bg-gray-800 px-3 py-2 rounded cursor-pointer transition duration-300 ease-in-out">
              Login
            </Link></button>
            <button><Link to="/signup" className="text-white bg-green-500 hover:bg-green-600 px-3 py-2 rounded cursor-pointer transition duration-300 ease-in-out">
              Sign Up
            </Link></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
