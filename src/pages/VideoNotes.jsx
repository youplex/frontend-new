import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";

function PlaylistNotes() {
  return (
    <>
      <Navbar page="Notes" />
      <Sidebar />
      <Notes />
    </>
  );
}

export default PlaylistNotes;