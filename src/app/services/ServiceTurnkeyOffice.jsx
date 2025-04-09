'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OfficeFitouts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='bg-[#f9f9f9] pb-20'>
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 sm:px-16  rounded-xl gap-8">
      {/* Text Card */}
      <div className="max-w-xl bg-[#f4ece6] p-10 rounded-xl" data-aos="fade-right">
        <p className="text-lg tracking-widest text-[#8e736b]  mb-2">HOME TOURS</p>
        <h2 className="text-4xl text-gray-800 mb-4 leading-tight">
          TURNKEY OFFICE <br /> FITOUTS
        </h2>
        <p className="text-[#666] text-base leading-relaxed">
          Measure specializes in comprehensive interior design and turnkey fit-out solutions tailored to your business needs.
          Our team of experienced designers and project managers work closely with clients to understand their vision and bring it to life.
          We manage every aspect of your office transformation, from initial concept and design to construction and final handover.
        </p>
      </div>

      {/* Image Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <Image width={400} height={400}
          src="/assets/TurnkeyOffice.webp"
          alt="Modern Office Interior"
          className="object-cover w-full h-80 max-h-[400px]"
        />
      </div>
      </div>


      <div className="flex items-center justify-center transform transition duration-500 hover:scale-90" data-aos="fade-up">
  <div className="max-w-4xl shadow-2xl rounded-2xl ">
    <h1 className="bg-[#edede9] rounded-2xl text-black text-center py-10 px-4 text-xl">
      "From concept to completion, we manage every aspect of your office transformation."
    </h1>
  </div>
</div>

    </section>
  );
};

export default OfficeFitouts;
