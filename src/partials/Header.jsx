import { FaBicycle } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ScrollToTopLink from '../partials/ScrollToTopLink';

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
          <ScrollToTopLink to="/">
            <img
              src="/adityalogo.png"
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
          </ScrollToTopLink>
        </div>

        {/* Right side navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ScrollToTopLink
            to="/"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Home
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/about"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            About
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/service"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Services
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/honda"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Honda
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/blog"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Blog
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/contact"
            className="text-white font-medium uppercase py-2 tracking-[1.1px] hover:text-red-600"
          >
            Contact
          </ScrollToTopLink>

          {/* Bike Icon and Phone Number (Desktop) */}
          <div className="flex items-center space-x-4 pl-4">
            <a
              href="tel:+919343225633"
              className="flex items-center space-x-2 text-white cursor-pointer hover:text-red-600 transition-colors duration-200"
            >
              <FaBicycle size={20} />
              <span className="font-medium text-xl">+91 9343225633</span>
            </a>
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Contact on left */}
          <a
            href="tel:+919343225633"
            className="text-white font-bold text-sm ml-5 flex items-center gap-2"
          >
            <FaBicycle size={20} />
            +91 9343225633
          </a>

          {/* Hamburger icon on right */}
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 hover:text-red-600 text-white py-4 px-6 space-y-4">
          <ScrollToTopLink to="/" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Home
          </ScrollToTopLink>
          <ScrollToTopLink to="/about" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            About
          </ScrollToTopLink>
          <ScrollToTopLink to="/service" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Services
          </ScrollToTopLink>
          <ScrollToTopLink to="/honda" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Honda
          </ScrollToTopLink>
          <ScrollToTopLink to="/blog" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Blog
          </ScrollToTopLink>
          <ScrollToTopLink to="/contact" className="text-white font-medium py-2 uppercase block hover:text-red-600">
            Contact
          </ScrollToTopLink>
        </div>
      )}
    </header>
  );
};

export default Header;