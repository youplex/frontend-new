
import { Navbar } from "../components";
import {Sidebar} from '../components';
import {Playlist} from '../components';
import React from 'react';
import {Link} from 'react-router-dom';

function SinglePlaylist() {
  return (
    <>
        <Sidebar />
        <Navbar page="Your Playlists" />

        <div className="flex w-4/5 bg-blue-500 ">
            <Playlist   />
            <div className="">
                <h1>Crework BWU</h1>
                <p>This is a playlist related to BWU projects built by <br></br> students of different batches.</p>
                <Link to="#">
                    Schedule
                </Link>
            </div>
        </div>
    
    </>
  )
}

export default SinglePlaylist;