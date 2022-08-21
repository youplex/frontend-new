import Card from "@mui/material/Card";

import { IoEllipsisVerticalSharp } from "react-icons/io5";

import React,{ Fragment,useState,useRef,useEffect} from "react";

import { convertFromRaw, Editor, EditorState } from 'draft-js';
// import { NotesData } from "../data";


const styles = {
  width: "1125px",
  backgroundColor: "#ededed",
  boxShadow:
    " 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
    marginTop:'20px',
    
  height:'max-content'
  
};



const convertSecToHMS = (time_in_seconds) => {
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

  //ellipsis dropdown menu open/close.
  const [open,setOpen]=useState(false);
  let menuRef=useRef();

useEffect(()=>{
  let handler = (e)=>{
    if(!menuRef.current.contains(e.target)){
      setOpen(false);
      console.log(menuRef.current);
    }      
  };

  document.addEventListener("mousedown", handler);
  

  return() =>{
    document.removeEventListener("mousedown", handler);
  }

}
)

  return (
    <>
    {data?.map((note)=>{
      return(
        <Fragment key={note._id}>
        <section className="text-gray-600 ml-52 body-font overflow-hidden " key={note.id}>
        
        <Card sx={{ ...styles }}>
            {/* <CardMedia component="img" image={item.thumbnail} alt={item.title} /> */}
            <div ref={menuRef} className="container  flex justify-between px-4 py-2 ">
              <h1 className="font-semibold text-xl">{note.title}</h1>

              
              

                <IoEllipsisVerticalSharp onClick={()=>{setOpen(!open)}} />
              
              <div className={`dropdown-menu ${open?'active':'inactive'}`}>
                <ul>

                <DropdownItem text={"Delete"}/>
                
                </ul>
              </div>
              


              

              
            </div>

              <div className="flex px-8 pb-4 ">

                <span className="mr-8  font-semibold">{convertSecToHMS(note.timestamp)}</span>
                <div className="readonly-editor" >
                  <Editor 
                    editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(note.content)))} 
                    readOnly={true}
                  />
                </div>
                <div>{note.content}</div>
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
