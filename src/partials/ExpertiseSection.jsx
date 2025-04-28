import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Build Handcrafted',
    image: '/servicee3.jpg',
  },
  {
    title: 'Auto Repair and',
    image: '/servicee4.jpg',
  },
  {
    title: 'Classic Motorcycles',
    image: '/servicee5.jpg',
  },
  {
    title: 'Bodywork and Part',
    image: '/servicee6.jpg',
  },
];

const ExpertiseSection = () => {
  // Animation variants for text and images
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="bg-black text-white py-12 px-4 md:px-12">
      <div className="text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="text-red-600 tracking-widest font-semibold"
        >
          WHAT WE OFFER
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="text-5xl mt-5 font-extrabold"
        >
          OUR EXPERTISE
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="text-gray-300 mt-5"
        >
          From minor fixes to complete overhauls, we’ve got you covered.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="bg-white rounded overflow-hidden shadow-md"
          >
            <div className="relative h-48 sm:h-60 lg:h-72">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-red-600 text-white text-center py-4 font-semibold text-lg">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
