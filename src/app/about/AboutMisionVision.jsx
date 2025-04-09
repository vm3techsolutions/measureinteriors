'use client';
import React from 'react';

const MissionVision = () => {
  return (
    <section className="bg-[#f8f0e9] py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">
          OUR MISSION & VISION
        </h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] mx-auto mb-6 rounded-full" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
          {/* Mission Card */}
          <div className="bg-[#D6CCC2] rounded-2xl px-6 py-8 w-full md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-2xl shadow-md duration-300 ease-in-out">
            <h3 className="text-3xl mb-4 text-[#2f2f2f]">Our Mission</h3>
            <p className="text-[#5a5a5a] text-base sm:text-lg leading-relaxed">
              At Measure, our mission is to provide exceptional office interior
              design services that meet our clients' needs and exceed their
              expectations. We strive to create functional, stylish, and
              comfortable office environments that promote productivity and
              well-being.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#D6CCC2] rounded-2xl px-6 py-8 w-full md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-2xl shadow-md duration-300 ease-in-out">
            <h3 className="text-3xl mb-4 text-[#2f2f2f]">Our Vision</h3>
            <p className="text-[#5a5a5a] text-base sm:text-lg leading-relaxed">
              Our vision is to be the leading office interior design company in
              Dubai, recognized for our innovative designs, superior service,
              and commitment to excellence. We aim to set new standards in the
              industry by continuously improving our processes, embracing new
              technologies, and fostering a culture of creativity and
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
