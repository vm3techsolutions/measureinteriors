
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?_embed`);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-[#EDEDE9]">
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">LATEST BLOG</h2>
        <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col md:flex-row bg-[#f9f8f7] overflow-hidden">
            <div className="md:w-1/3 flex justify-center items-center">
  {blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
    <Image
      src={blog._embedded["wp:featuredmedia"][0].source_url}
      alt={blog.title.rendered}
      width={500}
      height={300}
      className="w-full h-32 object-cover"
    />
  )}
</div>

            <div className="p-5 md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black" dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
                <p className="text-sm text-gray-500 mb-4">📅 {new Date(blog.date).toDateString()}</p>
                <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{
  __html: blog.excerpt.rendered.slice(0, 120) + "..."
}} />

              </div>
              <Link href={`/blog/${blog.id}`}>
  <button className="mt-1 bg-[#3a3f58] text-white hover:text-black px-4 py-2 hover:bg-white hover:border-[#3a3f58] border transition">
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
