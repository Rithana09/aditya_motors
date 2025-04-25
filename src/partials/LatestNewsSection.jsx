import React from 'react';

const newsItems = [
  {
    image: '/news.jpg',
    tag: 'News & Event',
    title: 'The Top 10 Custom Motorcycles of 2020',
    date: 'July 8, 2021',
    desc: 'News & Event The Top 10 Custom Motorcycles of 2020 Mauris molestie blandit suscipit Lorem ipsum dolor sit...',
  },
  {
    image: '/news1.jpg',
    tag: 'News & Event',
    title: 'The Best of The One Motorcycle Show Contest',
    date: 'July 8, 2021',
    desc: 'News & Event The Best Of The One Motorcycle Show Contest Mauris molestie blandit suscipit Lorem ipsum dolor...',
  },
  {
    image: '/news3.jpg',
    tag: 'News & Event',
    title: 'How To Become A Professional Custom Builder',
    date: 'July 8, 2021',
    desc: 'News & Event How To Become A Professional Custom Builder Mauris molestie blandit suscipit Lorem ipsum dolor sit...',
  },
];

const LatestNewsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12">
        LATEST NEWS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-10">
        {newsItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover rounded-lg"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 uppercase rounded">
                {item.tag}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mt-4">{item.title}</h3>

            <div className="flex items-center text-gray-500 text-xs sm:text-sm mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
              </svg>
              {item.date}
            </div>

            <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              {item.desc}
            </p>

            <a
              href="#"
              className="mt-4 text-red-600 font-semibold inline-flex items-center text-sm sm:text-base hover:underline"
            >
              READ MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
