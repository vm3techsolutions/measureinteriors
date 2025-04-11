
const features = [
  
];

const FeatureCards = () => {
  return (
    <section className='bg-[#f9f9f9] '>

    <div
      className="relative h-[30vh] sm:h-[65vh] w-full bg-cover bg-center bg-no-repeat px-4 sm:pt-16 pt-5"
      style={{ backgroundImage: `url('/assets/faq.jpeg')` }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="bg-[#D5BDAF99] relative z-10   mx-auto py-5">
       
       <h1 className='text-black sm:text-5xl text-xl text-center pb-5'>Frequently Asked Questions</h1>

       <div className="bg-[#F3E6DF99] relative rounded-xl max-w-4xl  mx-auto py-5 ">
       
       <p className='text-black text- sm:text-lg text-center px-8'>Find answers to the most common questions about our services and expertise. If you can't find what you're looking for, feel free to contact us directly.</p>
      </div>
      </div>
    </div>
    </section>
  );
};

export default FeatureCards;
