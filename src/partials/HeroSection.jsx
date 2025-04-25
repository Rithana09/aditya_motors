import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center 
        h-[80vh] sm:h-[90vh] md:h-screen 
        flex items-center"
      style={{ backgroundImage: "url('/bike4.jpg')" }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Text block */}
      <div
        className="
          relative z-10 
          px-4 sm:px-6 md:px-12 lg:px-16 
          text-center md:text-left
          w-full md:w-3/4 lg:w-1/2
        "
      >
        <p className="text-red-600 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest">
          Custom Culture
        </p>

        <h1 className="mt-3 font-extrabold leading-tight text-white
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        ">
          More Than Just<br />A Lifestyle
        </h1>

        <p className="mt-4 text-gray-300
          text-sm sm:text-base md:text-lg
        ">
          At Aditya Motors, our commitment to quality and customer satisfaction is what sets us apart. Don’t just take our word for it—see what our customers have to say about their experience with our services.
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-8 flex justify-center md:justify-start">
          <button
            className="
              flex items-center gap-2 sm:gap-3 
              px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 
              bg-red-600 text-white font-semibold 
              rounded-full hover:bg-red-700 transition
              text-sm sm:text-base
            "
          >
            <span
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                rounded-full border-2 border-white 
                flex items-center justify-center 
                bg-white text-red-600 font-bold
              "
            >
              ▶
            </span>
            <span className="uppercase tracking-wider">
              Watch Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
