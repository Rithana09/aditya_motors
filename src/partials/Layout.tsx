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
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 space-y-4 flex flex-col items-center mr-6">
        <a
          href="https://wa.me/yourwhatsappnumber" 
          target="_blank"
          rel="noopener noreferrer"
         className="text-gray-900 dark:text-blue-900 hover:text-green-500 transition-colors duration-200"
        >
          <FaWhatsapp size={40} />
        </a>
        <a
          href="https://www.instagram.com/yourprofile" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-blue-900 hover:text-green-500 transition-colors duration-200"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://t.me/yourtelegram" 
          target="_blank"
          rel="noopener noreferrer"
           className="text-gray-900 dark:text-blue-900 hover:text-green-500 transition-colors duration-200"
        >
          <FaTelegram size={40} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
