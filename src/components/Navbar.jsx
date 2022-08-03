import React from "react";
import GeneralNav from "./GeneralNav";
import { useLocation } from "react-router-dom";
import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";
import { HiOutlineLightningBolt } from "react-icons/hi";

function Navbar() {
  const { pathname } = useLocation();

  if (pathname === "/login") {
    return (
      <nav className="relative container mx-auto p-6 ">
        {/* Flex container */}
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <HiOutlineLightningBolt />
          </div>
          {/* Menu Items */}
          <div className="space-x-6 md:flex" style={{ marginLeft: "50%" }}>
            <NavLink to={"/"} className="hover:text-blue-700">
              Back
            </NavLink>
          </div>
        </div>
      </nav>
    );
  } else if (pathname === "/") {
    return <GeneralNav />;
  } else {
    return <UserNav />;
  }
}

export default Navbar;
