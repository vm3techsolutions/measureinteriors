import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-14">

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl  text-black mb-4">
          Discover Your Perfect Office Interior
          </h2>
          <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-6 " />

          <p className="text-[#666] text-lg leading-relaxed text-start px-8">
          Unsure if your office style should be Modern, Minimalist, or Industrial? Our office decor style quiz helps you uncover the design that best suits your professional environment.
          </p>
          <p className="text-[#666] text-lg leading-relaxed text-start px-8 mt-2">
          Once you have your personalized results, our expert designers at Measureinteriors can help you create a workspace you love.
          </p>
        </div>

        {/* Images */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Image
              src="/assets/GDiscover1.webp"
              alt="Office Interior 1"
              width={350}
              height={250}
              className="w-full sm:w-[47%] h-[300px] object-cover rounded-lg transform transition duration-500 hover:scale-105"
            />
            <Image
              src="/assets/GDiscover2.webp"
              alt="Office Interior 2"
              width={350}
              height={250}
              className="w-full sm:w-[47%] h-[300px] object-cover rounded-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
