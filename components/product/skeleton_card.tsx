import React from "react";

const ProductCardSkeleton = () => (
  <div>
    <div className="w-full bg-gray-200 aspect-square animate-pulse" />
    <div className="w-full h-6 mt-3 bg-gray-200 animate-pulse" />
    <div className="flex items-center justify-between mt-3">
      <div className="w-1/4 h-6 bg-gray-200 animate-pulse" />
      <div className="w-2/4 h-6 bg-gray-200 animate-pulse" />
    </div>
  </div>
);

export default ProductCardSkeleton;
