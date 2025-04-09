import { Clock, ThumbsUp, Share2 } from 'lucide-react';

const features = [
  {
    title: 'Turnkey Solutions',
    desc: 'End-to-end project management ensuring a hassle-free experience.',
    icon: null,
    color: 'text-[#D29B67]',
  },
  {
    title: 'On-Time Completion',
    desc: '',
    icon: <Clock className="w-8 h-8 text-black" />,
  },
  {
    title: 'Custom Design',
    desc: 'Tailored interior design services that align with your brand.',
    icon: null,
    color: 'text-[#D29B67]',
  },
  {
    title: 'Positive Feedback',
    desc: '',
    icon: <ThumbsUp className="w-8 h-8 text-black" />,
  },
  {
    title: 'Vastu Consultancy',
    desc: 'Expert advice to harmonize your workspace with natural forces.',
    icon: null,
    color: 'text-[#D29B67]',
  },
  {
    title: 'High Referral Rate',
    desc: '',
    icon: <Share2 className="w-8 h-8 text-black" />,
  },
];

const FeatureCards = () => {
  return (
    <section className='bg-[#f9f9f9] '>

<div className="flex items-center justify-center transform transition duration-500 hover:scale-90 py-14" data-aos="fade-up">
  <div className="max-w-4xl shadow-2xl rounded-2xl ">
    <h1 className="bg-[#edede9] rounded-2xl text-black text-center py-8 px-4 text-xl">
    "Measure handled our office renovation seamlessly, delivering a space that inspires productivity."
    </h1>
  </div>
</div>

<div className="w-full flex flex-col items-center text-center py-10">
        <h2 className="text-3xl md:text-4xl text-black mb-4"> OUR VALUE PROPOSITIONS</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>


    <div
      className="relative bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url('/assets/OurValue.webp')` }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="bg-black/10 relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
        {features.map((item, index) => (
         <div
         key={index}
         className={`group bg-white rounded-xl shadow-lg p-2 text-center transition-all duration-300
           ${[1, 3, 5].includes(index) ? 'h-24' : 'h-40'}
           flex flex-col justify-center transform hover:-translate-y-3 hover:-translate-x-3 hover:rotate-[-2deg] hover:shadow-xl`}
       >
       
            {item.icon && (
              <div className="mb-2 flex justify-center">{item.icon}</div>
            )}
            <h3 className={`text-xl mb-1 ${item.color || 'text-black'}`}>
              {item.title}
            </h3>
            {item.desc && (
              <p className="text-gray-600 text-md px-2">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FeatureCards;
