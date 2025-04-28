import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PartnerSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, trigger the animation
    setIsVisible(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: 'Logo 1',
      logo: (
        <div className="flex items-center">
          <div className="flex space-x-1">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded"></div>
          </div>
          <span className="ml-2 text-gray-700 font-medium text-base sm:text-xl">logoipsum</span>
          <span className="text-xs sm:text-sm align-top">®</span>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Logo 2',
      logo: (
        <div className="flex items-center">
          <div className="mr-2 text-green-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" stroke="currentColor" fill="none" />
              <path d="M12 6V18" strokeWidth="2" stroke="currentColor" />
              <path d="M7 12H17" strokeWidth="2" stroke="currentColor" />
            </svg>
          </div>
          <span className="text-gray-800 font-medium text-base sm:text-xl tracking-wider">LOGOIPSUM</span>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Logo 3',
      logo: (
        <div className="flex items-center">
          <div className="mr-2 text-blue-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <circle cx="6" cy="12" r="3" fill="currentColor" />
              <circle cx="18" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>
          <span className="text-blue-700 font-medium text-base sm:text-xl">logoipsum</span>
          <span className="text-xs sm:text-sm align-top">®</span>
        </div>
      ),
    },
    {
      id: 4,
      name: 'Logo 4',
      logo: (
        <div className="flex items-center">
          <div className="mr-2">
            <svg className="w-6 h-6 sm:w-[30px] sm:h-[30px]" viewBox="0 0 30 30" fill="none">
              <path d="M15 2.5L2.5 15L15 27.5L27.5 15L15 2.5Z" fill="#F97316" stroke="#333" strokeWidth="1" />
              <path d="M15 7.5L7.5 15L15 22.5L22.5 15L15 7.5Z" fill="white" stroke="#333" strokeWidth="1" />
            </svg>
          </div>
          <div>
            <span className="text-gray-800 font-medium text-base sm:text-xl">Logo<span className="text-orange-500">ipsum</span></span>
            <div className="text-xs leading-none">Tech&Co.</div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      name: 'Logo 5',
      logo: (
        <div className="flex items-center">
          <div className="mr-2 text-red-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="2" height="16" fill="currentColor" />
              <rect x="6" y="8" width="2" height="12" fill="currentColor" />
              <rect x="10" y="2" width="2" height="18" fill="currentColor" />
              <rect x="14" y="6" width="2" height="14" fill="currentColor" />
              <rect x="18" y="4" width="2" height="16" fill="currentColor" />
            </svg>
          </div>
          <span className="text-gray-800 font-medium text-sm sm:text-base tracking-wider">
            LOGO<span className="text-red-500">IPSUM</span>
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-medium tracking-wide uppercase text-sm sm:text-base mb-2"
          style= {{ color: "#D33523" }}>
            BRANDS THAT SUPPORT US
          </h3>
          <h2 className="text-3xl font-[Hind_Vadodara] sm:text-4xl md:text-5xl font-bold text-gray-900">
            OUR PARTNERS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: partner.id * 0.2 }}
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
