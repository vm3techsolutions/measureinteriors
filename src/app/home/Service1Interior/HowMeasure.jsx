import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-[#EDEDE9] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <Image
              src="/assets/HomeService1inner.webp"
              alt="Office Interior"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
        <h5 className='text-[#8e736b] font-semibold mb-2'>OFFICE INTERIOR DESIGNING</h5>
          <h2 className="text-3xl md:text-4xl  text-black mb-2 px-16">
          How Measure Transforms Spaces
          </h2>
          <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-6" />
          <p className="text-[#666] text-lg leading-relaxed text-start ">
          Office interiors are our strength, our forte, and our home ground to work on. We have designed and built spaces of various sizes. At Measure International FZ LLC, we specialize in designing and creating functional yet warm workspaces that enhance productivity and reflect your brand's identity. We understand that a well-designed office space is crucial for the success of any business. It not only boosts employee morale and productivity but also leaves a lasting impression on clients and visitors. Our comprehensive office interior services are tailored to meet the unique needs of each client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
