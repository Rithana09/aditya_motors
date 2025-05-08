import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-b border-gray-700"
    >
      <button
        className="w-full bg-black text-white cursor-pointer text-left px-4 py-3 font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <FiChevronUp className="text-xl" />
        ) : (
          <FiChevronDown className="text-xl" />
        )}
      </button>
      {isOpen && <div className="px-4 py-2 text-black-300">{children}</div>}
    </motion.div>
  );
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const ProfessionalGearSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Top heading */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="text-center mb-10"
      >
        <p className="text-sm font-[jost] font-semibold  tracking-wide" style={{ color: "#D33523" }}>WHY CHOOSE US</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-[jost] font-bold text-black mt-2">
          WE ARE QUALIFIED &<br />
          <span className="text-black lg:text-6xl font-[jost]">PROFESSIONAL</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4"
        >
          {/* Left large image */}
          <img
            src="/honda6.webp"
            alt="Motorcycle Guy"
            className="w-full md:w-2/3 h-96 object-cover rounded-lg"
          />

          {/* Right column with two stacked images */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <img
              src="/service2.png"
              alt="Engine Work"
              className="w-full h-1/2 md:h-44 object-cover rounded-lg"
            />
            <img
              src="/service3.png"
              alt="Mechanic Portrait"
              className="w-full h-1/2 md:h-44 object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <motion.h2
            variants={fadeUpVariant}
            custom={1}
            className="text-2xl md:text-3xl font-[jost] font-bold mb-6"
            style={{ color: "#D33523" }}>
            We realize that you lead a busy life, so we have made it<br />
            easy for you to drop off your vehicle 24/7.
          </motion.h2>

          <motion.div variants={fadeUpVariant} custom={2} className="space-y-4 font-[Hind_Vadodara]">
            <AccordionItem title="What services does Aditya Motors offer?">
              Aditya Motors offers comprehensive bike services for all brands, including authorized Honda services, repairs, maintenance, and genuine parts replacement
            </AccordionItem>
            <AccordionItem title="Are you an authorized dealer for any brands?">
              Yes, Aditya Motors is an authorized dealer for Honda, providing specialized services for Honda bikes and scooters.
            </AccordionItem>
            <AccordionItem title="What brands of bikes and scooters do you service?">
              We service all brands of bikes and scooters, ensuring top-notch care for your vehicle.
            </AccordionItem>
          </motion.div>

          <motion.p
            variants={fadeUpVariant}
            custom={3}
            className="text-gray-600 mt-6"
          >
            Our team of expert technicians is trained
            to handle the unique needs of your Honda motorcycle
            or scooter, ensuring it continues to perform at its best.
          </motion.p>

          <motion.button
            variants={fadeUpVariant}
            custom={4}
            className="mt-6 px-8 py-3 border border-red-500 text-white bg-[#D33523] font-semibold font-[jost] hover:bg-red-600 hover:text-white transition cursor-pointer"
          >
            READ MORE →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalGearSection;
