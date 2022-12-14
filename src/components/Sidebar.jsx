import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "../data";
import { HiOutlinePlusCircle } from "react-icons/hi";
// import * as NoteIcon from "react-icons/fa";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";
// import './sidebar.css';

function Sidebar() {
  const { pathname } = useLocation();
  const LINKS = ['/dashboard', '/schedule', '/notes'];
  const currentLinkIndex = LINKS.findIndex(link => link === pathname);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="sidebar-menu  fixed top-0 left-0 right-0 flex flex-col h-screen w-20 justify-between items-center py-5 bg-primary ">
          <ul className="sidebar-menu-items ">
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`h-max w-max p-3 mt-5 rounded-full hover-class cursor-pointer ${(currentLinkIndex + 1) === index ? 'active': ""} `}
                >
                  <NavLink to={item.path} 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}  
                  >
                    <IconContext.Provider value={{}}>
                      {item.icon}
                    </IconContext.Provider>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Add playlist button */}
          <div className="  flex  h-max w-max p-3   rounded-full justify-start items-center p-3 ">
            <NavLink to="/createplaylist">
              <IconContext.Provider value={{ style: { color: "white" } }}>
                <HiOutlinePlusCircle size={22} />
              </IconContext.Provider>
            </NavLink>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Sidebar;
