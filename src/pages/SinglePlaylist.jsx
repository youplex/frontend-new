
import { Navbar } from "../components";
import {Sidebar} from '../components';
import {Playlist} from '../components';
import React from 'react';
import {Link} from 'react-router-dom';
import  Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function SinglePlaylist() {
  return (
    <>
        <Sidebar />
        <Navbar page="Your Playlists" />

        <div className=" relative flex bg-blue-500 ">
          <div>

            <Playlist   />
          </div>
            <div className="absolute right-52 top-4">
                <h1>Crework BWU</h1>
                <p>This is a playlist related to BWU projects built by <br></br> students of different batches.</p>
                <div className="bg-primary w-max px-4 py-1 text-white rounded-md text-sm mt-4">
                <Link className="" to="https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1">
                    Schedule
                </Link>

               

                </div>
            </div>
        </div>
      <div>Hello</div>
        <Card sx={{width:1000}}>
          <CardContent>

          </CardContent>
        </Card>
    </>
  )
}

export default SinglePlaylist;