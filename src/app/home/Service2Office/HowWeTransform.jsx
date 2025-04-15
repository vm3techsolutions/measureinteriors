'use client'
import { use, useState } from "react";
import Image from "next/image";

const sides = [
  { label: "Company", image: "/assets/HW1.webp" },
  { label: "Consultation", image: "/assets/HW2.webp" },
  { label: "Design", image: "/assets/HW3.webp" },
  { label: "Approval", image: "/assets/HW4.webp" },
  { label: "Execution", image: "/assets/HW5.webp" },
  { label: "Completion", image: "/assets/HW6.webp" },
];

const getRotation = (index) => {
  switch (index) {
    case 0:
      return "rotateY(0deg)";
    case 1:
      return "rotateY(-90deg)";
    case 2:
      return "rotateX(-90deg)";
    case 3:
      return "rotateX(90deg)";
    case 4:
      return "rotateY(90deg)";
    case 5:
      return "rotateY(180deg)";
    default:
      return "rotateY(0deg)";
  }
};

export default function SixSidedBox() {
  const [activeSide, setActiveSide] = useState(0);

  return (
    <div className="min-h-screen bg-[#f5ebdf] flex flex-col items-center justify-center p-4 ">
         <div className="w-full flex flex-col items-center text-center ">
        <h2 className="text-3xl md:text-4xl text-black mb-4">HOW WE TRANSFORM YOUR SPACE</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      <div className="w-[400px] h-[400px] perspective-[1000px] mb-10">
        <div
          className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
          style={{ transform: getRotation(activeSide) }}
        >
          {sides.map((side, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center  backdrop-blur rounded-xl shadow-lg text-center p-4"
              style={{
                ...(index === 0 && { transform: "translateZ(150px)" }), // Front
                ...(index === 1 && { transform: "rotateY(90deg) translateZ(150px)" }), // Right
                ...(index === 2 && { transform: "rotateX(90deg) translateZ(150px)" }), // Top
                ...(index === 3 && { transform: "rotateX(-90deg) translateZ(150px)" }), // Bottom
                ...(index === 4 && { transform: "rotateY(-90deg) translateZ(150px)" }), // Left
                ...(index === 5 && { transform: "rotateY(180deg) translateZ(150px)" }), // Back
              }}
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={side.image}
                  alt={side.label}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl opacity-30"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{side.label}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {sides.map((side, index) => (
          <button
            key={index}
            onClick={() => setActiveSide(index)}
            className={`px-6 py-3 rounded-xl shadow-md transition-all duration-300 font-medium text-gray-700  hover:bg-[#e0d5c6] ${
              activeSide === index ? "bg-[#d6c4b3] border-2 border-black" : "bg-[#e0d5c6]"
            }`}
          >
            {side.label}
          </button>
        ))}
      </div>
    </div>
  );
}
