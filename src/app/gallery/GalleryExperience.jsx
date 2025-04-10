'use client';
import Image from 'next/image';
import React from 'react';


const RotatingCube = () => {
  return (
    <div className="  flex flex-col-reverse md:flex-row items-center px-4 md:px-10 py-20 -mt-40 md:-mt-10 md:py-40 min-h-screen gap-10 md:gap-40">
      <div className="scene sm:ml-20">
        <div className="cube">
          <div className="face front">
            <Image width={350}
              height={250} src="/assets/GE1.webp" alt="Front" />
          </div>
          <div className="face right">
            <Image width={350}
              height={250} src="/assets/GE2.webp" alt="Right" />
          </div>
          <div className="face back">
            <Image width={350}
              height={250} src="/assets/GE3.webp" alt="Back" />
          </div>
          <div className="face left">
            <Image width={350}
              height={250} src="/assets/GE4.webp" alt="Left" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl  text-black mb-4">
          Experience Our Design Excellence
          </h2>
          <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-6 " />

          <p className="text-[#666] text-lg leading-relaxed text-start px-8">
          At Measureinteriors, we are dedicated to creating innovative and functional designs that meet the unique needs and preferences of our clients. Explore our project gallery to see the creativity and craftsmanship that goes into each project.
          </p>
         
        </div>
    </div>
  );
};

export default RotatingCube;
