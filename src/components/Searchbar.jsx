import React, {useState} from 'react';
import { BsSearch } from "react-icons/bs";

function Searchbar() {

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
        <div className="search container w-4/5 flex py-2  mt-2  md:flex-row md:space-y-0 ">
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="relative">
            <input
              autoComplete="none"
              className="ml-40 pl-4  w-9/12 bg-white rounded border border-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              type="text"
              placeholder=" Search Playlist"
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <AiOutlineSearch className="absolute right-40 " /> */}
            <button className="absolute top-5 right-32 cursor-pointer" onClick={(e)=>setSearchTerm(e.target.value)}>
              <BsSearch size={18} color='#9CA3AF' />
            </button>
          </div>
           
            
           
          
        </form>

        
      </div>
    
    
    </>
  )
}

export default Searchbar