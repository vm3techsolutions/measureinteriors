'use client';
import React from 'react';

const HeroAnimated = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background image with animation */}
      <div className="absolute inset-0 animate-bgScroll z-0">
        <div
          className="h-[200%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/HomeG6.webp')", // ✅ Correct format
          }}
        />
      </div>

      {/* Overlay + Text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="bg-white/50 w-full px-4 py-6 md:px-8 md:py-10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black text-center">
            Uncovering Interior Design Solutions Considered Impossible
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;
