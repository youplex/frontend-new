import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import Playlist from "./Playlist";
import Card from "../components/Card";

function ProgressTracker({ playlistData, isLoading, error }) {
  const labelStyles =
    "px-2 py-1 border-solid border rounded border-black cursor-pointer";
  const activeLabelStyles =
    "bg-btn w-max text-white px-2 py-1 rounded text-bold cursor-pointer";
  const [sortType, setSortType] = useState("date");
  const [searchTerm, setSearchTerm] = useState("");
  const handleCheckBoxChange = (e) => {
    if (sortType === e.target.value) return;
    setSortType((prev) => e.target.value);
  };

  return (
    <>
      <div className="ml-52 my-5 text-xl font-medium">Progress Tracker</div>
      {error && !isLoading ? <h1 className="ml-52">Error Occured, try again</h1> : null}
      {isLoading && !error ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="ml-52 card-wrapper">
          {playlistData?.slice(0, 4)?.map((item, index) => (
            <Card
              key={item._id}
              title={item.title}
              videosCount={item.totalVideos}
              index={index}
              completed={item.completedVideos}
            />
          ))}
        </div>
      )}
      <form className="ml-52 flex justify-between w-32 my-10 text-md">
        <label
          htmlFor="date"
          className={sortType === "date" ? activeLabelStyles : labelStyles}
        >
          Date
        </label>
        <input
          onChange={handleCheckBoxChange}
          type={"checkbox"}
          id="date"
          radioGroup="sort"
          value="date"
          className="hidden"
        />
        <label
          htmlFor="alpha"
          className={sortType === "alpha" ? activeLabelStyles : labelStyles}
        >
          A-Z
        </label>
        <input
          onChange={handleCheckBoxChange}
          type={"checkbox"}
          radioGroup="sort"
          id="alpha"
          value="alpha"
          className="hidden"
        />
      </form>
      <div className="search container w-4/5 flex py-2  mt-4 space-y-8 md:flex-row md:space-y-0 ">
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="relative">
            <input
              autoComplete="none"
              className="ml-52 pl-4 py-1 w-9/12 bg-white rounded border border-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              type="text"
              placeholder=" Search Playlist"
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <AiOutlineSearch className="absolute right-40 " /> */}
          </div>
        </form>
      </div>
      <Playlist header="Playlists" sortType={sortType} searchTerm={searchTerm}/>
    </>
  );
}

export default ProgressTracker;
