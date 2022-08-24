import Card from "@mui/material/Card";

// import { IoEllipsisVerticalSharp } from "react-icons/io5";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import React,{ Fragment,useState,useRef,useEffect} from "react";

import { convertFromRaw, Editor, EditorState } from 'draft-js';
// import { NotesData } from "../data";


const styles = {
  width: "1125px",
  backgroundColor: "#ededed",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  marginTop:'20px',
  position: 'relative',  
  height:'max-content'
  
};

export const convertSecToHMS = (time_in_seconds) => {

  let remainingSeconds = time_in_seconds; // initialize with total time
  const hours = Math.floor(remainingSeconds / (60 * 60));
  remainingSeconds = time_in_seconds % 3600; 
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formatTime = (t) => t.toString().padStart(2,0);

  const out = [];
  if(hours > 0) out.push(formatTime(hours));
  out.push(formatTime(minutes));
  out.push(formatTime(seconds));

  return out.join(':');
}

function Notes({ data = [] }) {

  const handleDelete=()=>{
    console.log("something")
  }




  return (
    <>
    {data?.map((note)=>{
      return(
        <Fragment key={note._id}>
        <section className="text-gray-600 ml-40 body-font overflow-hidden " key={note.id}>
        
        <Card sx={{ ...styles }}>
            {/* <CardMedia component="img" image={item.thumbnail} alt={item.title} /> */}
            <div  className="container  flex justify-between px-2 py-2 ">
              <h1 className="font-bold text-xl ml-6">{note.title}</h1>

              {/* dropdown delete */}
              
                <button  onClick={handleDelete} className=" w-max h-max px-2 text-sm text-slate-100 bg-red-600 hover:bg-red-400 ease-in duration-300 rounded flex justify-center items-center"  >

              
                  Delete
                  

              
                
                </button>
              
            
            </div>
              <div className="flex px-8 pb-4 ">
                <span className="mr-8 font-semibold">{convertSecToHMS(note.timestamp)}</span>
                <div className="readonly-editor" >
                  <Editor 
                    editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(note.content)))} 
                    readOnly={true}
                  />
                </div>
              </div>
          </Card>
        
      </section>
        </Fragment>
      )
    })}
      
    </>
  ); 
}

//dropdown items.

function DropdownItem(props){
  return(
    <li className="list-none dropdown-item">
      <button >{props.text}</button>

    </li>
  )
}
export default Notes;
