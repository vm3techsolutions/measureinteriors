import blogs from "./blogs.json";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-[#EDEDE9]">
     <div className="w-full flex flex-col items-center text-center ">
        <h2 className="text-3xl md:text-4xl text-black mb-4">LATEST BLOG </h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2 ">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col md:flex-row justify-center items-center overflow-hidden bg-[#f9f8f7]">
            <div className="md:w-1/3">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="p-5 md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-4">📅{blog.date}</p>
                <p className="text-gray-700 mb-4">{blog.description}</p>
              </div>
              <Link href={blog.link} passHref>
                <button className="mt-1 bg-[#3a3f58] text-white hover:text-black px-4 py-2  hover:bg-white hover:border-[#3a3f58] border transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
