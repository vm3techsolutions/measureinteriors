import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-[#f8f0e9] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <Image
              src="/assets/HomeAboutUs.webp"
              alt="Office Interior"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl  text-black mb-4">
            ABOUT US
          </h2>
          <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-6" />
          <p className="text-[#666] text-lg leading-relaxed text-start p-">
            Dedicated to excellence in office interiors and furniture, we bring over 20 years of
            expertise to every project. Our mission is to create spaces that look stunning and
            enhance the well-being and productivity of their occupants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
