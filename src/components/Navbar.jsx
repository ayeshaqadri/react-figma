// src/components/Navbar.jsx
import React from 'react';
import logo from '../images/Logo.png'
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-7 w-30 mr-2" />
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-gray-950  hover:text-violet-600">
              Home
            </a>
            <a href="/portfolio" className="text-gray-950  hover:text-violet-600">
              Portfolio
            </a>
            <a href="/about" className="text-gray-950 hover:text-violet-600">
              About Me
            </a>
            <a href="/testimonials" className="text-gray-950 hover:text-violet-600">
              Testimonials
            </a>
          </div>
          <button className="text-violet-600 outline py-2 px-3 hover:bg-violet-600 hover:text-slate-50 "> Contact Me</button>

        </div>
      </div>
    </nav>
  );
};


export default Navbar;