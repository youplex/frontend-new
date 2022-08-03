import React from "react";
import GeneralNav from './GeneralNav';
import { useLocation } from "react-router-dom";
import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);

  if(pathname === '/login'){
    return  <nav className="relative container mx-auto p-6 ">
        {/* Flex container */}
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <a href="www.google.com">
              <i className="fa-solid fa-bolt" />
            </a>
          </div>
          {/* Menu Items */}
          <div className="space-x-6 md:flex" style={{ marginLeft: "50%" }}>
            <NavLink to={'/'} className="hover:bg-blue-700">
              Back
            </NavLink>
          </div>
        </div>
      </nav>;
  }else if(pathname === '/'){
    return <GeneralNav />
  }else{
    return <UserNav />
  }
}

export default Navbar;
