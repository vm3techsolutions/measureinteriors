import Link  from "next/link";
export default function QuoteSection() {
    return (
      <div className="bg-[#EDEDE9] py-32 flex items-center justify-center ">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center">
          {/* Quote Section */}
          <div className="border-l-4 border-[#e7cfc1] pl-6 text-black max-w-xl mb-6 md:mb-0">
            <p className="italic text-lg leading-relaxed">
              "Our fit-out process ensures a smooth transition from concept to
              completion, creating workspaces that inspire productivity and
              creativity. With a focus on quality and attention to detail, we
              manage every aspect of the project to deliver exceptional results."
            </p>
            <p className="text-[#aaa] mt-4">- CEO Measure</p>
          </div>
  
          {/* Buttons Section */}
          import Link from "next/link";

<div className="flex gap-4 -mt-4">
  <Link href="/office-interiors">
    <button className="bg-[#D5BDAF] px-6 py-3 rounded-md text-black font-medium hover:bg-[#c4ab9e] transition">
      Office Interiors
    </button>
  </Link>
  <Link href="/office-furniture">
    <button className="bg-[#D5BDAF] px-6 py-3 rounded-md text-black font-medium hover:bg-[#c4ab9e] transition">
      Office Furniture
    </button>
  </Link>
</div>

        </div>
      </div>
    );
  }
  