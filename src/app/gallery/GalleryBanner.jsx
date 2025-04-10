'use client';
import React from 'react';

const BackgroundSection = () => {
  const backgroundImage = '/assets/GalleryBanner.webp';

  return (
    <div
      className="relative h-[30vh] sm:h-[60vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="bg-black/70 w-full px-4 py-6 md:px-8 md:py-10 shadow-lg ">
          <div className="border-l-4 border-[#D6CCC2] pl-4 md:pl-8 max-w-4xl mx-auto md:ml-32">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-4 text-white">
              "Specialized in office interiors and furniture, we bring your vision to life with our comprehensive turnkey fit-out solutions in Dubai."

            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#c3c3ca]">
            Find your interior design style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
