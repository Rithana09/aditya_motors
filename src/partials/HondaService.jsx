import React from 'react';
import { motion } from 'framer-motion';

const HondaService = () => {
  const cardData = [
    {
      title: 'Authorized Honda Centre',
      description:
        "As an authorized centre, we use only genuine Honda parts and follow the manufacturer's recommended service guidelines for all repairs and maintenance.",
    },
    {
      title: 'Expert Technicians',
      description:
        'Our technicians are trained to handle all Honda models, ensuring high-quality care for your bike.',
    },
    {
      title: 'Genuine Honda Parts',
      description:
        'We only use authentic parts from Honda to ensure the longevity and performance of your bike.',
    },
    {
      title: 'Comprehensive Services',
      description:
        'From regular maintenance to specialized repairs, we offer a wide range of services tailored specifically for Honda bikes.',
    },
  ];

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Reduced duration
  };

  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

        {/* Left Side - Heading, Description, Image */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            className="text-2xl font-[jost] sm:text-3xl font-bold text-red-600 mb-4 sm:mb-6"
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
          >
            WHY CHOOSE ADITYA MOTORS FOR YOUR HONDA BIKE?
          </motion.h2>

          <motion.p
            className="text-black-300 text-base sm:text-lg mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
          >
            At Aditya Motors, we are proud to be an authorized Honda dealer,
            offering{' '}
            <span className="text-red-600 font-[Hind_Vadodara] cursor-pointer underline">
              specialized services for all Honda bikes
            </span>. Our team of expert technicians is trained to handle the unique
            needs of your Honda motorcycle or scooter, ensuring it continues to
            perform at its best. Whether you own a Honda CB series, Activa, or any
            other model, we’ve got you covered with our comprehensive range of
            services.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: false }} // This will ensure the transition happens every time it comes into view
            className="w-full"
          >
            <img
              src="/honda5.avif"
              alt="Honda Service"
              className="rounded-lg w-full h-64 sm:h-80 md:h-[22rem] object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side - Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-30">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-black to-gray-600 text-white p-5 sm:p-6 rounded-xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HondaService;
