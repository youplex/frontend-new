import { DateTime,Navbar,Sidebar } from "../components";

import React from 'react'


export default function Scheduling() {
  return (
    <>
    <Navbar page='Schedule' />
    <Sidebar />
    <div className="ml-52 relative ">
        
        <DateTime
            
        
        />
        
        <button className="bg-primary  px-2 py-1 absolute top-80 rounded text-white" >Schedule</button>
    </div>
    </>
  )
}
