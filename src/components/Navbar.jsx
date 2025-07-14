import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Navigation items as an array of objects
const navLinks = [
  { name: "Home", href: "#", active: false },
  { name: "Guide To Good Sleep", href: "#", active: false },
  { name: "Mattress", href: "#", hasDropdown: true, active: false },
  { name: "Royale Series", href: "#", active: false },
  { name: "Sleep Essentials", href: "#", hasDropdown: true, active: false },
  { name: "Contact", href: "#", active: false },
];

const Navbar = () => {
  return (
    <nav className="bg-[#4736cb] px-2 py-4">
      {/* Container to control spacing and responsiveness */}
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* LEFT SECTION: Logo + Nav links */}
        <div className="flex items-center gap-35 flex-wrap">
          {/* Logo with small left space */}
          <div className="pl-0.5">
            <img
              src="/Restin.png" // Make sure it's in your public folder
              alt="Restin Logo"
              className="h-10"
            />
          </div>

          {/* Nav Links (centered and evenly spaced) */}
          <ul className="hidden md:flex gap-10 text-white font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  {link.name}
                  {link.hasDropdown && <span className="ml-1">▼</span>}
                </a>
                {/* Yellow underline appears only on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SECTION: Cart + User icons */}
        <div className="flex items-center gap-6 text-white mt-4 md:mt-0">
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 text-xs bg-pink-500 rounded-full px-1">
              0
            </span>
          </div>
          <FaUser className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

