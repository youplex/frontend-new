import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
// import * as AiIcons from "react-icons/ai";


 export const SidebarData = [
  {title:'Logo',
    path: '/',
    icon:<BsIcons.BsFillLightningChargeFill />,
    cName:'sidebar-text'
 },
 
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiOutlineHome />,
      cName: 'sidebar-text'
    },
    {
      title: 'Search',
      path: '/',
      icon: <AiIcons.AiOutlineSearch />,
      cName: 'sidebar-text'
    },
    {
      title: 'View Schedule',
      path: '/schedule',
      icon: <AiIcons.AiOutlineCalendar />,
      cName: 'sidebar-text'
    },
    {
      title: 'Notes',
      path: '/notes',
      icon: <AiIcons.AiOutlineFile />,
      cName: 'sidebar-text'
    }
   
]