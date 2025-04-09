import Image from "next/image";

export default function InteriorFitOut() {
    const services = [
      { title: "Turnkey Interior Fitout", icon: "/assets/i1.webp" },
      { title: "Design & Build", icon: "/assets/i2.webp" },
      { title: "Renovation & Refurbishment", icon: "/assets/i3.webp" },
      { title: "Custom Furniture Manufacturing", icon: "/assets/i4.webp" },
      { title: "Carpentry & Joinery Work", icon: "/assets/i5.webp" },
    ];
  
    return (
      <div className="bg-[#efefea] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">
          INTERIOR FIT OUT COMPANY IN DUBAI
        </h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] mx-auto mb-6 rounded-full" />
        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          For over three decades, we have been providing expert interior fit out solutions to both
          residential and commercial clients in the UAE. Using the finest materials and employing the
          highest quality craftsmanship, we deliver outcomes that are marked by aesthetic individuality,
          superior durability, and unmatched convenience.
        </p>
  
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-items-center">
  {services.map((service, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
          <Image
            width={40}
            height={40}
            src={service.icon}
            alt={service.title}
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* Bottom black line */}
        <div className="w-0.5 h-3 bg-black mt-"></div>
      </div>
      <p className="mt-4 text-gray-800 font-medium text-center px-10">{service.title}</p>
    </div>
  ))}
</div>

      </div>
    );
  }
  