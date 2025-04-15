import React from "react";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts`);
  const blogs = await res.json();
  return blogs.map((blog) => ({ id: blog.id.toString() }));
}

async function getBlog(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts/${id}?_embed`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogDetail({ params }) {
  const blog = await getBlog(params.id);

  return (
    <div className=" mx-auto px-5 sm:px-20 py-10 bg sm:mb-40 bg-[#EDEDE9]">
      <h1 className="text-3xl font-bold mb-4 text-black" dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
      <p className="text-gray-500 mb-4">📅 {new Date(blog.date).toDateString()}</p>

      {blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
  <div className="flex justify-center py-3">
    <img
      src={blog._embedded["wp:featuredmedia"][0].source_url}
      alt={blog.title.rendered}
      className="w-full sm:w-[80%] h-auto mb-6 rounded-lg"
    />
  </div>
)}


      <div className="text-gray-800 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
    </div>
  );
}
