import React from "react";
import { useLocation } from "react-router-dom";
import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";
import { HiOutlineLightningBolt } from "react-icons/hi";

function LoginNav({}) {
  const { pathname } = useLocation();

  if (pathname === "/dashboard") {
    return null;
  }

  if (pathname === "/login") {
    return (
      <nav className="relative container mx-auto p-6 ">
        {/* Flex container */}
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <div>
            <HiOutlineLightningBolt size={32} />
          </div>

          {/* Menu Items */}
          <div className="space-x-6 md:flex" style={{ marginLeft: "50%" }}>
            <NavLink to={"/"} className="hover:text-blue-700">
              YouPlex
            </NavLink>
          </div>
        </div>
      </nav>
    );
  } else if (pathname === "/") {
    return <LoginNav />;
  } else {
    return <UserNav />;
  }
}

export default LoginNav;
