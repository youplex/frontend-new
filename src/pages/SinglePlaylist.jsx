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
  const { token } = useSelector((state) => ({ ...state.auth }));
  const { playlistId } = useParams();
  const { data: { playlist = {}, videos = [] } = {} } = useVideosQuery({
    token,
    playlistId,
  });

  return (
    <>
      <Sidebar />
      <Navbar page="Your Playlist" />

      <div className="ml-52 mt-4 flex   w-4/5">
        {/* <div>
          <Card sx={{ width: '400px'  }}>
            <CardMedia
              component="img"
              image={playlist?.thumbnail}
              alt={playlist?.title}
            />
          </Card>
        </div> */}

        <div className="rounded-lg  mr-8 ">
          <img alt="content" className=" h-full " src={playlist?.thumbnail} />

          {/* <div class="bg-cover bg-center " style="background-image: url(`${playlist?.thumbnail}`)"></div> */}
        </div>

        <div className="top-20 w-3/5  ">
          <h1 className="font-semibold text-2xl leading-10">
            {playlist?.title}
          </h1>
          <p className="mt-4 whitespace-normal break-all ">
            {playlist?.description || "No description"}
          </p>
          <div className=" bg-primary w-max px-4 py-2 text-white rounded-md text-md mt-8">
            <Link
              to={`/schedule?summary=${playlist?.title}&description=Watch%20Playlist%20Link:%20${window.location.href}`}
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-52 my-5 mt-10 text-xl font-medium">
        Videos in this playlist
      </div>
      <div className="ml-52 mb-10">
        {videos?.map((item, index) => {
          return (
            <Card
              key={item._id}
              style={{ backgroundColor: "#F6F7FF", marginBottom: "10px" }}
              sx={{ width: 1125 }}
            >
              <CardContent style={{ padding: "10px" }}>
                <div className="flex justify-center center-align p-2">
                  <h2 className="justify-self-start mr-2">{index + 1}. </h2>
                  <Link to={`/video/${item._id}?playlist=${playlist._id}`}>
                    <p className="justify-self-start">
                      {item.title.length > 120
                        ? `${item.title.substring(0, 117)}...`
                        : item.title}{" "}
                    </p>
                  </Link>
                  {/* <h2 className="justify-end">--:--</h2> */}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export default SinglePlaylist;
