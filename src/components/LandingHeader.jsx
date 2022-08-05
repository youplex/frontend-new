import React from "react";
import hero from "../assets/hero.svg";
// import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2 ">
            <h1 className="max-w-md text-4xl font-bold text-centeri md:text-5xl md:text-left ">
              The smartest way to learn from Youtube !
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Create and Manage your scheduled playlists and prepare notes with
              custom timestamps.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to={"/login"}
                className="p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 ml-96">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingHeader;
