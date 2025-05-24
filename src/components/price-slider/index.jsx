import React from "react";

const PriceRangeSlider = ({ min = 0, max = 1000000, value, onChange }) => {
  const formatPrice = (val) =>
    val >= 1000000 ? "$1M+" : `$${val.toLocaleString()}`;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Price Range</h2>
      <div className="space-y-1">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="text-sm text-gray-600 flex justify-between text-center">
          <span>{formatPrice(min)}</span>
          <span>${value}</span>
          <span>{formatPrice(max)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
