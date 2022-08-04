import {
  HiOutlineBell,
  HiOutlineUserCircle,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="relative container mx-auto p-6 ">
      {/* Flex container */}
      <div className=" flex items-center justify-between">
        {/* Logo */}
        <div>
          <HiOutlineLightningBolt size={22} />
        </div>
        <div>
          <NavLink
            to={"/"}
            className="max-w-md text-lg font-bold text-center md:text-md md:text-left bg-text mr-60"
          >
            YouPlex
          </NavLink>
        </div>
        {/* Menu Items */}
        <div className="space-x-6 md:flex" style={{ marginLeft: "50%" }}>
          <a href="www.google.com" className="hover:text-blue-700">
            <HiOutlineBell size={22} />
          </a>
          <a href="www.google.com" className="hover:text-blue-700">
            <HiOutlineUserCircle size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
