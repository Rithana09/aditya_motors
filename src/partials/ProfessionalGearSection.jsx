import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full bg-black text-white text-left px-4 py-3 font-semibold flex justify-between items-center"
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
    </div>
  );
};


const ProfessionalGearSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Top heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-red-600 font-semibold tracking-wide">WHY CHOOSE US</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          WE ARE QUALIFIED &
          <br />
          <span className="text-black">PROFESSIONAL</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left: Images */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left large image */}
          <img
            src="/service1.png"
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
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
            We realize that you lead a busy life, so we have made it<br />
            easy for you to drop off your vehicle <span className="text-black font-bold">24/7.</span>
          </h2>

          <div className="space-y-4">
            <AccordionItem title="MAXIMUM SPEED & STABILITY">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
            </AccordionItem>
            <AccordionItem title="ACCELERATING YOUR RIDING STYLE" />
            <AccordionItem title="THE PROFESSIONAL GEARHEADS" />
          </div>

          <p className="text-gray-600 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sollicitudin libero. Quisque quis
            leo sed nibh porta condimentum. Vivamus sit amet venenatis nulla. Aenean eget interdum dolor.
            Nullam varius, est non porta fermentum, nisl felis pretium est, ac facilisis leo libero ut metus.
            Donec non erat imperdiet, cursus odio eu, ultricies nisi.
          </p>

          <button className="mt-6 px-8 py-3 border border-red-500 text-red-600 font-semibold rounded hover:bg-red-600 hover:text-white transition">
            READ MORE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGearSection;
