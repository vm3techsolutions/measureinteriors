"use client";
import React, { useState } from "react";
import productsData from "../products/products"; // Adjust path if needed

const categories = [
  "All Products",
  "Accessories",
  "Adjustable Desk",
  "Keyless lock",
  "STURDY LOCK FOR CABINET",
  "USB Charger with Power Ports"
];

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? productsData
      : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="p-6 bg-[#EDEDE9] min-h-screen pb-14">
        <div className="w-full flex flex-col items-center text-center py-10">
    <h2 className="text-3xl md:text-4xl text-black mb-4">OUR PRODUCTS</h2>
    <hr className="w-16 h-1 bg-[#D5BDAF] border-0 rounded-full mb-5" />
  </div>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 content-center justify-center">
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-2 rounded-md text-lg transition  ${
              selectedCategory === category
                ? "bg-[#0073aa] text-white"
                : "bg-[#dddddd] text-gray-800  hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-5">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-[#EDEDE9] border border-black p-2 w-full max-w-sm"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-md h-40 object-cover w-full mb-4"
            />
            <h2 className="text-xl font-bold text-black">{product.title}</h2>
            <p className="text-md text-black mt-2">{product.description}</p>
            <p className="text-lg mt-2 font-bold text-black">
              Category: <span className="text-black text-md font-normal">{product.category}</span>
            </p>
            <a
              href={product.link}
              className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;