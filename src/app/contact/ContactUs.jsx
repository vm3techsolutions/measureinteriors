'use client';

import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaLinkedin, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactSubscribe = () => {
  return (
    <section className="bg-[#f8f0e9] pb-20 sm:px-16 px-5">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Contact Form */}
        <div className="transition-transform duration-300 hover:scale-105">
          <div className="bg-[#EDEDE9] sm:p-14 p-5 border-white border-6 shadow-2xl">
            <div className="w-full flex flex-col ml-8 mt-14">
              <h2 className="text-3xl md:text-4xl text-black mb-4">Contact Us</h2>
              <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
            </div>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600" />
              <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600" />
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600"></textarea>
              <button type="submit" className="bg-[#d5b7a3] text-black px-8 py-2 mt-5 font-semibold hover:bg-[#c2a896] transition">SEND</button>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex items-center justify-center ">
          <div className=" p-10  w-full max-w-xl ml-10">
            <h2 className="text-2xl md:text-3xl  mb-6 text-black">Get in Touch</h2>

            <div className="space-y-4 text-gray-800 text-lg">
  <div className="flex items-center gap-3 group cursor-pointer">
    <FaPhoneAlt className="text-3xl transition-transform duration-300 group-hover:rotate-360" />
    <span>+971 4 329 4720</span>
  </div>
  <div className="flex items-center gap-3 group cursor-pointer">
    <FaWhatsapp className="text-3xl transition-transform duration-300 group-hover:rotate-360" />
    <span>+971 50 265 9845</span>
  </div>
  <div className="flex items-center gap-3 group cursor-pointer">
    <FaLinkedin className="text-3xl transition-transform duration-300 group-hover:rotate-360" />
    <span>MEASURE INTERIORS</span>
  </div>
  <div className="flex items-center gap-3 group cursor-pointer">
    <FaEnvelope className="text-3xl transition-transform duration-300 group-hover:rotate-360" />
    <span>info@measureinteriors.com</span>
  </div>
</div>

            {/* Social Media Icons */}
            <div className="flex gap-5 mt-10">
              <Link href="#" className="bg-[#3b5998] p-3 rounded-lg shadow-lg text-white text-3xl"><FaFacebookF /></Link>
              <Link href="#" className="bg-[#00acee] p-3 rounded-lg shadow-lg text-white text-3xl"><FaTwitter /></Link>
              <Link href="#" className="bg-[#0e76a8] p-3 rounded-lg shadow-lg text-white text-3xl"><FaLinkedin /></Link>
              <Link href="#" className="bg-[#bc2a8d] p-3 rounded-lg shadow-lg text-white text-3xl"><FaInstagram /></Link>
              <Link href="#" className="bg-[#FF0000] p-3 rounded-lg shadow-lg text-white text-3xl"><FaYoutube /></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSubscribe;
