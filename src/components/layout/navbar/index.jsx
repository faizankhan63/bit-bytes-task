import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Bell, Menu, X } from "lucide-react";
import profile from "../../../assets/images/image.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/listings":
        return "Your List";
      case "/groups":
        return "Groups";
      case "/leads":
        return "Leads";
      case "/messages":
        return "Your Messages";
      default:
        return "";
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white border-b border-b-[#e6e7eb] text-[#364154] z-50 transition-all duration-300 p-4 sm:p-4 ${
        isScrolled ? "opacity-50  hover:opacity-100" : "opacity-100 "
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[32px]">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl text-[#4f46e4]">{getPageTitle()}</h1>

          <input
            className="sm:block hidden pl-10 pr-4 py-2 border-none bg-gray-50 rounded-lg text-sm w-64 md:w-64"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block border-b-2 transition-colors duration-300 relative ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/groups"
              className={({ isActive }) =>
                `block border-b-2 transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Groups
            </NavLink>
            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `block border-b-2 transition-colors duration-300 relative ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Leads
              <span className="top-[-8px] right-[-8px] absolute bg-[#ff6467] text-white text-[12px] flex items-center justify-center h-4 w-4 rounded-full">
                3
              </span>
            </NavLink>
            <NavLink
              to="/listings"
              className={({ isActive }) =>
                `block border-b-2 transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Listings
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `block border-b-2 transition-colors duration-300 relative ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Messages
              <span className="top-[-8px] right-[-8px] absolute bg-[#ff6467] text-white text-[12px] flex items-center justify-center h-4 w-4 rounded-full">
                10
              </span>
            </NavLink>
          </nav>
          <div className="relative">
            <Bell className="cursor-pointer" />
            <span className="top-[-15px] right-[-12px] absolute bg-[#ff6467] text-white text-[12px] flex items-center justify-center h-4 w-4 rounded-full">
              29
            </span>
          </div>
          <div className="flex items-center justify-center rounded-full border border-gray-300 bg-black cursor-pointer h-10 w-10 overflow-hidden">
            <img src={profile} alt="user-picture" />
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden bg-white overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-6 py-4 text-[#364154]">
          <li>
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b-2 pb-1 transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/groups"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b-2 pb-1 transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Groups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leads"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b-2 pb-1 relative transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Leads
              <span className="top-[-8px] right-0 absolute bg-[#ff6467] text-white text-[12px] flex items-center justify-center h-4 w-4 rounded-full">
                3
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b-2 pb-1 transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b-2 pb-1 relative transition-colors duration-300 ${
                  isActive
                    ? "border-[#4f46e4] text-[#4f46e4]"
                    : "border-transparent hover:text-[#4f46e4]"
                }`
              }
            >
              Messages
              <span className="top-[-8px] right-0 absolute bg-[#ff6467] text-white text-[12px] flex items-center justify-center h-4 w-4 rounded-full">
                10
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
