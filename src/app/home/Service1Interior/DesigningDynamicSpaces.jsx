const services = [
    {
      title: "Space Planning and Layout",
      image: "/assets/SD1.webp",
      points: [
        "Effective space planning",
        "Optimized layouts",
        "Supports operational needs",
      ],
    },
    {
      title: "Interior Design",
      image: "/assets/SD2.webp",
      points: [
        "Functional and aesthetically pleasing",
        "Reflects your brand identity",
        "From conceptualization to final design",
      ],
    },
    {
      title: "Custom Office Solutions",
      image: "/assets/SD3.webp",
      points: [
        "Bespoke furniture",
        "Custom partitions",
        "Unique decor elements",
      ],
    },
  ];
  
  export default function ServiceCards() {
    return (
        <div>
            <div className="w-full flex flex-col items-center text-center pt-10">
        <h2 className="text-2xl md:text-3xl text-black mb-4">DESIGNING DYNAMIC SPACES: WHERE FUNCTION MEETS  AESTHETICS</h2>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:px-32">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl group cursor-pointer shadow-lg h-96"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-white/90 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex items-center justify-center">
              <div className="text-black text-center px-6">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <ol className="list-decimal text-left space-y-2 pl-5 text-base">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
  