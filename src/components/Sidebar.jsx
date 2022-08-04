import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";

import * as AiIcons from "react-icons/ai";
// import * as NoteIcon from "react-icons/fa";

import { IconContext } from "react-icons";

// import './sidebar.css';

function Sidebar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="sidebar-menu fixed top-0 left-0 right-0 flex flex-col h-screen w-32 justify-between items-center py-5  bg-primary ">
          <ul className="sidebar-menu-items ">
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" h-max w-max p-3 hover:bg-white mt-5  rounded-full "
                >
                  <Link className="" to={item.path}>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Add playlist button */}

          <Link
            className="flex  h-max w-max p-3 hover:bg-white rounded-full justify-start items-center p-3  "
            to="#"
          >
            <AiIcons.AiOutlinePlusSquare />
          </Link>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;