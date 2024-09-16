import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="max-w-7xl mx-0 px-4 sm:px-6 md:mx-12 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="font-extrabold text-yellow-500 text-xl p-2">
              <Link to='/'>Agency</Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="px-2 md:px-4 py-2 font-semibold text-gray-500 hover:text-yellow-500 hover:underline transition-all duration-500">Home</Link>
            <Link to="/about" className="px-2 md:px-1/2 py-2 font-semibold text-gray-500 hover:text-yellow-500 hover:underline transition-all duration-500">About Us</Link>
            <Link to="/faq" className="px-2 md:px-1/2 py-2 font-semibold text-gray-500 hover:text-yellow-500 hover:underline transition-all duration-500">Faq's</Link>
            <Link to="/our-client" className="px-2 md:px-1/2 py-2 font-semibold text-gray-500 hover:text-yellow-500 hover:underline transition-all duration-500">Our Clients</Link>
            <Link to="/services" className="px-2 md:px-1/2 py-2 font-semibold text-gray-500 hover:text-yellow-500 hover:underline transition-all duration-500">Services</Link>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3">Hire us</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-400 focus:border">
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-700 z-40 mx-0 md:mx-8 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <Link to="/" className="block transition-all duration-500 px-1 md:px-4 py-2 mx-6 md:mx-8 font-medium text-gray-800 hover:text-gray-900 hover:bg-yellow-100 focus:underline">Home</Link>
        <Link to="/about" className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-800 hover:text-gray-900 hover:bg-yellow-100 focus:underline">About us</Link>
        <Link to="/faq" className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-800 hover:text-gray-900 hover:bg-yellow-100 focus:underline">Faq's</Link>
        <Link to="/services" className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-800 hover:text-gray-900 hover:bg-yellow-100 focus:underline">Services</Link>
        <Link to="/our-client" className="block transition-all duration-500 px-1 md:px-4 mx-6 md:mx-8 font-medium py-2 text-gray-800 hover:text-gray-900 hover:bg-yellow-100 focus:underline">Previous Clients</Link>
        <Link to="/our-client" className="block transition-all duration-500 text-center mt-3 font-bold mx-6 md:mx-8  text-gray-800 hover:text-gray-200 bg-yellow-500 hover:bg-yellow-700 py-2 px-1 md:px-4 focus:underline mb-2">Support us</Link>
      </div>

    </nav>
  );
};

export default Navbar;
