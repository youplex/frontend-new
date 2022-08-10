import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import { Playlist } from "../components";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";

function SinglePlaylist() {
  return (
    <>
      <Sidebar />
      <Navbar page="Your Playlists" />

      <div className=" relative flex  ">
        <div>
          <Playlist />
        </div>
        <div className="absolute right-52 top-4">
          <h1>Crework BWU</h1>
          <p>
            This is a playlist related to BWU projects built by <br></br>{" "}
            students of different batches.
          </p>
          <div className=" bg-primary w-max px-4 py-1 text-white rounded-md text-sm mt-4">
            <Link to="#">Schedule</Link>
          </div>
        </div>
      </div>
      <div className="ml-52 my-5 text-xl font-medium">Videos</div>
      <div className="ml-52 ">
        <Card style={{ backgroundColor: "#F6F7FF" }} sx={{ width: 1000 }}>
          <CardContent>
            <div className="flex mb-2 justify-between center-align">
              <h2>1. </h2>
              <p>
                The logic is fairly simple! You need to open Dribble, get
                inspiration and start drawing. Also this for demo only{" "}
              </p>
              <h2>10:45</h2>
            </div>

            <div className="flex mb-2 justify-between center-align">
              <h2>2. </h2>
              <p>
                The logic is fairly simple! You need to open Dribble, get
                inspiration and start drawing. Also this for demo only{" "}
              </p>
              <h2>10:45</h2>
            </div>

            <div className="flex mb-2 justify-between center-align">
              <h2>3. </h2>
              <p>
                The logic is fairly simple! You need to open Dribble, get
                inspiration and start drawing. Also this for demo only{" "}
              </p>
              <h2>10:45</h2>
            </div>

            <div className="flex  justify-between center-align">
              <h2>4. </h2>
              <p>
                The logic is fairly simple! You need to open Dribble, get
                inspiration and start drawing. Also this for demo only{" "}
              </p>
              <h2>10:45</h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SinglePlaylist;
