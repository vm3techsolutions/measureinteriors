'use client';
import React from 'react';

const BackgroundSection = () => {
  const backgroundImage = '/assets/HomeBanner3.webp';

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
              "Our fit-out process ensures a smooth transition from concept to completion, creating workspaces that inspire productivity and creativity. With a focus on quality and attention to detail, we manage every aspect of the project to deliver exceptional results."
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#c3c3ca]">
            - CEO Measure International
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
