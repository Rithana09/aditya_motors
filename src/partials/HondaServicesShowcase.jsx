import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
    {
        title: 'Honda Activa',
        image: '/honda1.webp',
        description:
            'Genuine Parts Authentic Honda parts for your Activa.Skilled Technicians Experienced professionals servicing your Honda Activa.Certified Services Reliable Honda Activa services at Aditya Motors.Comprehensive Repairs Full Activa check-ups and repairs.',
    },
    {
        title: 'Honda Dio',
        image: '/honda2.jpg',
        description: 'Dio Experts Specialized care for your Honda Dio at Aditya Motors.Genuine Parts Assurance Only authentic Honda parts used.Top-Tier Maintenance Skilled technicians for your Honda Dio.Certified Excellence Trusted Honda Dio servicing at Aditya Motors.Complete Dio Care Comprehensive repairs and check-ups.',
    },
    {
        title: 'Shine 125',
        image: '/honda3.webp',
        description: 'Premium Care Certified servicing for Honda Shine 125.Original Parts Guarantee Genuine Honda parts for your Shine 125.Expert Hands Skilled technicians dedicated to Honda Dio BS-VI maintenance.Trusted Quality Aditya Motors’ excellence in Dio BS-VI repairs.Seamless Service Comprehensive check-ups for your Shine 125..',
    },
    {
        title: 'SP 125',
        image: '/honda4.webp',
        description: 'Unparalleled Service Top-tier service for Honda SP 125 at Aditya Motors.Expert Care Best care for your SP 125.Authentic Parts Genuine Honda parts for SP 125.Precision Repairs Specialist technicians for SP 125.Complete Solutions All-encompassing care for your SP 125..',
    },
];

const HondaServicesShowcase = () => {
    const slideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section className="bg-black text-white py-12 px-4 md:px-12">
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertiseData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUp}
                        viewport={{ once: true }}
                        className="group relative bg-white rounded overflow-hidden shadow-md"
                    >
                        <div className="relative h-48 sm:h-60 lg:h-72 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center">

                                {/* Text and button normally visible inside hover */}
                                <div className="transition-all duration-500 transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">

                                    <p className="text-white font-[Hind_Vadodara] text-[15px] sm:text-[16px] lg:text-[15px] font-semibold mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <button className="bg-[#D33523] font-[jost] hover:bg-red-700 text-white px-4 py-2  text-sm font-semibold">
                                        View All Services
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Bike Title */}
                        <div className="bg-[#D33523] text-white text-center py-4 font-semibold text-lg sm:text-xl lg:text-2xl">
                            {item.title}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HondaServicesShowcase;
