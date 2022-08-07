import React from "react";
import { useSelector }  from "react-redux";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Navbar } from "../components";
import {Sidebar} from '../components';
import {Playlist} from '../components';
import {AiOutlineSearch} from 'react-icons/ai';




const SearchPlaylist = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    return (
       
        <>  
            <Sidebar />
            <Navbar page="Search Playlist" />

            <div className="search container w-4/5 flex py-10  mt-4 space-y-8 md:flex-row md:space-y-0 ">
                <form action="#" className="w-full">
                    <div className="relative" >
                    <input className="ml-52" type="text" placeholder=" Search Courses" name="search" />
                    {/* <AiOutlineSearch className="absolute right-40 " /> */}
                    </div>
                    
                </form>
            </div>

            <Playlist />
            <Playlist />
        </>
    );
}

export default SearchPlaylist;
