'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: "Heba Mehta",
    text: "Measure is a fair and committed company. Being responsive and handling site well is their key to successful project closure.",
    rating: 5
  },
  {
    name: "Rajesh Gupta",
    text: "Excellent execution and premium quality work. Loved the timely delivery and great communication throughout the project.",
    rating: 5
  },
  {
    name: "Anjali Sharma",
    text: "Highly professional and creative team. They understood our vision and brought it to life beautifully.",
    rating: 5
  }
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#f8eee5] flex flex-col items-center justify-center px-4">
      
      

      <div className="flex flex-col lg:flex-row items-center gap-16 w-full ">
        {/* Left - Testimonial */}
        <div className="flex flex-col items-center flex-1 max-w-xl sm:ml-14 relative">
  {/* Title */}
  <div className="w-full flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-4xl text-black mb-4">CLIENT TESTIMONIALS</h2>
    <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-5" />
  </div>

  {/* Testimonial Card */}
  <div className="bg-[#E3D5CA] rounded-lg p-10 text-center shadow-lg w-full">
    <div className="text-[#daa520] text-2xl mb-2">
      {'★'.repeat(testimonials[index].rating)}
    </div>
    <p className="text-xl text-gray-800 mb-6">"{testimonials[index].text}"</p>
    <p className="text-xl text-[#c1a493]">– {testimonials[index].name}</p>
  </div>

  {/* Navigation Buttons */}
  <div className="w-full relative mt-5">
    <button
      onClick={handlePrev}
      className="absolute left-0 text-lg font-semibold text-black "
    >
      PREV
    </button>
    <button
      onClick={handleNext}
      className="absolute right-2 text-lg font-semibold text-black "
    >
      NEXT
    </button>
  </div>
</div>


        {/* Right - Video */}
        <div className="rounded-lg overflow-hidden shadow-xl w-full max-w-md sm:mt-16">
          <video
            src="/assets/TestimonialVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
