import React from "react";

const getProductBySlug = async (slug) => {
  const res = await fetch(
    `http://localhost/measure/wp-json/wp/v2/product?slug=${slug}`
  );
  const data = await res.json();
  return data[0];
};

const ProductPage = async ({ params }) => {
  const product = await getProductBySlug(params.slug);

  return (
    <div className="min-h-screen bg-[#EDEDE9] px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <img
          src={product.acf?.image_url}
          alt={product.title.rendered}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title.rendered}</h1>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: product.content.rendered }}
        />
        <p className="mt-6 font-semibold text-lg">
          Category: <span className="font-normal">{product.acf?.category}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
