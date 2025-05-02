import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md transition hover:shadow-xl border border-gray-100">
      <img
        src={product?.img}
        alt={product?.title}
        className="w-full h-60 object-contain bg-gray-50"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product?.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">{product?.price}</span>
          <span className="text-sm text-green-600">{product?.shipping}</span>
        </div>
        <div className="text-sm text-gray-500">
          {product?.rating} • {product?.reviews}
        </div>
        <div className="text-sm text-gray-600">
          {product?.shop}
        </div>
        <a
          href={product?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
        >
          View Product
        </a>
      </div>
    </div>
  );
}