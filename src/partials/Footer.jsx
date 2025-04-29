import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-4 w-full">
        {/* Main content grid - left aligned on all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="text-left">
            <div className="flex-shrink-0 cursor-pointer">
              <Link to="/">
                <img
                  src="/adityalogo.png"
                  alt="Logo"
                  className="w-32 h-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-400 font-[Hind_Vadodara] text-sm sm:text-base mb-4 mt-2">
              Contact us today to start designing a custom bike that's uniquely yours.
            </p>
            <div className="flex space-x-4 cursor-pointer text-sm sm:text-base mt-4">
              <FaFacebookF className="hover:text-red-600 transition-colors duration-200" />
              <FaTwitter className="hover:text-red-600 transition-colors duration-200" />
              <FaInstagram className="hover:text-red-600 transition-colors duration-200" />
              <FaYoutube className="hover:text-red-600 transition-colors duration-200" />
            </div>

          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[jost] font-bold mb-4">Contact Info</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li className="flex flex-row items-start gap-2">
                <FaMapMarkerAlt className="mt-1 font-[Hind_Vadodara]" />
                <span>522/D, II State, 1 Block, Dr.Rajkumar Road, Near Orion Mall, Rajajinagar, BANGALORE - 560 010 
                 
                </span> {/* Address Changed */}
                
              </li>
              <li className="flex items-center cursor-pointer font-[Hind_Vadodara] gap-2">
                <FaPhoneAlt />
                <span>Tel : 080 - 2357 8007</span> {/* Added Tel Number */}
              </li>
              <li className="flex items-center cursor-pointer font-[Hind_Vadodara] gap-2">
                <FaPhoneAlt />
                <span>+91 9343225633</span>
              </li>
              <li className="flex items-center cursor-pointer font-[Hind_Vadodara] gap-2">
                <FaEnvelope />
                <span>adityamotorstech@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Explore Us */}
          <div className="text-left cursor-pointer">
            <h2 className="text-lg sm:text-xl md:text-2xl font-[jost] font-[jost] font-bold mb-4">Explore Us</h2>
            <ul className="space-y-2 font-[Hind_Vadodara] text-sm sm:text-base text-gray-300">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright - full width */}
        <div className="mt-8 sm:mt-10 md:mt-12 font-[Hind_Vadodara] text-center text-gray-400 text-xs sm:text-sm border-t border-gray-700 pt-4 sm:pt-6 w-full">
          Copyright © 2024 Aditya Motors All rights reserved Designed by HURRYEP TECHNOLOGIES
        </div>
      </div>
    </footer>
  );
};

export default Footer;