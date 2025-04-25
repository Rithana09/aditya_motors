import React from "react";

const CustomerService = () => {
  return (
    <div className="flex flex-col md:flex-row items-start px-4 sm:px-6 md:px-16 py-8 md:py-16">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/about.jpg"
          alt="Customer Service"
          className="w-3/4 sm:w-2/3 md:w-full h-auto mx-auto rounded-lg object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:pl-8">
        {/* Red Text */}
        <p className="text-red-600 text-lg sm:text-xl font-semibold mb-4">
          Providing full range of customer service
        </p>

        {/* Bold Texts */}
        <p className="text-black text-2xl md:text-4xl font-bold mb-2">
        Unique Motorcycles
        </p>
        <p className="text-black text-2xl md:text-4xl font-bold mb-6">
        Reflecting Riders' Personal Identity.
        </p>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row">
          {/* Paragraphs Section */}
          <div className="w-full md:w-2/3 md:pr-4">
            <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
            Aditya Motors is a professional bike repair shop specializing in both Periodic maintenance and in-depth repairs for all types of scooters and bikes. Based in Bengaluru, we have been providing reliable and affordable bike services for years.
            </p>
            <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
            As an authorized Honda service centre in Bengaluru, we possess the knowledge and equipment to handle all your Honda servicing needs. Our team is experienced with all types of two-wheelers, and we are dedicated to ensuring your bike remains in excellent condition, whether it’s for daily commuting or long rides.
            </p>

            {/* Signature and Name */}
            <div className="mt-6 flex flex-col items-center md:items-start">
              <img
                src="/signature.png"
                alt="Signature"
                className="w-32 h-auto mb-4"
              />
              <div className="text-center md:text-left">
                <p className="text-black font-semibold">Andrew John</p>
                <p className="text-black text-sm">Founder, Gastros Garage</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Column */}
          <div className="w-full md:w-1/3 md:pl-4 md:ml-10 space-y-6 mt-8 md:mt-0">
            <div>
              <div className="flex items-center text-red-600 font-bold text-lg mb-2">
                <span className="mr-2">››</span> Our Mission
              </div>
              <p className="text-black text-sm leading-relaxed">
              To provide high-quality, reliable bike repair services that ensure every ride is safe and enjoyable. To build lasting relationships with our customers through trust, integrity, and excellent service.
              </p>
            </div>

            <div>
              <div className="flex items-center text-red-600 font-bold text-lg mb-2">
                <span className="mr-2">››</span> Our Vision
              </div>
              <p className="text-black text-sm leading-relaxed">
              Vision
              To be the leading bike repair shop known for exceptional service, expert mechanics, and unwavering commitment to customer satisfaction
              </p>
            </div>

            <button className="mt-4 bg-red-600 text-white py-5 px-9 rounded hover:bg-red-700 transition text-sm font-medium">
              Our Services →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
