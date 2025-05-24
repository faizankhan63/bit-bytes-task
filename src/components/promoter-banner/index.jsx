import React from "react";

const PromoterBanner = ({ onClose }) => {
  return (
    <div className="bg-[#eaebfa] rounded-lg p-6 mb-8 relative overflow-hidden">
      <div className="relative flex flex-col items-start justify-start sm:flex-row gap-[10px] sm:items-center sm:justify-between">
        <div
          className="absolute cursor-pointer top-[-15px] right-[-10px] w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 z-10"
          onClick={onClose}
        >
          X
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">
            Follow Promoters to See More Listings
          </h3>
          <p className="text-sm text-gray-600">
            Connect with active promoters in your industry to unlock exclusive
            listings and opportunities.
          </p>
        </div>
        <div className="flex items-center gap-4 mr-8">
          <button className="px-4 py-2 bg-white text-[#4f45e4] border border-[#4f45e4] rounded-lg !rounded-button hover:bg-[#4f45e4]/5 transition-colors whitespace-nowrap">
            Browse Promoters
          </button>
          <button className="px-4 py-2 bg-[#4f45e4] text-white rounded-lg !rounded-button hover:bg-[#4f45e4]/90 transition-colors whitespace-nowrap">
            Become a Promoter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoterBanner;
