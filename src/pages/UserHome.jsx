import { Navbar, Playlist, Sidebar } from "../components";
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
