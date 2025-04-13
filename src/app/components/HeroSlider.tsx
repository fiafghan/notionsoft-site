'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroSlider = () => {
  const certifications = [
    '/web_dev.jpg',
    '/desktop_dev.jpg',
    '/mobile_dev.png',
    '/ai_dev.png',
  ]; // Add your actual image paths here

  return (
    <section className="relative bg-gradient-to-r from-orange-300 via-orange-300 to-orange-100 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Area */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Empowering Your Business with Web, Mobile, AI, and Desktop Applications.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }} 
            className="mt-4 text-sm md:text-base leading-relaxed font-light text-gray-100"
          >
            Innovative solutions for web, mobile, and AI applications that grow your business.
          </motion.p>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 relative px-6 py-2 text-white font-medium border border-orange-white hover:bg-white hover:text-blue-800 transition-all"
          >
            Read More
          </motion.a>
        </div>

        {/* Right Image Stack */}
        <div className="flex flex-col space-y-4 items-center md:items-end">
          {certifications.map((src, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 * index }}
              className="bg-white p-2 rounded-md shadow-md w-36 h-30 flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Certification ${index + 1}`}
                width={100}
                height={40}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
