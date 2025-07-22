

import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

// Navigation items as an array of objects
const navLinks = [
  { name: "Home", href: "/", active: false },
  { name: "Guide To Good Sleep", href: "tosleep", active: false },
  { name: "Mattress", href: "#", hasDropdown: true, active: false },
  { name: "Royale Series", href: "#", active: false },
  { name: "Sleep Essentials", href: "#", hasDropdown: true, active: false },
  { name: "Contact", href: "Signup", active: false },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [sign,setsig] = useState(false);

  const togglesignup = () => {
    setsig(!sign);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when toggling menu
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

 

  return (
    <nav className="bg-[#4736cb] px-4 py-4 sticky top-0 z-50">
      {/* Container to control spacing and responsiveness */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT SECTION: Logo */}
        <div className="flex items-center">
          <div className="pl-0.5">
            <img
              src="/Restin.png"
              alt="Restin Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* CENTER SECTION: Desktop Nav Links */}
        <ul className="hidden lg:flex gap-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className={`flex items-center py-2 px-1 ${
                  link.active ? "text-yellow-300" : "text-gray-300"
                } hover:text-white transition duration-200`}
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault();
                    toggleDropdown(index);
                  }
                }}
              >
                {link.name}
                {link.hasDropdown && (
                  <span className="ml-1 text-xs transform translate-y-px">
                    ▼
                  </span>
                )}
              </a>
              
              {/* Yellow underline appears only on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              
              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Memory Foam
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Spring Mattress
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Hybrid Mattress
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION: Cart + User icons */}
        <div className="flex items-center gap-6 text-white">
          <div className="relative hidden md:block">
            <FaShoppingCart className="text-xl hover:text-yellow-300 transition-colors cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs bg-pink-500 rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div  className="hidden md:block">

           <a href="Signup">Signup</a>
            <a className="pl-5" href="Login">Login</a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#3c2db0] mt-4 rounded-lg shadow-xl">
          <ul className="py-4">
            {navLinks.map((link, index) => (
              <li key={index} className="border-b border-indigo-500/30">
                <a
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-6 ${
                    link.active ? "text-yellow-300" : "text-gray-300"
                  } hover:text-white transition duration-200`}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(index);
                    } else {
                      toggleMenu();
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <span className="text-xs transform translate-y-px">
                      {activeDropdown === index ? "▲" : "▼"}
                    </span>
                  )}
                </a>
                
                {/* Mobile Dropdown */}
                {link.hasDropdown && activeDropdown === index && (
                  <div className="bg-indigo-700/50 py-2 pl-8">
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-200 hover:text-white"
                      onClick={toggleMenu}
                    >
                      Memory Foam
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-200 hover:text-white"
                      onClick={toggleMenu}
                    >
                      Spring Mattress
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-200 hover:text-white"
                      onClick={toggleMenu}
                    >
                      Hybrid Mattress
                    </a>
                  </div>
                )}
              </li>
            ))}
            <li className="flex justify-center mt-4 px-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <FaShoppingCart className="text-xl" />
                  <span className="absolute -top-2 -right-2 text-xs bg-pink-500 rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <a href="Signup">
                <FaUser  className="text-xl" />
                </a>
               
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

