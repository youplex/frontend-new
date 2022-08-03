import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        {/* Navbar */}
        <nav
          className="relative container mx-auto p-6"
          style={{ width: "80%" }}
        >
          {/* Flex container */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
              <h1 className="max-w-md text-lg font-bold text-center md:text-md md:text-left">
                Playlist Management
              </h1>
            </div>
            {/* Menu Items */}
            <div className="space-x-6 md:flex ml-80">
              <a href="#features" className="hover:text-darkGrayishBlue">
                Features
              </a>
              <a href="#faq" className="hover:text-darkGrayishBlue">
                FAQ
              </a>
            </div>
            {/* Button */}
            <NavLink
              to={"/login"}
              className="hidden p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-btn md:block"
            >
              Get Started
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
