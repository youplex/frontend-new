import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Playlist from "./Playlist";


function ProgressTracker({playlistData, isLoading}) {
  const labelStyles = "px-2 py-1 border-solid border rounded border-black cursor-pointer";
  const activeLabelStyles = "bg-btn w-max text-white py-px px-2 py-1 rounded text-bold cursor-pointer";
  const [sortType, setSortType] = useState('date');
  const handleCheckBoxChange = (e) => {
    if(sortType === e.target.value) return;
    setSortType((prev) => e.target.value);
  }

  return (
    <>
      <div className="ml-52 my-5 text-xl font-medium">Progress Tracker</div>
      {isLoading ? <h1>Loading ...</h1> : 
        (
        <div className="ml-52 ">
          <Card style={{ backgroundColor: "#F6F7FF" }} sx={{ width: 1000 }}>
            <CardContent>
              {playlistData?.map((item, index) => {
                // const percent = Math.floor(item.percentage / 4);
                // console.log(percent);
                return (
                  <div
                    key={item._id}
                    className="flex flex-row w-full mt-2  justify-between items-center"
                  >
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                    <div className="w-80 h-0.5 bg-slate-700">
                      <div
                        className={`w-${Math.floor(
                          item.percentage / 8
                        )} h-full bg-progress`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
        )
      }
      <form className="ml-52 flex justify-between w-32 my-5 text-md" >
        <label
          htmlFor="date"
          className={ sortType === 'date' ? activeLabelStyles :  labelStyles }
        >
          Date
        </label>
        <input onChange={handleCheckBoxChange} type={'checkbox'} id='date' radioGroup='sort' value='date' className="hidden" />
        <label 
          htmlFor="alpha" 
          className={sortType === 'alpha' ? activeLabelStyles :  labelStyles}
        >
          A-Z
        </label>
        <input onChange={handleCheckBoxChange} type={'checkbox'} radioGroup='sort' id='alpha' value='alpha' className="hidden" />
    </form>
      <Playlist header="Playlist Order" sortType={sortType} />
    </>
  );
}

export default ProgressTracker;
