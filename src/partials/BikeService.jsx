import React from "react";

const BikeService = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          For the love of biking
        </h1>
        <p className="text-xl mb-4">
          Welcome to Aditya Motors - Best Bike Service in Bengaluru
        </p>
        <p className="text-lg mb-8">
          From routine checks to major fixes, Aditya Motors is your bike’s
          guardian. Quality care, every time.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Get A Quote
          </button>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BikeService;
