import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PlaylistData } from '../data';
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePlaylistQuery } from "../redux/services/playlistApi";

const styles = {
  cardcontent: {
    padding: 0,
    "$:last-child": {
      paddingBottom: 0,
    },
  },
};
function Playlist({ header }) {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: playlistData, isLoading } = usePlaylistQuery(token);
  return (
    <>
      <div className="ml-52 my-5 text-xl font-medium">{header}</div>
      <div className="ml-52 min-w-max h-min grid grid-cols-2 gap-2 mb-4 ">
        {isLoading ? <h1>Loading ...</h1>  :
      
        playlistData?.map((item, index) => {
            return (
              <Link key={item._id} to="#">
                <Card sx={{ width: 400 }}>
                  <CardMedia component="img" image={item.thumbnail} alt={item.title} />
                  <CardContent style={{ padding: 2 }}>
                    <Typography variant="body1" color="text.secondary">
                      <span
                        style={{ fontSize: 14 }}
                        className="flex justify-center"
                      >
                        {item.title}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            );
          })
        }
      </div>
      <Sidebar />
    </>
  );
}

// const Playlist = () => {
//   return (
//     <div className='ml-52'>
//         <Card />
//     </div>
//   )
// }

export default Playlist;
