import { Navbar } from "../components";
import { Sidebar } from "../components";
import { Playlist } from "../components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const SearchPlaylist = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Sidebar />
      <Navbar page="Search Playlist" />

      <div className="search container w-4/5 flex py-10  mt-4 space-y-8 md:flex-row md:space-y-0 ">
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="relative">
            <input
              className="ml-52 pl-2 py-1 border-solid border-2 border-black w-9/12 rounded-lg	"
              type="text"
              placeholder=" Search Playlist"
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <AiOutlineSearch className="absolute right-40 " /> */}
          </div>
        </form>
      </div>
      <Playlist searchTerm={searchTerm} />
    </>
  );
};

export default SearchPlaylist;
