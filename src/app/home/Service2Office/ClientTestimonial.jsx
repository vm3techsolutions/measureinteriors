'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: "– Emily Davis",
    position: "GHI Co.",
    text: "The completion phase was seamless, with final touches and inspections ensuring everything was perfect. The handover process was smooth, and the post-completion support has been excellent.",
    rating: 5
  },
  {
    name: "– John Doe",
    position: "ABC Corp",
    text: "The consultation phase was incredibly detailed, ensuring all our needs and preferences were understood. Measure truly listened to our requirements and provided insightful initial ideas.",
    rating: 5
  },
  {
    name: "– Jane Smith",
    position: "XYZ Ltd",
    text: "The design phase was handled with utmost creativity and professionalism. The 3D renderings and visualizations provided a clear picture of the final outcome, and the material selections were spot on.",
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
    <div className="sm:py-20 py-10 bg-[#f8eee5] flex flex-col items-center justify-center px-4">
      
      

      <div className="flex flex-col lg:flex-row items-center gap-16 w-full ">
        {/* Left - Testimonial */}
        <div className="flex flex-col items-center flex-1 sm:px-20 relative">
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
    <p className="text-xl text-[#c1a493]"> {testimonials[index].name}</p>
    <p className="text-xl text-[#c1a493]"> {testimonials[index].position}</p>
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


       
      </div>
    </div>
  );
}
