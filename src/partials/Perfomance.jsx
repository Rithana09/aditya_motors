import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

const performanceData = [
  {
    id: 1,
    img: "/tool.png",
    title: "Restoration",
    description:
      "Work with our experts to design and build a fully customized motorcycle from the ground up.",
  },
  {
    id: 2,
    img: "/tool1.png",
    title: "Engine Services",
    description:
      "Enhance your motorcycle’s performance with our expert tuning and modification services.",
  },
  {
    id: 3,
    img: "/tool2.png",
    title: "Custom Paints",
    description:
      "Our artists craft designs that are bold, creative, and perfectly aligned with your style.",
  },
];

const AnimatedCounter = ({ target, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(target / (duration / 16));
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Performance = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Performance Section */}
      <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-8 py-8 md:py-10 lg:py-12 flex justify-center items-center min-h-screen">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-y-8 md:gap-y-10 lg:gap-y-0 md:gap-x-16 lg:gap-x-20">
          {/* Left Side - Text and Image slide up */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 80 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-red-600 tracking-widest uppercase mb-2 text-sm md:text-base">
              PERFORMANCE
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-2">
              IMPROVE GENERAL RIDEABILITY
            </h2>
            <img
              src="/bikee1.jpg"
              alt="Bike"
              className="mt-6 w-full rounded-lg object-cover"
            />
          </motion.div>

          {/* Right Side - Slide in from right */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 100 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center mt-12 md:mt-20 lg:mt-40 gap-6 md:gap-8 lg:gap-10"
          >
            {performanceData.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded object-cover shadow"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-xl mt-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-8 py-8 md:py-10 lg:py-12 pt-15 sm:pt-8 md:pt-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-y-8 md:gap-x-16 lg:gap-x-40 text-center">
          <div className="w-full md:w-1/3">
            <p className="text-gray-600 mb-2">Garage Store</p>
            <p className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-red-700">
              <AnimatedCounter target={13} />
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-gray-600 mb-2">Loyal Customer</p>
            <p className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-red-700">
              <AnimatedCounter target={250} />
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-gray-600 mb-2">Mechanic</p>
            <p className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-red-700">
              <AnimatedCounter target={48} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
