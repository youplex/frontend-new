import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import { BsSearch } from "react-icons/bs";
import Playlist from "./Playlist";
import Card from "../components/Card";

function ProgressTracker({ playlistData, isLoading, error }) {
  const labelStyles =
    "px-2 py-1 mr-4 border-solid border rounded border-black cursor-pointer";
  const activeLabelStyles =
    "bg-btn w-max mr-4 text-white px-2 py-1  rounded text-bold cursor-pointer";
  const [sortType, setSortType] = useState("date");
  const [searchTerm, setSearchTerm] = useState("");
  const handleCheckBoxChange = (e) => {
    if (sortType === e.target.value) return;
    setSortType((prev) => e.target.value);
  };

  return (
    <>
      <div className="ml-40 my-2 text-xl font-medium">Progress Tracker</div>
      {error && !isLoading ? (
        <h1 className="ml-40">Error Occured, try again</h1>
      ) : null}
      {isLoading && !error ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="ml-40 card-wrapper">
          {playlistData?.slice(0, 4)?.map((item, index) => (
            <Card
              sx={{ marginBottm: 0 }}
              key={item._id}
              title={item.title}
              videosCount={item.totalVideos}
              index={index}
              completed={item.completedVideos}
            />
            ))}
        </div>
      )}

      <div className="ml-40 my-2 text-xl font-medium ">Playlists</div>
      
      <div className="search container w-4/5 flex py-2  mt-2  md:flex-row md:space-y-0 ">
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="relative">
            <input
              className="ml-40 pl-4  w-9/12 bg-white rounded border border-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              type="text"
              placeholder=" Search Playlist"
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <AiOutlineSearch className="absolute right-40 " /> */}
            <button
              className="absolute top-5 right-40 cursor-pointer"
              onClick={(e) => setSearchTerm(e.target.value)}
            >
              <BsSearch size={18} color="#9CA3AF" />
            </button>
          </div>
        </form>
      </div>

      <form className="ml-40 flex justify-between w-max mt-4 text-md">
        <label
          htmlFor="alpha"
          className={sortType === "alpha" ? activeLabelStyles : labelStyles}
        >
          Sort by A-Z
        </label>
        <input
          onChange={handleCheckBoxChange}
          type={"checkbox"}
          radioGroup="sort"
          id="alpha"
          value="alpha"
          className="hidden"
        />

        <label
          htmlFor="date"
          className={sortType === "date" ? activeLabelStyles : labelStyles}
        >
          Sort by Date
        </label>
        <input
          onChange={handleCheckBoxChange}
          type={"checkbox"}
          id="date"
          radioGroup="sort"
          value="date"
          className="hidden"
        />
      </form>
      <Playlist
        header=""
        sortType={sortType}
        searchTerm={searchTerm}
      />
    </>
  );
}

export default ProgressTracker;
