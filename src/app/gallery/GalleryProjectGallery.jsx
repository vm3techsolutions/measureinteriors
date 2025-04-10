'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegImage } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

const images = [
  { src: '/assets/GP1.webp', alt: 'Image 1' },
  { src: '/assets/GP2.webp', alt: 'Image 2' },
  { src: '/assets/GP3.webp', alt: 'Image 3' },
  { src: '/assets/GP4.webp', alt: 'Image 4' },
  { src: '/assets/GP5.webp', alt: 'Image 5' },
  { src: '/assets/GP6.webp', alt: 'Image 6' },
];

const ImageGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 ">
         <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">OUR PROJECTS GALLERY</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      <div className="max-w-7xl mx-auto ">
        {[0, 3].map((startIndex, rowIndex) => (
          <div key={startIndex} className="grid grid-cols-1 sm:grid-cols-12 gap-3  space-y-3">
            {images.slice(startIndex, startIndex + 3).map((img, i) => {
              const index = startIndex + i;
              const isBig =
                (rowIndex === 0 && i === 0) || (rowIndex === 1 && i === 2);
              return (
                <div
                  key={img.src}
                  className={`relative group h-64 sm:h-96  ${
                    isBig ? 'sm:col-span-6' : 'sm:col-span-3'
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover rounded-lg" />

                  {/* Overlay */}
                  <div className="absolute inset-0 hover:bg-[#475a79]/70 bg-opacity-50 group-hover:bg-opacity-90 transition duration-300 flex items-center justify-center">
                    <div
                      onClick={() => openModal(index)}
                      className="cursor-pointer transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white flex flex-col items-center gap-2 transition-all duration-500 ease-out"
                    >
                      <FaRegImage size={40} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-[#f9f8f8]/50 bg-opacity-20 z-50 flex items-center justify-center ">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <IoMdClose className='text-black'/>
          </button>
          <button
            onClick={prevImage}
            className="absolute left-40 text-white text-3xl"
          >
            <IoMdArrowBack  className='text-black'/>
          </button>
          <div className="relative w-[70vh] h-[80vh] max-w-2xl border-12 border-white ">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-40 text-white text-3xl"
          >
            <IoMdArrowForward  className='text-black'/>
          </button>
        </div>
        
      )}
      

    </section>
  );
};

export default ImageGrid;
