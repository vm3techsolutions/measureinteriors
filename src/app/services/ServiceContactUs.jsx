'use client';

import Link from 'next/link';

const ContactSubscribe = () => {
  return (
    <section className="bg-[#f8f0e9]  pb-20 sm:px-16 px-5">

      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Contact Form with Hover Scale */}
        <div className="transition-transform duration-300 hover:scale-105">
          <div className="bg-[#EDEDE9] sm:p-14 p-5 border-white border-6 shadow-2xl">
            <div className="w-full flex flex-col ml-8 mt-14">
              <h2 className="text-3xl md:text-4xl text-black mb-4"> Contact Us</h2>
              <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600"
              ></textarea>
              <button
                type="submit"
                className="bg-[#d5b7a3] text-black px-8 py-2 mt-5 font-semibold hover:bg-[#c2a896] transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter with Hover Scale */}
        <div className="flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <div className="bg-[#E3D5CA] p-10 shadow-2xl border-6 border-white w-full max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <p className="text-gray-700 mb-6">
              Stay updated with the latest news and updates from Measureinteriors.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#F5EBE0] rounded border border-[#D6CCC2] placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="bg-[#d5b7a3] text-black px-6 py-2 rounded font-semibold hover:bg-[#c2a896] transition-transform hover:scale-105 duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSubscribe;
