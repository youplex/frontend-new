import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io5";

function SearchBar({placeholder,data}) {
  return (
    <div className=' search  w-4/5 ml-52 mt-8 bg-sidebar'>
        <p className='text-5xl text-extrabold'>Your Playlists</p>

        <div className='  w-4/5 mt-4 relative flex items-center'>
          <input className=' w-full focus:outline-none focus:border-sidebar focus:ring-1 rounded-sm outline-1 border-solid border-2 border-indigo-600 pl-2 py-1 text-sm 'type='text' placeholder={placeholder} />
          <div className='searchIcon text-2xl  absolute right-0 '><IoIcons.IoSearchCircleOutline /> </div>
        </div>

        
    </div>
  )
}

export default SearchBar;