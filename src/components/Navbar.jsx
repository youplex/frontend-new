import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBell, HiOutlineUserCircle } from "react-icons/hi";

function Navbar({ page }) {
  return (
    <div className=" flex justify-between ml-52 py-6 h-16 w-4/5  ">
      <h1 className="text-bold font-bold text-2xl">{page}</h1>
      <div className="flex list-none px-2">
        <li className="px-4">
          <Link to="#">
            <HiOutlineBell size={22} />
          </Link>
        </li>
        <li className=" px-4">
          <Link to="/dashboard">
            <HiOutlineUserCircle size={22} />
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
