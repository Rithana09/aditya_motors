import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="w-full px-6 py-12 md:px-16 lg:px-32 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Head Office Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2">HEAD OFFICE</h2>
          <p className="text-gray-600 mb-6">
            Don’t Hesitate to Contact Us or Come Directly to Our Workshop
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-600 text-xl mt-1" />
              <div>
                <p className="font-bold">ADDRESS:</p>
                <p className="text-gray-700">
                  GP Rajarathnam Rd, A Block, Milk Colony, Subramanyanagar, 2 State, Rajajinagar, Bengaluru, Karnataka 560010
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-red-600 text-xl mt-1" />
              <div>
                <p className="font-bold">PHONE:</p>
                <p className="text-gray-700">+91 9343225633</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-red-600 text-xl mt-1" />
              <div>
                <p className="font-bold">EMAIL:</p>
                <p className="text-gray-700">adityamotorstech@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600 mb-3">Follow our Social Media:</p>
            <div className="flex gap-4 text-red-600 text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </motion.div>

        {/* Let's Talk Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2">LET’S TALK</h2>
          <p className="text-gray-600 mb-6">
            Feel free to ask a question or simply leave a comment.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full border border-gray-300 px-4 py-2"
            ></textarea>

            <button className="mt-4 bg-red-600 text-white py-5 px-9 border border-transparent hover:bg-white hover:border-red-600 hover:text-red-600 transition text-sm font-medium">
              SEND MESSAGE →
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
