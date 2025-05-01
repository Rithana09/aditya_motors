import React from "react";
import { motion } from "framer-motion";

const CustomerService = () => {
  return (
    <div className="flex flex-col md:flex-row items-start px-4 sm:px-6 md:px-16 py-8 md:py-16">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/scooty3.jpeg"
          alt="Customer Service"
          className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 h-auto mx-auto rounded-lg object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:pl-8">
        {/* Red Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg font-[jost] sm:text-xl font-semibold mb-4 tracking-wide" style={{ color: "#D33523" }}

        >
          PROVIDING FULL RANGE OF CUSTOMER SERVICE
        </motion.p>

        {/* Bold Texts */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-black text-2xl font-[jost] lg:text-6xl lg:w-4/5 md:text-4xl font-bold mb-2"
        >
          WE BUILD FOR THE ULTIMATE RIDE!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-black text-2xl md:text-4xl font-bold mb-6"
        >
        </motion.p>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row">
          {/* Paragraphs Section */}
          <div className="w-full md:w-2/3 md:pr-4">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-black font-[Hind_Vadodara] text-base md:text-lg mb-6 leading-relaxed"
            >
              Aditya Motors is a professional bike repair shop specializing in both Periodic maintenance and in-depth repairs for all types of scooters and bikes. Based in Bengaluru, we have been providing reliable and affordable bike services for years.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black font-[Hind_Vadodara] text-base md:text-lg mb-6 leading-relaxed"
            >
              As an authorized Honda service centre in Bengaluru, we possess the knowledge and equipment to handle all your Honda servicing needs. Our team is experienced with all types of two-wheelers, and we are dedicated to ensuring your bike remains in excellent condition, whether it’s for daily commuting or long rides.
            </motion.p>
          </div>

          {/* Mission & Vision Column */}
          <div className="w-full md:w-1/3 md:pl-4 md:ml-10 space-y-6 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center text-black-600 font-[jost] font-bold text-lg mb-2">
                <span className="mr-2" style={{ color: "#D33523" }}>››</span> Our Mission
              </div>
              <p className="text-black font-[Hind_Vadodara] text-sm leading-relaxed">
                To provide high-quality, reliable bike repair services that ensure every ride is safe and enjoyable. To build lasting relationships with our customers through trust, integrity, and excellent service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center font-[jost] text-black-600 font-bold text-lg mb-2">
                <span className="mr-2" style={{ color: "#D33523" }}>››</span> Our Vision
              </div>
              <p className="text-black font-[Hind_Vadodara] text-sm leading-relaxed">
                To be the leading bike repair shop known for exceptional service, expert mechanics, and unwavering commitment to customer satisfaction.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-[jost] bg-[#D33523] text-white mt-5 py-5 px-9 border hover:text-[#D33523] hover:bg-white hover:border-[#D33523] transition duration-300 text-sm font-medium cursor-pointer">
              OUR SERVICES →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
