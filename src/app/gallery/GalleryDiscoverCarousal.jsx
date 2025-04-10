'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
  '/assets/GE1.webp', '/assets/GE2.webp', '/assets/GE3.webp',
  '/assets/GE1.webp', '/assets/GE2.webp', '/assets/GE3.webp',
  '/assets/GE1.webp', '/assets/GE2.webp', '/assets/GE3.webp',
  '/assets/GE1.webp', '/assets/GE2.webp', '/assets/GE3.webp',
  '/assets/GE1.webp', '/assets/GE2.webp', '/assets/GE3.webp',
 
];

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);

  // Update index every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Get 5 visible images
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(images[(index + i) % images.length]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="w-full  py-10">
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">DISCOVER OUR CRAFTSMANSHIP </h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      <div className="max-w-[100vw] mx-auto overflow-hidden">
        <div className="flex items-center justify-center gap-4 transition-all duration-700 ease-in-out">
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className={`w-[50vh] md:w-[45vh] lg:w-[40vh] transition-all duration-500 flex justify-center items-center ${
                i === 2 ? 'scale-110 opacity-100 z-10 ' : 'opacity-50'
              }`}
            >
              <Image
                src={img}
                alt={`Image ${i}`}
                width={300}
                height={200}
                className=" object-cover shadow-md "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
