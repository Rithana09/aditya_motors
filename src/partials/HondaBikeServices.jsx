import React from 'react';
import { FaMotorcycle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HondaBikeServices = () => {
  const services = [
    {
      title: 'Brake System Maintenance',
      description:
        'Brake Industries has been working on a long-term development and safety, requiring robust support for your business model. We partner with top manufacturers to deliver reliability and peace of mind.',
    },
    {
      title: 'Battery & Electrical Services',
      description:
        'Our expert team ensures peak performance of your electrical system—battery checks, wiring diagnostics, and charging maintenance to keep you powered on every ride.',
    },
    {
      title: 'Catalyst & Fuel System Maintenance',
      description:
        'Comprehensive fuel system cleaning and maintenance improve efficiency and reduce emissions. We use OEM-grade processes for lasting performance.',
    },
    {
      title: 'Specialized Honda Services',
      description:
        'Tailored solutions for bespoke Honda models—performance tuning, custom setups, and specialized diagnostics to optimize every aspect of your bike.',
    },
    {
      title: 'EV Honda Bike Services',
      description:
        'Advanced electric bike maintenance focusing on battery health, electronics, and safety systems, ensuring your EV runs smoothly and reliably.',
    },
    {
      title: 'Periodic Maintenance',
      description:
        'Regular checkups—oil changes, filter replacements, and safety inspections—to prolong engine life and keep your ride in top condition.',
    },
  ];

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="max-w-7xl mx-auto bg-white py-16 px-6 sm:px-8 md:px-16">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold font-serif italic text-red-600 text-center mb-12 uppercase tracking-tight"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: true }}
      >
        Our Honda Bike Services Include
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-8 flex flex-col min-h-[350px] bg-gradient-to-t from-white to-gray-50"
          >
            <div className="flex items-center mb-6">
              <FaMotorcycle className="text-red-600 text-3xl mr-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            </div>
            <p className="text-gray-600 flex-1 text-sm sm:text-base mb-6">{service.description}</p>
            <button className="mt-6 self-start bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition ease-in-out duration-300">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HondaBikeServices;
