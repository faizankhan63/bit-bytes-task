import React from "react";
import { Heart, Star } from "lucide-react";

const ListingCard = ({
  type,
  propertyType,
  price,
  title,
  address,
  size,
  image,
  isSponsored,
  link,
  isFav,
  isFeatured,
}) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden relative ${
        isSponsored ? "ring-2 ring-purple-600" : "shadow-sm"
      }`}
    >
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 like-btn group
            ${
              isFav
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-400 hover:bg-red-500 hover:text-white backdrop-blur-sm"
            }`}
          title="Add to favorites"
        >
          <Heart className="w-5 h-5" />
          <div className="absolute invisible group-hover:visible bg-gray-900 text-white text-xs rounded px-2 py-1 right-0 top-full mt-2 whitespace-nowrap">
            Save to my favorites
          </div>
        </button>
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 favorite-btn group
            ${
              isFeatured
                ? "bg-purple-600 text-white"
                : "bg-white/80 text-gray-400 hover:bg-purple-600 hover:text-white backdrop-blur-sm"
            }`}
          title="Featured on your profile"
        >
          <Star className="w-5 h-5" />
          <div className="absolute invisible group-hover:visible bg-gray-900 text-white text-xs rounded px-2 py-1 right-0 top-full mt-2 whitespace-nowrap">
            Feature on my profile
          </div>
        </button>
      </div>

      <a href={link || "#"}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </a>

      {isSponsored && (
        <div className="absolute top-0 left-0">
          <span className="inline-block px-3 py-1 bg-black/80 text-white text-xs font-medium">
            Sponsored
          </span>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2">
            {type && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {type}
              </span>
            )}
            {propertyType && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                {propertyType}
              </span>
            )}
          </div>
          <span className="text-lg font-semibold text-gray-900">
            ${price?.toLocaleString()}
          </span>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{address}</p>

        {size && (
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{size} sqft</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
