import React, { useState } from "react";

import CheckboxGroup from "../../components/checkbox-group";
import RadioGroup from "../../components/radio-group";
import PriceRangeSlider from "../../components/price-slider";
import PromoterBanner from "../../components/promoter-banner";
import ListingsHeader from "../../components/listing-header";
import SortSelector from "../../components/filter-selector";
import ListingCard from "../../components/listing-card";

import saampleImage from "../../assets/images/image.png";
import { Save } from "lucide-react";

const Listings = () => {
  const [listingType, setListingType] = useState("all");
  const [listingBy, setListingBy] = useState("me");
  const [transactionType, setTransactionType] = useState([]);
  const [priceRange, setPriceRange] = useState(1000000);
  const [showBanner, setShowBanner] = useState(true);

  const [savedSearch, setSavedSearch] = useState("Apply saved search");

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <div className="h-[100vh] w-full  bg-[#f9fafb] mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:block w-full md:w-56 lg:w-56 flex-shrink-0">
          <div className="space-y-6">
            <CheckboxGroup
              title="Listed By"
              name="listedBy"
              selectedValue={listingBy}
              onChange={setListingBy}
              options={[
                { label: "Me", value: "me" },
                { label: "Honey Home Offers", value: "honey" },
                { label: "Other Members", value: "other" },
              ]}
            />

            <RadioGroup
              title="Listing Type"
              name="listingType"
              selectedValue={listingType}
              onChange={(e) => setListingType(e.target.value)}
              options={[
                { label: "All Types", value: "all" },
                { label: "Real Estate", value: "realEstate" },
                { label: "Debt Instruments", value: "debt" },
                { label: "Equity Interests", value: "equity" },
                { label: "Capital & Financing", value: "capital" },
                { label: "Business Sales", value: "business" },
                { label: "Partial Ownership", value: "partial" },
              ]}
            />

            <CheckboxGroup
              title="Transaction Type"
              name="transactionType"
              selectedValue={transactionType}
              onChange={setTransactionType}
              options={[
                { label: "Direct Acquisition", value: "direct" },
                { label: "Contract Assignment", value: "contract" },
              ]}
            />

            <PriceRangeSlider
              min={0}
              max={1000000}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>
        </div>
        <div className="flex-1">
          {showBanner && <PromoterBanner onClose={handleBannerClose} />}
          <div class="space-y-4 mb-6">
            <ListingsHeader />
            <div class="text-sm text-gray-600">
              Opportunities listed by yourself and everyone you follow appear
              here.
              <button class="text-[#4f45e4] hover:text-[#4f45e4]/80 font-medium ml-1">
                Learn more
              </button>
            </div>
            <div class="relative  mb-6 border border-gray-100 bg-gray-50/50 rounded-lg ">
              <div class="transition-all max-h-[500px] duration-300 p-3 ">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center justify-between gap-2 max-[500px]:flex-wrap">
                    <h3 class="text-sm font-medium text-gray-700">
                      Active Filters
                    </h3>
                    <div class="flex items-center gap-2 max-[500px]:flex-wrap">
                      <button class="text-sm text-[#4f45e4] hover:text-[#4f45e4]/80 font-medium">
                        Clear all filters
                      </button>
                      <div class="h-4 w-px bg-gray-300"></div>
                      <button class="text-sm text-[#4f45e4] hover:text-[#4f45e4]/80 font-medium flex items-center gap-1">
                        <Save color="#4f45e4" size={16} />
                        Save search
                      </button>
                      <SortSelector
                        selected={savedSearch}
                        options={savedSearchOptions}
                        onSelect={setSavedSearch}
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2"></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6 ">
              {listings.map((item, index) => (
                <ListingCard key={index} {...item} image={saampleImage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;

const savedSearchOptions = [
  "Residential Properties in Dallas (2024-02-15)",
  "Commercial Office Buildings (2024-02-14)",
  "Income Properties Under $1M (2024-02-10)",
  "Multifamily 5+ Units (2024-02-08)",
  "Development Land Opportunities (2024-02-05)",
  "Manage saved searches...",
];

const listings = [
  {
    type: "Real Estate For Sale",
    propertyType: "residential",
    price: 750000,
    title: "Modern Downtown Apartment",
    address: "123 Main St, New York, NY",
    size: 1200,
    isSponsored: true,
    isFav: true,
  },
  {
    type: "Commercial Lease",
    propertyType: "office",
    price: 540000,
    title: "Downtown Office Space",
    address: "456 Business Ave, Chicago, IL",
    size: 3000,
    isFeatured: true,
  },
  {
    type: "Investment Opportunity",
    propertyType: "multifamily",
    price: 960000,
    title: "5-Unit Apartment Complex",
    address: "789 Elm St, Los Angeles, CA",
    size: 4000,
    isSponsored: true,
  },
  {
    type: "Residential Rental",
    propertyType: "apartment",
    price: 2200,
    title: "Cozy Studio Apartment",
    address: "101 Maple Rd, Austin, TX",
    size: 550,
    isFav: true,
    isFeatured: true,
  },
  {
    type: "Land for Sale",
    propertyType: "development",
    price: 350000,
    title: "Development Land Opportunity",
    address: "500 Oak St, Denver, CO",
    size: 10000,
    isSponsored: true,
    isFeatured: true,
  },
  {
    type: "Luxury Homes",
    propertyType: "residential",
    price: 1250000,
    title: "Luxury Family Villa",
    address: "222 Pine St, Miami, FL",
    size: 3500,
    isSponsored: false,
  },
  {
    type: "Retail Space",
    propertyType: "commercial",
    price: 800000,
    title: "Prime Retail Location",
    address: "88 Market St, San Francisco, CA",
    size: 1500,
    isSponsored: true,
    isFav: true,
  },
  {
    type: "Office Space",
    propertyType: "commercial",
    price: 670000,
    title: "Modern Office Suite",
    address: "33 Commerce Blvd, Seattle, WA",
    size: 2200,
    isFeatured: true,
  },
  {
    type: "Vacation Rentals",
    propertyType: "residential",
    price: 1800,
    title: "Beachfront Condo",
    address: "456 Ocean Dr, Honolulu, HI",
    size: 900,
    isSponsored: true,
  },
  {
    type: "Industrial Properties",
    propertyType: "industrial",
    price: 950000,
    title: "Warehouse Facility",
    address: "77 Industrial Park, Dallas, TX",
    size: 5000,
    isFav: true,
  },
  {
    type: "Student Housing",
    propertyType: "residential",
    price: 1200,
    title: "Near University Dorms",
    address: "150 College Ave, Boston, MA",
    size: 800,
    isSponsored: true,
    isFav: true,
    isFeatured: true,
  },
  {
    type: "Mixed-Use Development",
    propertyType: "commercial",
    price: 2000000,
    title: "Downtown Mixed-Use Complex",
    address: "900 City Center, Chicago, IL",
    size: 8000,
  },
  {
    type: "Affordable Housing",
    propertyType: "residential",
    price: 400000,
    title: "Affordable Townhomes",
    address: "55 Elm St, Portland, OR",
    size: 1400,
    isSponsored: true,
    isFeatured: true,
  },
  {
    type: "Senior Living",
    propertyType: "residential",
    price: 600000,
    title: "Senior Living Community",
    address: "12 Willow Ln, Phoenix, AZ",
    size: 1800,
    isFav: true,
  },
  {
    type: "Retail Leasing",
    propertyType: "commercial",
    price: 750000,
    title: "Downtown Retail Space",
    address: "101 Market St, Atlanta, GA",
    size: 1700,
    isSponsored: true,
  },
  {
    type: "Farm Land",
    propertyType: "agricultural",
    price: 300000,
    title: "Fertile Farmland",
    address: "800 Country Rd, Iowa City, IA",
    size: 15000,
    isFav: true,
    isFeatured: true,
  },
  {
    type: "Office Leasing",
    propertyType: "commercial",
    price: 710000,
    title: "Corporate Office Park",
    address: "400 Business Pkwy, Charlotte, NC",
    size: 3500,
    isSponsored: true,
    isFeatured: true,
  },
  {
    type: "Luxury Apartments",
    propertyType: "residential",
    price: 1100000,
    title: "Skyline Luxury Apartments",
    address: "333 Skyline Blvd, San Diego, CA",
    size: 2000,
    isFav: true,
  },
];
