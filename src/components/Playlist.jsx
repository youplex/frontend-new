import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
// import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePlaylistQuery } from "../redux/services/playlistApi";
import { useMemo } from "react";

const styles={
  width: 400,height:350, boxShadow:  '2px 2px 4px rgba(161, 89, 101, 0.25)' 
}
function Playlist({ header, sortType = "", searchTerm = "" }) {
  
  const { token } = useSelector((state) => ({ ...state.auth }));
  const { data: playlistData = [], isLoading } = usePlaylistQuery(token);

  const filteredData = useMemo(() => {
    let filteredProducts = playlistData.slice();

    if (sortType === "date") {
      filteredProducts.sort((a, b) => {
        const date1 = new Date(a.createdAt).valueOf();
        const date2 = new Date(b.createdAt).valueOf();
        if (date1 < date2) return 1;
        if (date1 > date2) return -1;
        return 0;
      });
    }
    if (sortType === "alpha") {
      filteredProducts.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    }
    if (searchTerm.trim()) {
      filteredProducts = filteredProducts.filter((item) =>
        item?.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
      );
    }
    return filteredProducts;
  }, [sortType, playlistData, searchTerm]);

  return (
    <>
      <div className="ml-40 my-5 text-xl font-medium ">{header}</div>

      <div className>
          {/* <Searchbar /> */}
      </div>
      <div className=" ml-40  h-min grid grid-cols-3 w-max grid-flow-row gap-3  mb-10 ">
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          filteredData?.map((item, index) => {
            return (
              <Link key={item._id} to={`/playlist/${item._id}`}>
                <Card sx={{...styles}}>
                  <CardMedia
                    component="img"
                    image={item.thumbnail}
                    alt={item.title}
                  />
                  <CardContent style={{ paddingTop: 10 }}>
                    <Typography variant="body1" color="text.secondary">
                      <strong
                        style={{ fontSize: 20 }}
                        className="flex justify-center"
                      >
                        {item?.title?.length > 45
                          ? `${item?.title?.substring(0, 43)}...`
                          : item?.title}
                      </strong>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            );
          })
        )}
        {(filteredData?.length && !isLoading) === 0 && <h1>No results</h1>}
      </div>

      
      <Sidebar />
    </>
  );
}

export default Playlist;
