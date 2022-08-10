import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PlaylistData } from '../data';
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const styles = {
  cardcontent: {
    padding: 0,
    "$:last-child": {
      paddingBottom: 0,
    },
  },
};
function Playlist({ header }) {
  return (
    <>
      <div className="ml-52 my-5 text-xl font-medium">{header}</div>
      <div className="ml-52 min-w-max h-min grid grid-cols-2 gap-2 mb-4 ">
        {PlaylistData.map((item, index) => {
          return (
            <Link key={index} to="#">
              <Card sx={{ width: 400 }}>
                <CardMedia component="img" image={item.img} alt={item.title} />
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
        })}
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
