// components/ServiceAccordion.js
'use client';

import { useState } from 'react';

const accordionData = [
  {
    title: 'Lighting Design',
    content:
      'Lighting plays a crucial role in the overall ambiance and functionality of an office space. Our lighting design services ensure that your office is well-lit, creating a comfortable and productive environment. We use a combination of natural light and artificial lighting to create a balanced and energy-efficient lighting plan. Our designs take into account factors such as glare, color temperature, and lighting levels to enhance visual comfort and reduce eye strain.',
  },
  {
    title: 'Flooring and Ceiling Solutions',
    content:
      'The right flooring and ceiling solutions can significantly impact the look and feel of your office. We offer a wide range of options to suit different styles and budgets. From durable and stylish flooring materials to innovative ceiling designs, we ensure that every element complements your overall design. Our solutions are not only aesthetically pleasing but also practical, ensuring durability and ease of maintenance.',
  },
  {
    title: 'Acoustic Solutions',
    content:
      'Noise can be a major distraction in any office environment. Our acoustic solutions are designed to reduce noise levels and create a more focused and productive workspace. We use a variety of sound-absorbing materials and techniques to minimize noise and enhance privacy. Whether its lling acoustic panels, soundproofing walls, or designing noise-reducing partitions, we tailor our utions to meet your specific needs.',
  },
  {
    title: 'Branding and Signage',
    content:
      'Your office is a reflection of your brand, and effective branding and signage can help reinforce your corporate identity. We offer a range of branding and signage solutions that integrate seamlessly with your office design. From custom logos and wall graphics to wayfinding signage, we ensure that your brand is prominently displayed throughout your workspace. Our designs are not only visually appealing but also functional, helping visitors navigate your office with ease.',
  },
];

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 py-16">
        <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">MORE SERVICES</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="bg-[#edece9] shadow-md mb-4 rounded-md overflow-hidden transition-all duration-300 p-6"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-2  text-2xl text-black flex justify-between items-center"
          >
            {item.title}
            <span className="text-black text-2xl">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="bg-[#f5ebde] px-6 pb-6 text-gray-700 text-base leading-relaxed mt-5">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
