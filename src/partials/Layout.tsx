import React from "react";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* Common Header */}
      <Header />

      {/* Main Content */}
      <div>{children}</div>

      {/* Social Media Icons */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 space-y-3 sm:space-y-4 flex flex-col items-center mr-2 sm:mr-4 z-50">
        <a
          href="https://wa.me/919343225633"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-red-800 hover:text-green-500 transition-colors duration-200"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-10 sm:h-10" />
        </a>
        <a
          href="https://www.instagram.com/aditya.motors.bengaluru/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-red-800 hover:text-green-500 transition-colors duration-200"
        >
          <FaInstagram className="w-6 h-6 sm:w-10 sm:h-10" />
        </a>
        <a
          href="https://t.me/aditya_motors"  
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-red-800 hover:text-green-500 transition-colors duration-200"
        >
          <FaTelegram className="w-6 h-6 sm:w-10 sm:h-10" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
