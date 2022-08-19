
import Card from "@mui/material/Card";

import { Link } from "react-router-dom";

import { IoEllipsisVerticalSharp } from "react-icons/io5";

import { NotesData } from "../data";


const styles = {
  width: "1125px",
  backgroundColor: "#EEEFF6",
  boxShadow:
    " 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
    marginTop:'20px',
    
  height:'max-content'
};
function Notes() {
  return (
    <>
    {NotesData.map((note,index)=>{
      return(
        <>
        <section className="text-gray-600 ml-52 body-font overflow-hidden" key={note.id}>
        <Link to="#">
          <Card sx={{ ...styles }}>
            {/* <CardMedia component="img" image={item.thumbnail} alt={item.title} /> */}
            <div className="container flex justify-between px-8 py-4 ">
              <h1 className="font-semibold text-xl">{note.title}</h1>
              <button>
                <IoEllipsisVerticalSharp />
              </button>

              
            </div>
              <div className="flex px-8 pb-4 ">

                <span className="mr-8  font-semibold">{note.timestamp}</span>
                <p>{note.content}</p>
                
              </div>
          </Card>
        </Link>
      </section>
        </>
      )
    })}
      
    </>
  ); 
}

export default Notes;
