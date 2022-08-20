import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { Fragment } from "react";
import { convertFromRaw, Editor, EditorState } from 'draft-js';

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
  return (
    <>
    {data?.map((note)=>{
      return(
        <Fragment key={note._id}>
        <section className="text-gray-600 ml-52 body-font overflow-hidden" key={note.id}>
        <Link to="#">
          <Card sx={{ ...styles }}>
            {/* <CardMedia component="img" image={item.thumbnail} alt={item.title} /> */}
            <div className="container flex justify-between px-8 py-2 ">
              <h1 className="font-semibold text-xl">{note.title}</h1>
              <button>
                <IoEllipsisVerticalSharp />
              </button>

              
            </div>
              <div className="flex px-8 pb-4 ">

                <span className="mr-8  font-semibold">{convertSecToHMS(note.timestamp)}</span>
                <div className="readonly-editor" >
                  <Editor 
                    editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(note.content)))} 
                    readOnly={true}
                  />
                </div>
              </div>
          </Card>
        </Link>
      </section>
        </Fragment>
      )
    })}
      
    </>
  ); 
}

export default Notes;
