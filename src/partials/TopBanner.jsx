import React from "react";
import Header from "./Header";
import Layout from "./Layout";

const TopBanner = ({ title, subtitle, image, showHeader = true }) => {
  return (
    <>
    <Layout>
    <div className="relative w-full text-white overflow-hidden h-64 sm:h-80 md:h-96">
      {/* Full-width Image Container */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Header */}
      {showHeader && (
        <div className="relative z-10">
          <Header />
        </div>
      )}

      {/* Centered Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none z-20 px-4 sm:px-6 md:px-0">
        <p className="text-red-600 uppercase tracking-wide text-xs sm:text-sm md:text-base">
          {subtitle}
        </p>
        <h2 className="font-bold mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
          {title}
        </h2>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default TopBanner;
