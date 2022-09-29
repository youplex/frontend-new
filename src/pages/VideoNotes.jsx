import React from "react";
import { Loader, Notes, Navbar, Sidebar } from "../components";
import { useAllNotesQuery } from "../redux/services/noteApi";
import { useSelector } from "react-redux";

function PlaylistNotes() {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: notesData, isLoading, error, refetch } = useAllNotesQuery(token);

  return (
    <>
      <Navbar page="Notes" />
      <Sidebar />
      {isLoading && <Loader message="Loading your notes ..." />}
      <Notes data={notesData} refetchNotes={refetch} />
    </>
  );
}

export default PlaylistNotes;