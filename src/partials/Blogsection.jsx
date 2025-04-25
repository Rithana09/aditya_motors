import React from "react"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Aditya Motors</h1>
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Type & hit Enter..."
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
              />
              <button className="bg-red-600 text-white px-4 py-2">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 max-w-screen-lg">
        {/* Articles Section */}
        <div className="w-full lg:w-2/3">
          {/* Featured Article */}
          <article className="mb-12">
            <div className="relative">
              <img
                src="/blogg1.jpg"
                alt="Motorcycle in garage"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1">
                NEWS & EVENT
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>JULY 8, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 MINS READ</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-2">
              <a href="#" className="hover:text-red-600">
                The Top 10 Custom Motorcycles of 2020
              </a>
            </h2>
            <p className="text-gray-600 mt-2">
            Summer Bike Care Tips for Peak Performance | Bike Service Repair in Bangalore
            
            </p>
            <a href="#" className="text-red-600 font-medium flex items-center gap-1 mt-4 hover:underline">
              READ MORE <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          {/* Second Article */}
          <article className="mb-12">
            <div className="relative">
              <img
                src="/blog2.jpg"
                alt="Custom motorcycle"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1">
                NEWS & GUIDE
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>JULY 2, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>4 MINS READ</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-2">
              <a href="#" className="hover:text-red-600">
                The Best of The One Motorcycle Show Contest
              </a>
            </h2>
            <p className="text-gray-600 mt-2">
            Summer Bike Care Tips for Peak Performance | Bike Service Repair in Bangalore
            </p>
            <a href="#" className="text-red-600 font-medium flex items-center gap-1 mt-4 hover:underline">
              READ MORE <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          {/* Tips and Tricks Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-4 mb-6">Tips and Trick</h3>

            {/* Tip 1 */}
            <div className="flex gap-4 mb-6">
              <img
                src="/blog3.jpg"
                alt="Custom motorcycle"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-xs text-gray-500 mb-1">JULY 8, 2022</div>
                <h4 className="font-medium hover:text-red-600">
                  <a href="#">The Top 10 Custom Motorcycles of 2020</a>
                </h4>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="flex gap-4 mb-6">
              <img
                src="/blog4.jpg"
                alt="Motorcycle show"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-xs text-gray-500 mb-1">JULY 2, 2022</div>
                <h4 className="font-medium hover:text-red-600">
                  <a href="#">The Best of The One Motorcycle Show Contest</a>
                </h4>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="flex gap-4 mb-6">
              <img
                src="/blog5.jpg"
                alt="Custom builder"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-xs text-gray-500 mb-1">JULY 1, 2022</div>
                <h4 className="font-medium hover:text-red-600">
                  <a href="#">How To Become A Professional Custom Builder</a>
                </h4>
              </div>
            </div>
          </div>

          {/* Follow Section */}
          <div className="mb-8">
  <h3 className="text-xl font-bold border-b border-gray-200 pb-4 mb-6">Follow</h3>
  <div className="flex gap-2">
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
</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>Copyright © 2024 Aditya Motors All rights reserved Designed by HURRYEP TECHNOLOGIES</p>
      </footer>
    </div>
  )
}
