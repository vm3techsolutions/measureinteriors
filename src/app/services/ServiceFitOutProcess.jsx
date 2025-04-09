import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import {
    FaComments,
    
    FaCheckCircle,
    FaCogs,
    FaFlagCheckered,
  } from "react-icons/fa";
  
const steps = [
    {
      img: "/assets/SF1.webp",
      icon: <FaComments className="text-white text-xl" />,
      title: "Consultation",
      description:
        "We start by understanding your specific needs, preferences, and vision for your office space. This includes site analysis and initial idea discussions.",
    },
    {
      img: "/assets/SF2.webp",
      icon: <FaPencilAlt className="text-white text-xl" />,
      title: "Design",
      description:
        "Our designers create detailed plans and 3D renderings to help you visualize the final outcome, including space planning and material selection.",
    },
    {
      img: "/assets/SF3.webp",
      icon: <FaCheckCircle className="text-white text-xl" />,
      title: "Approval",
      description:
        "We obtain necessary approvals from relevant authorities, ensuring compliance and smooth execution of the project.",
    },
    {
      img: "/assets/SF4.webp",
      icon: <FaCogs className="text-white text-xl" />,
      title: "Execution",
      description:
        "Our skilled craftsmen and project managers work diligently to bring the designs to life, with a focus on quality control and timely delivery.",
    },
    {
      img: "/assets/SF5.webp",
      icon: <FaFlagCheckered className="text-white text-xl" />,
      title: "Completion",
      description:
        "We conduct a final walkthrough, address any concerns, and hand over the completed space along with necessary documentation and post-completion support.",
    },
  ];

export default function ProcessSteps() {
  return (
    <div className="bg-[#f4eae2] py-12 px-4 mb-5">
        
        <div className="w-full flex flex-col items-center text-center ">
        <h2 className="text-3xl md:text-4xl text-black mb-4">FIT-OUT PROCESS</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 sm:gap-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#D6CCC2] rounded-xl shadow-md text-center "  
          >
            <div className=" items-center rounded-t-xl justify-center gap-1 mb-4">
              <Image
                src={step.img}
                alt={step.title}
                width={50}
                height={50}
                className="w-full"
              />
              <h3 className="text-2xl text-[#edede9] flex items-center gap-1 ml-4 mt-3">
                <span className="text-xl">{step.icon}</span>
                {step.title}
              </h3>
            </div>
            <p className="text-gray-700 text-lg text-start ml-2 mb-4">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
