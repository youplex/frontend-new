import React from "react";
import hero from "../assets/hero.png";
import { HiChevronDown } from "react-icons/hi";

function header() {
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
              <h1 className="max-w-lg text-5xl font-bold text-center md:text-5xl  md:text-left">
                The smartest way to learn from Youtube !
              </h1>
              <p
                className=" text-lg max-w-sm text-center text-darkGrayishBlue md:text-left"
                style={{ marginTop: 12 }}
              >
                Create your scheduled playlists and maintain notes with custom
                timestamps.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href=" #"
                  className="hidden p-3 px-6 pt-2 text-white bg-btncol rounded-lg baseline hover:bg-btnLight md:block"
                >
                  Get Started
                </a>
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
            className="hover:text-darkGrayishBlue flex justify-center items-center"
            style={{
              marginTop: "-12rem",
            }}
          >
            Scroll Down
          </a>
          <p className="flex justify-center items-center">
            <HiChevronDown />
          </p>
        </section>
      </div>
    </>
  );
}

export default header;
