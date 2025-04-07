'use client';
import { useState, useEffect } from 'react';

const BackgroundSlider = () => {
  const images = [
    '/assets/HomeBanner1.webp',
    '/assets/HomeBanner2.webp',
    '/assets/HomeBanner3.webp',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Centered Overlay */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="bg-[#e7dcd3]/70 p-8 md:p-12 rounded-2xl text-center max-w-xl w-full shadow-lg">
        <hr className="mx-auto w-16 h-0.5 bg-[#CD853F] border-0 rounded mb-1" />

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            TRANSFORM YOUR WORKSPACE WITH MEASURE
          </h1>
          <hr className="mx-auto w-16 h-0.5 bg-[#CD853F] border-0 rounded mb-1" />

          <p className="text-base md:text-xl text-gray-700 mb-6">
            From concept to completion, we manage every aspect of your office transformation.
          </p>
          <button className="px-6 py-3 bg-[#D6CCC2] hover:bg-[#e7dcd3]/70 text-black rounded-xl text-lg font- shadow hover:scale-105 transition">
            EXPLORE OUR SERVICES
          </button>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-[#e8d0c0] p-2 rounded-md text-2xl shadow-md text-black font-bold"
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-[#e8d0c0] p-2 rounded-md text-2xl shadow-md text-black font-bold"
      >
        &#8594;
      </button>
    </div>
  );
};

export default BackgroundSlider;
