import React, { useState } from "react";

import SortSelector from "../filter-selector";

import searchIcon from "../../assets/svgs/search--icon.svg";
import plus from "../../assets/svgs/plus-white.svg";
import gridIcon from "../../assets/svgs/grid-icon.svg";
import listIcon from "../../assets/svgs/list--icon.svg";

const ListingsHeader = () => {
  const [selectedSort, setSelectedSort] = useState("Sort by: Featured by me");

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-[10px] lg:items-center">
      <div className="flex items-center space-x-4 flex-wrap gap-[10px] sm:flex-nowrap">
        <h1 className="text-2xl font-semibold text-gray-900">Listings</h1>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <img src={searchIcon} alt="search-icon" />
          </span>
          <input
            type="text"
            placeholder="Search listings..."
            className="pl-10 pr-4 py-2 border border-gray-200 bg-white rounded-lg text-sm w-80"
          />
        </div>

        <button className="px-4 py-2 bg-[#4f45e4] text-white rounded-lg flex items-center gap-2 hover:bg-[#4f45e4]/90 transition-colors">
          <img src={plus} alt="plus-icon" />
          Create Listing
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <SortSelector
          selected={selectedSort}
          options={options}
          onSelect={setSelectedSort}
        />

        <div className="flex space-x-2">
          <button className="p-2 flex items-center justify-center text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src={gridIcon} alt="grid-icon" />
          </button>
          <button className="p-2 flex items-center justify-center text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src={listIcon} alt="list-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingsHeader;

const options = [
  "Sort by: Featured by me",
  "Price: Low to High",
  "Price: High to Low",
  "Date: Newest",
];
