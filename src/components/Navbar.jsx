import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-0 px-4 sm:px-6 md:mx-12 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="font-extrabold text-pink-500 text-xl p-2">Agency</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="px-2 md:px-4 py-2 font-semibold text-gray-200">Home</Link>
            <Link to="/about" className="px-2 md:px-1/2 py-2 font-semibold text-gray-200">About Us</Link>
            <Link to="/faq" className="px-2 md:px-1/2 py-2 font-semibold text-gray-200">Faq's</Link>
            <Link to="/our-client" className="px-2 md:px-1/2 py-2 font-semibold text-gray-200">Our Clients</Link>
            <Link to="/services" className="px-2 md:px-1/2 py-2 font-semibold text-gray-200">Services</Link>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-pink-500 text-white font-bold py-1 px-3">Support us</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-700 mx-0 md:mx-8 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <Link to="/" className="block px-1 md:px-4 py-2 mx-6 md:mx-8 font-medium text-gray-300 hover:bg-gray-200 focus:bg-gray-200">Home</Link>
        <Link to="/about" className="block px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-300 hover:bg-gray-200 focus:bg-gray-200">About Us</Link>
        <Link to="/faq" className="block px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-300 hover:bg-gray-200 focus:bg-gray-200">Faq's</Link>
        <Link to="/services" className="block px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-300 hover:bg-gray-200 focus:bg-gray-200">Services</Link>
        <Link to="/our-client" className="block px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-300 hover:bg-gray-200 focus:bg-gray-200">Previous Clients</Link>
        <button className="block w-full text-left font-medium mx-6 md:mx-8 text-gray-300 hover:bg-gray-200 py-2 px-1 md:px-4 focus:bg-gray-200">Support us</button>
      </div>

    </nav>
  );
};

export default Navbar;
