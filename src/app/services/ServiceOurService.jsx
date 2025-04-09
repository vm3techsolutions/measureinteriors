import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'OFFICE INTERIORS',
      desc: 'Bespoke interiors reflecting your brand identity and enhancing functionality.',
      img: '/assets/HomeService1.webp',
      link: '/services/interior-design',
      list: [
        'Space Planning',
        'Concept Development',
        '3D Visualization',
        'Material and Finish Selection',
        'Project Management',
        'IT and related services'
      ],
    },
    {
      title: 'OFFICE FIT-OUTS',
      desc: 'Transforming spaces into fully operational offices.',
      img: '/assets/HomeService2.webp',
      link: '/services/office-fitouts',
      list: [
        'Turnkey Solutions',
        'Electrical and Plumbing Services',
        'Glass and Gypsum Partitions',
        'Partitioning and Ceiling Works',
        'Architectural and MEP Works',
      ],
    },
    {
      title: 'FURNITURE SUPPLY AND INSTALLATION',
      desc: 'High-quality, ergonomic, and stylish furniture solutions.',
      img: '/assets/HomeService3.webp',
      link: '/services/furniture-supply',
      list: [
        'Office Desks and Workstations',
        'Permits to Completion',
        'Reception and Lounge Furniture',
        'Custom and Looped Furniture',
      ],
    },
  ];

  return (
    <section className="bg-[#f8f0e9] py-16 px-4">
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">OUR SERVICES</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 sm:gap-8 p-8 md:p-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#EDEDE9] rounded-2xl shadow-md pt-24 pb-10 px-6 text-center flex flex-col items-center h-[500px] transform transition duration-500 hover:scale-105"
          >
            {/* Circle Image */}
            <div className="absolute -top-16 left-3/4 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center flex-1 text-center">
              <h3 className="text-md md:text-lg font-semibold text-[#CD853F] uppercase mb-4 pt-6">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-1 max-w-[250px]">{service.desc}</p>

              <h3 className='text-md md:text-md font-semibold text-black uppercase mb-4 pt-6'>Our Services Include:</h3>

              <ul className="list-decimal font-extralight text-left text-md text-[#CD853F] mb-4  max-w-[250px]">
                {service.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
