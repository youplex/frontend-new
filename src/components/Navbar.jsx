import React from "react";

function navbar() {
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
            <div className="space-x-6 md:flex" style={{ marginLeft: "50%" }}>
              <a href="#features" className="hover:text-darkGrayishBlue">
                Features
              </a>
              <a href="#faq" className="hover:text-darkGrayishBlue">
                FAQ
              </a>
            </div>
            {/* Button */}
            <a
              href="www.google.com"
              className="hidden p-3 px-6 pt-2 text-white bg-btncol rounded-lg baseline hover:bg-btnLight md:block"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default navbar;
