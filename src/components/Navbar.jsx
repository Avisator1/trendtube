import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#F7FAFC", height: "80px" }} className="border-gray-200">
      <div className="flex items-center justify-between mx-auto p-4 h-full font-inter">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="TrendTube Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">TrendTube</span>
        </Link>

        {/* Centered Links for PC */}
        <div className="hidden md:flex md:justify-center flex-grow">
          <ul className="font-medium flex space-x-8">
            <li>
              <Link to="/pricing" className="text-black hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-black hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-black hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="bg-[#eef5fa] text-black px-4 py-2 rounded">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#F7FAFC] flex flex-col z-50">
          <div className="flex items-center justify-between p-4">
            {/* Logo on Mobile Menu */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} className="h-8" alt="TrendTube Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">TrendTube</span>
            </Link>

            {/* Close Icon on Mobile Menu */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-4 mt-8">
            <li className="text-left">
              <Link to="/pricing" onClick={() => setMenuOpen(false)} className="text-black hover:underline text-lg text-left">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={() => setMenuOpen(false)} className="text-black hover:underline text-lg">
                Features
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="text-black hover:underline text-lg">
                FAQ
              </Link>
            </li>
            <li>
              <button className="bg-[#e6b3c5] text-black px-4 py-2 rounded">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
