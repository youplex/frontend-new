import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import { useAllNotesQuery } from "../redux/services/noteApi";
import { useSelector } from "react-redux";

function PlaylistNotes() {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: notesData, isLoading, error } = useAllNotesQuery(token);
  return (
    <>
      <Navbar page="Notes" />
      <Sidebar />
      <Notes data={notesData} />
    </>
  );
}

export default PlaylistNotes;