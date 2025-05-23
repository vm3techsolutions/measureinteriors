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
          OUR STORY
          </h2>
          <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-6 " />


          <div className="scene1 w-[150px] h-[150px] my-16 ">
  <div className="cube-small">
    {['1', '2', '3', '4', '5', '6'].map((side) => (
      <div className={`cube-face-small face-${side}`} key={side}>
        <Image
          src={`/assets/Logo1.webp`}
          alt={`Face ${side}`}
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>
    ))}
  </div>
</div>

          <p className="text-[#666] text-lg leading-relaxed text-start px-8">
          Measure specializes in transforming workspaces with comprehensive office interior design and turnkey fit-out solutions in Dubai. Our mission is to create functional, stylish, and comfortable office environments tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
