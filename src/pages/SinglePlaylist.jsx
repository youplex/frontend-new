import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useVideosQuery } from "../redux/services/playlistApi";
import { useSelector } from "react-redux";

function SinglePlaylist() {
  const { token } = useSelector((state) => ({...state.auth}));
  const { playlistId } = useParams();
  const { data: {playlist = {}, videos = []} = {}} = useVideosQuery({token, playlistId});

  return (
    <>
      <Sidebar />
      <Navbar page="Your Playlists" />

      <div className="ml-52 flex">
        <div>
        <Card sx={{ width: 480 }}>
          <CardMedia component="img" image={playlist.thumbnail} alt={playlist.title} />
        </Card>
        </div>
        <div className="absolute right-52 top-14 w-80">
          <h1>{playlist.title}</h1>
          <p>
           {playlist.description || 'No description'}
          </p>
          <div className=" bg-primary w-max px-4 py-1 text-white rounded-md text-sm mt-4">
            <Link to="#">Schedule</Link>
          </div>
        </div>
      </div>
      <div className="ml-52 my-5 text-xl font-medium">Videos</div>
      <div className="ml-52 ">
        {videos?.map((item, index) => {
          return (
            <Card key={item._id}  style={{ backgroundColor: "#F6F7FF", marginBottom: '5px' }} sx={{ width: 960 }}>
            <CardContent style={{ padding: '10px' }}>
            <div className="flex justify-between center-align">
                <h2 className="justify-self-start">{index + 1}. </h2>
                <Link to={`/video/${item._id}?playlist=${playlist._id}`}>
                  <p  className="justify-self-start" >
                    {item.title.length > 120 ? `${item.title.substring(0, 117)}...` : item.title}{" "}
                  </p>
                </Link>
                <h2 className="justify-self-end">--:--</h2>
            </div>
            </CardContent>
            </Card>
          )
        })}
      </div>
    </>
  );
}
export default SinglePlaylist;
