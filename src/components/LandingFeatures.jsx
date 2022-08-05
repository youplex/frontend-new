import React from "react";
import playlists from "../assets/playlists.svg";
import notification from "../assets/notification.svg";
import notes from "../assets/notes.svg";
import analytics from "../assets/analytics.svg";

function LandingFeatures() {
  return (
    <>
      <section id="features" style={{ overflowX: "hidden" }}>
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row justify-center">
          {/* Feature Image */}
          <div className="flex flex-col space-y-0 md:w-1/2">
            <img src={playlists} style={{ width: "60%" }} alt="" />
          </div>
          {/* Feature Explanation */}
          <div className="flex flex-col space-y-0 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* Heading */}
              <div style={{ marginTop: "8rem" }}>
                <h1 className="text-4xl font-bold mb-4 font-bold md:block bg-text">
                  Combine multiple playlists
                </h1>
                <p className="max-w-sm text-darkGrayishBlue text-lg bg-text">
                  You can add multiple playlists and customise them according to
                  your preferences in one click.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-2 space-y-0 md:space-y-0 md:flex-row">
          {/* Feature Explanation */}
          <div className="flex flex-col space-y-0 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-0 md:space-y-0 md:space-x-6 md:flex-row justify-center">
              {/* Heading */}
              <div style={{ marginTop: "8rem" }}>
                <h1 className="text-4xl font-bold mb-4 font-bold md:block bg-text ">
                  Schedule Notifications
                </h1>
                <p className="max-w-sm text-darkGrayishBlue text-lg bg-text">
                  Get your timings sorted by integrating your playlist with
                  Google Calendar and schedule your learning.
                </p>
              </div>
            </div>
          </div>
          {/* Feature Image */}
          <div className="flex flex-col space-y-0 md:w-1/2 ">
            <img
              src={notification}
              style={{ width: "60%", marginLeft: "8rem" }}
              alt=""
            />
          </div>
        </div>
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-6 space-y-0 md:space-y-0 md:flex-row justify-center">
          {/* Feature Image */}
          <div className="flex flex-col space-y-0 md:w-1/2">
            <img
              src={notes}
              style={{ width: "60%", marginLeft: "4rem" }}
              alt=""
            />
          </div>
          {/* Feature Explanation */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-0 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* Heading */}
              <div style={{ marginTop: "8rem" }}>
                <h1 className="text-4xl font-bold mb-4 font-bold md:block bg-text">
                  Prepare notes on the Go
                </h1>
                <p className="max-w-sm text-darkGrayishBlue text-lg bg-text">
                  Creation of notes based on timestamp was never this easy. Just
                  click and add the notes for that particular time duration.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-2 space-y-0 md:space-y-0 md:flex-row">
          {/* Feature Explanation */}
          <div className="flex flex-col space-y-0 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-0 md:space-y-0 md:space-x-6 md:flex-row justify-center">
              {/* Heading */}
              <div style={{ marginTop: "8rem" }}>
                <h1 className="text-4xl font-bold mb-4 font-bold md:block bg-text">
                  Personalised Analytics
                </h1>
                <p className="max-w-sm text-darkGrayishBlue text-lg bg-text">
                  See which part of the topic you spent most of your time!
                  Maintain learning streaks and share it with your friends.
                </p>
              </div>
            </div>
          </div>
          {/* Feature Image */}
          <div className="flex flex-col space-y-0 md:w-1/2">
            <img
              src={analytics}
              style={{ width: "60%", marginLeft: "6rem" }}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingFeatures;
