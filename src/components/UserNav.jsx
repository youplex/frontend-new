import { HiOutlineBell, HiOutlineUserCircle } from "react-icons/hi";

const UserNav = ()  => {
    return (
        <nav className="relative container mx-auto p-6 ">
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
            <a href="www.google.com" className="hover:bg-blue-700">
              <HiOutlineBell size={22} />
            </a>
            <a href="www.google.com" className="hover:bg-blue-700">
              <HiOutlineUserCircle size={22} />
            </a>
          </div>
        </div>
      </nav>
    )
}

export default UserNav;