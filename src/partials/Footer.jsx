import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa';
import ScrollToTopLink from '../partials/ScrollToTopLink';
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-4 w-full">
        {/* Main content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="text-left">
            <div className="flex-shrink-0 cursor-pointer">
              <ScrollToTopLink to="/">
                <img
                  src="/adityalogo.png"
                  alt="Aditya Motors Logo"
                  className="w-32 h-auto object-contain"
                />
              </ScrollToTopLink>
            </div>
            <p className="text-gray-400 font-[Hind_Vadodara] text-sm sm:text-base mb-4 mt-2">
              Contact us today to start designing a custom bike that's uniquely yours.
            </p>
            <div className="flex space-x-4 cursor-pointer text-sm sm:text-base mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-red-600 transition-colors duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-red-600 transition-colors duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-red-600 transition-colors duration-200" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-600 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[jost] font-bold mb-4">Contact Info</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li className="flex flex-row items-start gap-2">
                <FaMapMarkerAlt className="mt-1 font-[Hind_Vadodara]" />
                <div className="flex flex-col text-sm text-white leading-relaxed">
                  <div>522/D, II State, 1 Block, <br />
                    Dr.Rajkumar Road, Rajajinagar,</div>
                  <div className="inline-flex items-center">
                    <HiLocationMarker className="text-purple-600 mr-1" />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">
                      Opposite to Rameshwaram Cafe,
                    </span>
                  </div>
                  <div>BANGALORE - 560 010, <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold"> +91 9343225633</span></div>
                </div>
              </li>
              <li className="flex items-center gap-2 font-[Hind_Vadodara]">
                <FaPhoneAlt />
                <span>Tel : 080 - 2357 8007</span>
              </li>
              <li className="flex items-center gap-2 font-[Hind_Vadodara]">
                <a
                  href="https://www.adityamotor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  <FaGlobe />
                  <span>www.adityamotor.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 font-[Hind_Vadodara]">
                <a href="mailto:adityamotorstech@gmail.com" className="flex items-center gap-2 text-white hover:underline">
                  <FaEnvelope />
                  <span>adityamotorstech@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Us */}
          <div className="text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-[jost] font-bold mb-4">Explore Us</h2>
            <ul className="space-y-2 font-[Hind_Vadodara] text-sm sm:text-base text-gray-300">
              <li>
                <ScrollToTopLink to="/" className="hover:underline block py-1">Home</ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/about" className="hover:underline block py-1">About</ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/service" className="hover:underline block py-1">Services</ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/honda" className="hover:underline block py-1">Honda</ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/blog" className="hover:underline block py-1">Blog</ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/contact" className="hover:underline block py-1">Contact</ScrollToTopLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 font-[Hind_Vadodara] text-center text-gray-400 text-xs sm:text-sm border-t border-gray-700 pt-4 sm:pt-6 w-full">
          Copyright © {new Date().getFullYear()} Aditya Motors All rights reserved Designed by NATAL NINE IT SOLUTIONS PVT LTD
        </div>
      </div>
    </footer>
  );
};

export default Footer;