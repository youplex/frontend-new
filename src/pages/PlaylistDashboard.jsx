import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { HiOutlinePlusCircle } from "react-icons/hi";

function PlaylistDashboard() {
  return (
    <>
      <Navbar page="Youplex" />
      <Sidebar />
      <div className="container flex flex-col-reverse justify-center items-center px-6 py-10 mx-auto mt-4 space-y-8 md:flex-row md:space-y-0 text-center ax-w-lg text-4xl font-bold text-center md:text-3xl mt-20">
        <h1>Let’s create your first playlist!</h1>
      </div>
      <div className="search container flex justify-center items-center px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <form action="#">
          <input type="text" placeholder=" Search Courses" name="search" />
          <button style={{ fontSize: 24, marginLeft: "2rem" }}>
            <HiOutlinePlusCircle />
          </button>
        </form>
      </div>
      <div className="flex justify-center md:justify-center">
        <a
          href=" #"
          className="hidden p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700 md:block"
        >
          Generate Playlist
        </a>
      </div>
    </>
  );
}

export default PlaylistDashboard;
