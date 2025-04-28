import React from "react";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-10 max-w-screen-lg">
        {/* Articles Section */}
        <div className="w-full lg:w-2/3">
          {/* Featured Article */}
          <motion.article
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }} // Updated transition duration to 0.4
          >
            <div className="relative">
              <img
                src="/blogg1.jpg"
                alt="Motorcycle in garage"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#D33523] text-white text-xs font-bold px-2 py-1">
                NEWS & EVENT
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <div className="flex font-[jost] items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>JULY 8, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 font-[jost] w-4" />
                <span>5 MINS READ</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-2">
              <a href="#" className="hover:text-red-600 font-[jost]">
                The Top 10 Custom Motorcycles of 2020
              </a>
            </h2>
            <p className="text-gray-600 mt-2 font-[Hind_Vadodara]">
              Summer Bike Care Tips for Peak Performance | Bike Service Repair in Bangalore
            </p>
            <a
              href="#"
              className="font-medium font-[jost] flex items-center gap-1 mt-4 hover:underline"
              style={{ color: "#D33523" }}
            >
              READ MORE <ArrowRight className="h-4 w-4" />
            </a>
          </motion.article>

          {/* Second Article */}
          <motion.article
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }} // Updated transition duration to 0.4
          >
            <div className="relative">
              <img
                src="/blog2.jpg"
                alt="Custom motorcycle"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#D33523] text-white text-xs font-bold px-2 py-1">
                NEWS & EVENT
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <div className="flex items-center font-[jost] gap-1">
                <Calendar className="h-4 w-4" />
                <span>JULY 2, 2022</span>
              </div>
              <div className="flex font-[jost] items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>4 MINS READ</span>
              </div>
            </div>
            <h2 className="text-2xl font-[jost] font-bold mt-2">
              <a href="#" className="hover:text-red-600">
                The Best of The One Motorcycle Show Contest
              </a>
            </h2>
            <p className="text-gray-600 font-[Hind_Vadodara] mt-2">
              Summer Bike Care Tips for Peak Performance | Bike Service Repair in Bangalore
            </p>
            <a
              href="#"
              className="font-medium flex font-[jost] items-center gap-1 mt-4 hover:underline"
              style={{ color: "#D33523" }}
            >
              READ MORE <ArrowRight className="h-4 w-4" />
            </a>
          </motion.article>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <motion.h1
            className="text-2xl font-bold font-[jost] text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }} // Faster transition
          >
            Aditya Motors
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-sm text-gray-600 font-[Hind_Vadodara]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Faster transition
          >
            For the love of biking...
          </motion.p>

          <motion.div
            className="flex mt-5 mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              placeholder="Type & hit Enter..."
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none cursor-pointer"
            />
            <button className="bg-[#D33523] text-white px-4 py-2 cursor-pointer">
              <Search className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Tips and Tricks Section */}
          <div className="mb-8">
            <motion.h3
              className="text-xl font-bold border-b font-[jost] border-gray-200 pb-4 mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tips and Trick
            </motion.h3>

            {/* Tip 1 */}
            <motion.div
              className="flex gap-4 mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/blog3.jpg"
                alt="Custom motorcycle"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-xs font-[jost] text-gray-500 mb-1">JULY 8, 2022</div>
                <h4 className="font-medium font-[jost] hover:text-red-600">
                  <a href="#">The Top 10 Custom Motorcycles of 2020</a>
                </h4>
              </div>
            </motion.div>

            {/* Tip 2 */}
            <motion.div
              className="flex gap-4 mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/blog4.jpg"
                alt="Motorcycle show"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-xs text-gray-500 font-[jost] mb-1">JULY 2, 2022</div>
                <h4 className="font-medium font-[jost] hover:text-red-600">
                  <a href="#">The Best of The One Motorcycle Show Contest</a>
                </h4>
              </div>
            </motion.div>

            {/* Tip 3 */}
            <motion.div
              className="flex gap-4 mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/blog5.jpg"
                alt="Custom builder"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-xs font-[jost] text-gray-500 mb-1">JULY 1, 2022</div>
                <h4 className="font-medium font-[jost] hover:text-red-600">
                  <a href="#">How To Become A Professional Custom Builder</a>
                </h4>
              </div>
            </motion.div>
          </div>

          {/* Follow Section */}
          <div className="mb-8">
            <motion.h3
              className="text-xl font-bold border-b font-[jost] border-gray-200 pb-4 mb-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              Follow
            </motion.h3>
            {/* Social Icons */}
            <div className="flex gap-2 mb-8">
              <a href="#" className="bg-blue-600 text-white p-2 hover:opacity-90">
                <i className="fab fa-facebook text-white text-xl"></i>
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 hover:opacity-90">
                <i className="fab fa-twitter text-white text-xl"></i>
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 hover:opacity-90">
                <i className="fab fa-pinterest text-white text-xl"></i>
              </a>
              <a href="#" className="bg-purple-600 text-white p-2 hover:opacity-90">
                <i className="fab fa-instagram text-white text-xl"></i>
              </a>
              <a href="#" className="bg-red-600 text-white p-2 hover:opacity-90">
                <i className="fab fa-youtube text-white text-xl"></i>
              </a>
            </div>
            {/* Ad Banner Section */}
            <div
              className="relative w-[224px] h-[611px] bg-cover bg-center"
              style={{ backgroundImage: 'url(adityabannerr.png)' }}
            >
              <div className="absolute inset-0 bg-black opacity-80 flex flex-col items-center justify-center p-6">
                <img
                  src="/adityalogo.png"
                  alt="Logo"
                  className="w-24 h-24 object-contain mb-5"
                />
                <h1 className="text-3xl font-bold text-red-600 text-center mb-2">
                  Let's Build Your Dream Motorbike
                </h1>
                <p className="text-lg text-white text-center mb-5">
                  Aditya Motors is your bike’s guardian.
                </p>
                <button className="bg-[#D33523] text-white mt-5 py-5 px-9 border border-transparent hover:bg-transparent hover:border-white transition duration-300 text-sm font-medium cursor-pointer">
                  Consult Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
