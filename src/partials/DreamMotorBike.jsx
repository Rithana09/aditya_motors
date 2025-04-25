import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const dropdownData = [
  {
    title: 'MAXIMUM SPEED & STABILITY',
    content: 'Experience unmatched speed and control with our advanced bike engineering.'
  },
  {
    title: 'ACCELERATING YOUR RIDING STYLE',
    content: 'Boost your performance with ergonomics designed for maximum acceleration.'
  },
  {
    title: 'THE PROFESSIONAL GEARHEADS',
    content: 'Built and tuned by experts to suit every professional rider’s needs.'
  }
];

const DreamMotorbike = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col px-6 lg:px-20 py-10 gap-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start space-y-6">
          <p className="text-red-600 tracking-widest font-semibold">HIGH PERFORMANCE</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            LET’S BUILD YOUR<br />DREAM MOTORBIKE
          </h1>
          <p className="text-gray-600 text-lg">
            We offer a wide variety of services to meet all your bike repair and maintenance needs.
          </p>

          {/* Red Dropdown Boxes */}
          <div className="bg-red-600 text-white rounded-md divide-y divide-red-500 shadow-lg">
            {dropdownData.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex justify-between items-center w-full px-6 py-4 focus:outline-none"
                >
                  <span className="font-semibold text-left">{item.title}</span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openIndex === index && (
                  <div className="bg-red-700 px-6 py-3 text-sm text-white">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <img
              src="/servicee2.jpg"
              alt="Motorbike Feature Detail"
              className="rounded-lg w-full mx-auto object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <img
            src="/servicee1.jpg"
            alt="Motorbike Builder"
            className="rounded-lg w-full max-w-[95%] max-h-[500px] object-contain"
          />

          <div className="mt-6 lg:ml-40 text-center lg:text-left space-y-2">
            <p className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-black">
              WE KEPT WHAT WE
            </p>
            <p className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-black">
              LOVED ABOUT THE
            </p>
            <p className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-black">
              MOTORBIKE
            </p>

            <div className="w-full sm:w-100 h-1 bg-red-600 mt-10 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamMotorbike;
