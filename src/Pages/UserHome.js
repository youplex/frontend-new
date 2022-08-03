import React, {useState}from 'react';
import Sidebar from '../components/_components/Sidebar';
import Navbar from '../components/_components/Navbar';
import SearchBar from '../components/_components/SearchBar';
import VideoPlayer from '../components/_components/VideoPlayer';
import Playlist from '../components/_components/Playlist';


function Home() {
  return (
    <>  
        <Navbar page='Your Playlists' />
        <Sidebar />
        
        {/* <SearchBar placeholder="Quick Search..."/> */}
        {/* <VideoPlayer /> */}
        <Playlist header='Most Played' />
        <Playlist header='All Playlists'/>


    </>
  )
}

export default Home