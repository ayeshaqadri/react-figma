// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">
            <a href="/" className="text-gray-800">
              Logoipsum
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="/portfolio" className="text-gray-800 hover:text-gray-600">
              Portfolio
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600">
              About Me
            </a>
            <a href="/testimonials" className="text-gray-800 hover:text-gray-600">
              Testimonials
            </a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;