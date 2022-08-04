import React from "react";
import hero from "../assets/hero.png";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <>
      <div className="container">
        <section id="hero">
          {/* Flex Container */}
          <div
            className=" container h-screen flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-12 md:space-y-12
    md:flex-row "
            style={{ width: "80%" }}
          >
            {/* Left item */}
            <div className=" flex flex-col mb-40 space-y-12 md:w-1/2 ">
              <h1 className="max-w-lg text-5xl font-bold text-center md:text-5xl bg-text  md:text-left">
                The smartest way to learn from Youtube !
              </h1>
              <p
                className=" text-lg max-w-sm text-center bg-text md:text-left"
                style={{ marginTop: 12 }}
              >
                Create your scheduled playlists and maintain notes with custom
                timestamps.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  to={"/login"}
                  className="hidden p-3 px-6 pt-2 text-white bg-btn hover:bg-blue-700  rounded-lg baseline md:block"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={hero}
                style={{
                  marginLeft: "16rem",
                  width: "60%",
                  marginTop: "-16rem",
                }}
                alt=""
              />
            </div>
          </div>
          <a
            href="#features"
            className="hover:text-blue-700 flex justify-center items-center bg-text"
            style={{
              marginTop: "-12rem",
            }}
          >
            Scroll Down
          </a>
          <p className="flex justify-center items-center bg-text">
            <HiChevronDown />
          </p>
        </section>
      </div>
    </>
  );
}

export default LandingHeader;