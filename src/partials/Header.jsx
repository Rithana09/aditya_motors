import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaBicycle } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-6 md:px-12 py-3 bg-gray-800 bg-opacity-90 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo on left */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/adityalogo.png"
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Right side navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            About
          </Link>
          <Link
            to="/service"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Services
          </Link>
          <Link
            to="/honda"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Honda
          </Link>
          <Link
            to="/blog"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Contact
          </Link>

          {/* Bike Icon and Phone Number (Desktop) */}
          <div className="flex items-center space-x-4 pl-4">
            <a
              href="tel:+919343225633" // This makes the phone number clickable
              className="flex items-center space-x-2 text-white cursor-pointer hover:text-red-600 transition-colors duration-200"
            >
              <FaBicycle size={20} />
              <span className="font-medium text-xl">+91 9343225633</span>
            </a>
          </div>

          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="text-white hover:text-gray-600 cursor-pointer transition-colors duration-200"
          >
            <FiSearch size={20} />
          </button>

          {/* Search Input */}
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="ml-4 p-2 rounded bg-gray-700 text-white w-64"
            />
          )}
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 hover:text-red-600 text-white py-4 px-6 space-y-4">
          <Link to="/" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Home
          </Link>
          <Link to="/about" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            About
          </Link>
          <Link to="/service" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Services
          </Link>
          <Link to="/honda" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Honda
          </Link>
          <Link to="/blog" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Blog
          </Link>
          <Link to="/contact" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Contact
          </Link>

          {/* Bike Icon and Phone Number (Mobile) */}
          <div className="flex items-center space-x-4 pt-4">
            <a
              href="tel:+919343225633" // This makes the phone number clickable in the mobile menu
              className="flex items-center space-x-2 text-white cursor-pointer hover:text-red-600 transition-colors duration-200"
            >
              <FaBicycle size={20} />
              <span className="font-medium text-xl">+91 9343225633</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
