import Image from 'next/image';

const steps = [
  {
    title: 'Consultation',
    image: '/assets/HS1.webp',
    points: [
      'Listen to Your Requirements',
      'Site Analysis',
      'Initial Ideas',
    ],
  },
  {
    title: 'Design',
    image: '/assets/HS2.webp',
    points: [
      'Concept Development',
      'Space Planning',
      '3D Renderings and Visualizations',
      'Material and Finish Selection',
    ],
  },
  {
    title: 'Approval',
    image: '/assets/HS3.webp',
    points: [
      'Obtain approval from necessary authorities',
    ],
  },
  {
    title: 'Execution',
    image: '/assets/HS4.webp',
    points: [
      'Project Planning and Scheduling',
      'Procurement',
      'Construction and Fit-Out',
      'Quality Control',
    ],
  },
  {
    title: 'Completion',
    image: '/assets/HS5.webp',
    points: [
      'Final Touches',
      'Walkthrough and Inspection',
      'Handover and Documentation',
      'Post-Completion Support',
    ],
  },
];

const ProcessCards = () => {
  return (
    <div className='sm:px-10 py-10'>

<div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">HOW WE TRANSFORM TOUR SPACE</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6 bg-[#d6ccc2] ">
        
      {steps.map((step, index) => (
        <div
        key={index}
        className="bg-[#d5c8bb] rounded-lg shadow-xl p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      >
      
          <h2 className="text-xl  text-gray-800 mb-4">{step.title}</h2>
          <div className="w-full h-40 relative mb-4">
            <Image
              src={step.image}
              alt={step.title}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <ul className="text-lg  text-[#666666] text-left space-y-2">
            {step.points.map((point, i) => (
              <li key={i} className="list-disc ml-4">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProcessCards;
