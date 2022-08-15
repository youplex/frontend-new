import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import Playlist from "./Playlist";
import Card from '../components/Card';


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
        <div className="ml-52 card-wrapper"> 
              {playlistData?.slice(0,4)?.map((item, index) => (
                <Card key={item._id} title={item.title} videosCount={item.totalVideos} index={index} />
              ))}
        </div>
        )
      }

      <Btn date="Date" sort="A-Z" />
      <Playlist header="Playlist Order" {...{playlistData, isLoading}} />

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
