'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I get started with a project?",
    answer: "To get started, you can contact us via phone or email to schedule an initial consultation. During this meeting, we'll discuss your requirements and also visit the site if that is possible. This will help us understand your vision and provide a customized proposal for your project.",
  },
  {
    question: "Why Should You Work with Us?",
    answer: "", // Will be replaced with cards
    cards: [
        { title: "High-Quality Products", description: "Our furniture is made from durable materials and crafted with precision, ensuring longevity and customer satisfaction." },
        { title: "Unique and Stylish Designs ", description: "We offer a wide range of ergonomic designs that blend style and functionality." },
        { title: "Attention to Detail", description: "Every piece is meticulously designed and crafted, paying attention to even the smallest details." },
        { title: "Comfort and Functionality", description: "Our furniture is designed with ergonomics in mind, providing optimal comfort and usability." },
        { title: "Excellent Customer Service", description: "Our knowledgeable and friendly staff are available to assist you throughout the purchasing process." },
        { title: "Competitive Pricing", description: "We offer high-quality furniture at competitive prices, providing excellent value for your investment." },
        { title: "Sustainable and Ethical Practices", description: "We use environmentally friendly materials and production processes, and prioritize fair labor practices." },
        { title: "Delivery and Assembly Services    ", description: "We offer reliable delivery and assembly services to ensure your furniture is set up correctly." },
        { title: "Positive Customer Reviews and Reputation", description: "Our satisfied customers and positive reviews speak to our commitment to quality and customer satisfaction." },
        
      ],
  },
  {
    question: "Why should I get my apartment measured?",
    answer: "Accurate measurements help with space planning, renovations, furniture placement, and real estate listings.",
  },
  {
    question: "What makes your measurement services better than others?",
    answer: "Not only the drafting team but also our lead architect visits the site and we ensure that the layout we draw is precise and accurate, saving you time and money.",
  },
  {
    question: "How long does it take to measure an apartment?",
    answer: "The process usually takes between 2 to 3 days, depending on the size and complexity of the space. Our team assigned is based on the required timelines of the client.",
  },
  {
    question: "What tools do you use for measurements?",
    answer: "We use both laser and manual measuring device for precise results.",
  },
  {
    question: "Do you provide a detailed floor plan after measurement?",
    answer: "Yes! We provide professionally drafted floor plans with all necessary dimensions.",
  },
  {
    question: "Can you measure irregular or complex spaces?",
    answer: "Absolutely! Our team is skilled in measuring apartments of all shapes and layouts.",
  },
  {
    question: "How much does it cost to get my apartment measured?",
    answer: "Our pricing is competitive and depends on the size of your apartment. Contact us for a personalized quote on 0502659845.",
  },
  {
    question: "Is your service suitable for landlords and real estate agents?",
    answer: "Yes! We work very closely with owners, landlords, agents, and developers create accurate property listings.",
  },
  {
    question: "Do you offer same-day or urgent measurement services?",
    answer: "Yes, we offer express services for urgent requests (subject to availability).. ",
  },
  {
    question: "How do I book an appointment?",
    answer: "Simply call, email, or visit our website to schedule your apartment measurement at your convenience. Call or WhatsApp on 0502659845 and email us on info@measureinteriors.com",
  },
  {
    question: "Why we are the ideal fit-out partners for investors looking to develop properties in Dubai?",
    answer: "", // Will be replaced with cards
    cards: [
        { title: "Expertise in Dubai’s Market", description: "We have in-depth knowledge of Dubai’s Fitout industry since we are based in Dubai for last 20 years ensuring seamless project execution." },
        { title: "Turnkey Fit-Out Solutions", description: "From concept to completion, we handle everything—design, approvals, construction, and furnishing, making it hassle-free for investors." },
        { title: "Compliance with Local Regulations", description: "We are registered with Dubai Municipality, DCD, and Trakhees and ensure all projects meet regulations ensuring on time approvals and completion certificates." },
        { title: "Comfort and Functionality", description: "Our furniture is designed with ergonomics in mind, providing optimal comfort and usability." },
        { title: "Quality Under Control", description: "We source good quality materials and manufacture Joinery/ Wood works in our factory in Ras Al khor Dubai enabling us complete control on design, time and quality." },
        { title: "Strong Network of Suppliers & Contractors", description: "Our trusted network of suppliers and contractors allows us to deliver fit-outs on time and within budget." },
        { title: "Cost-Effective & Transparent Pricing", description: "We offer competitive pricing with clear cost breakdowns in the format of a BOQ, helping investors maximize ROI without hidden costs.." },
        { title: "On-Time Delivery", description: "Our project management expertise ensures timely execution, allowing investors to launch, lease, or sell properties faster. And if you are furnishing your own home or office, you can move in as planned." },
        { title: "Custom-Tailored Designs", description: "Whether it’s luxury, corporate, retail, or hospitality, we deliver bespoke interiors that enhance the property’s market value.    " },
        { title: "Sustainable & Smart Fit-Out Solutions", description: "We incorporate eco-friendly materials, energy-efficient lighting, and smart technology for modern, sustainable spaces." },
      ],
  },
];



export default function FAQFindYour() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20">
      {/* Heading */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">FIND YOUR ANSWER HERE</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      {/* Accordion */}
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const bgColor = index % 2 === 0 ? 'bg-[#EDEDE9]' : 'bg-[#D5BDAF]';

          return (
            <div
              key={index}
              className={`${bgColor} rounded-md border border-[#c6c1c1] transition-all duration-300 shadow-md`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left pr-3"
              >
                <span className="text-xl font-semibold text-[#333] p-5">{faq.question}</span>
                {isOpen ? (
                  <Minus className="w-6 h-6 text-black transition-transform rotate-180" />
                ) : (
                  <Plus className="w-6 h-6 text-black" />
                )}
              </button>

              {isOpen && (
  faq.cards ? (
    <div className="bg-white rounded-b-md p-4 grid grid-cols-1 sm:grid-cols-5 gap-4">
      {faq.cards.map((card, idx) => (
        <div key={idx} className="bg-[#F5EBE0] rounded-lg p-4 shadow">
          <h4 className="text-2xl text-[#333] mb-2">{card.title}</h4>
          <p className="text-[#666] text-lg">{card.description}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="mt-3 bg-white rounded-b-md p-4 shadow-inner transition-all duration-300 ">
      <p className="text-[#666] text-lg">
        {faq.answer ? faq.answer : "Answer coming soon..."}
      </p>
    </div>
  )
)}

            </div>
          );
        })}
      </div>
    </div>
  );
}
