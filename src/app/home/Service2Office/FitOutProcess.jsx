'use client';
import Image from "next/image";
import {
  FaComments,
  FaPencilAlt,
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
    description2:
      "Understanding your needs and vision for the office space.",
  },
  {
    img: "/assets/SF2.webp",
    icon: <FaPencilAlt className="text-white text-xl" />,
    title: "Design",
    description:
      "Our designers create detailed plans and 3D renderings to help you visualize the final outcome, including space planning and material selection.",
    description2:
      "We start by understanding your specific needs, preferences, and vision for your office space. This includes site analysis and initial idea discussions.",
  },
  {
    img: "/assets/SF3.webp",
    icon: <FaCheckCircle className="text-white text-xl" />,
    title: "Approval",
    description:
      "We obtain necessary approvals from relevant authorities, ensuring compliance and smooth execution of the project.",
    description2: "Creating detailed plans and 3D renderings.",
  },
  {
    img: "/assets/SF4.webp",
    icon: <FaCogs className="text-white text-xl" />,
    title: "Execution",
    description:
      "Our skilled craftsmen and project managers work diligently to bring the designs to life, with a focus on quality control and timely delivery.",
    description2:
      "Our designers create detailed plans and 3D renderings to help you visualize the final outcome, including space planning and material selection.",
  },
  {
    img: "/assets/SF5.webp",
    icon: <FaFlagCheckered className="text-white text-xl" />,
    title: "Completion",
    description:
      "We conduct a final walkthrough, address any concerns, and hand over the completed space along with necessary documentation and post-completion support.",
    description2: "Obtaining necessary approvals from relevant authorities.",
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
          <div key={index} className="perspective">
            <div className="relative w-full h-96 text-center transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-[#D6CCC2] rounded-xl shadow-md backface-hidden">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={50}
                  height={50}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <h3 className="text-xl text-black mt-3">{step.title}</h3>
                <p className="text-gray-700 text-md mt-2 px-4">{step.description2}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#D6CCC2] rounded-xl shadow-md text-black px-4 py-6 transform rotate-y-180 backface-hidden">
              <h3 className="text-xl contents-center justify-center flex">{step.icon}</h3>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-lg text-left">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
