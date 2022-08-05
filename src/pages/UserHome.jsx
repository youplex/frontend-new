import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Playlist from "../components/Playlist";

function UserHome() {
  return (
    <>
      <Navbar page="Your Playlists" />
      <Sidebar />
      {/* <SearchBar placeholder="Quick Search..."/> */}
      {/* <VideoPlayer /> */}
      <Playlist header="Most Played" />
      <Playlist header="All Playlists" />
    </>
  );
}

export default UserHome;
