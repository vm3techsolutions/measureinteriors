'use client';
import React from 'react';

const BackgroundSection = () => {
  const backgroundImage = '/assets/ContactBanner.webp';

  return (
    <div
      className="relative h-[30vh] sm:h-[75vh] w-full bg-cover bg-center mb-10 sm:mb-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="bg-black/70 w-full px-4 py-6 md:px-8 md:py-10 shadow-lg ">
          <div className="border-l-4 border-[#D6CCC2] pl-4 md:pl-8 max-w-4xl mx-auto md:ml-32">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-4 text-white sm:pr-60">
            " Measure specializes in transforming workspaces with comprehensive office interior design and turnkey fit-out solutions in Dubai. Our mission is to create functional, stylish, and comfortable office environments tailored to your needs. "
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#c3c3ca] mb-6">
            CONTACT US
            </p>

          </div>
          <div className="w-full flex flex-col sm:-ml-40 mt-10 justify-center items-center ">
              <h2 className="text-3xl md:text-4xl text-[#E3D5CA] mb-4 italic">How to Reach Measure </h2>
              <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full " />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
