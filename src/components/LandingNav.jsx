import { NavLink } from "react-router-dom";
import { HiOutlineLightningBolt } from "react-icons/hi";

const LandingNav = () => {
  return (
    <>
      <div className="container">
        {/* Navbar */}
        <nav className="relative container mx-auto p-6">
          {/* Flex container */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
              <HiOutlineLightningBolt size={22} />
            </div>
            <div className="pt-2">
              <h1 className="max-w-md text-lg font-bold text-center md:text-md md:text-left bg-text mr-60">
                YouPlex
              </h1>
            </div>
            {/* Menu Items */}
            <div className="space-x-6 md:flex ml-80 ">
              <a href="#features" className="hover:text-blue-700">
                Features
              </a>
              <a href="#faq" className="hover:text-blue-700">
                FAQ
              </a>
            </div>
            {/* Button */}
            <NavLink
              to={"/login"}
              className="hidden p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700 md:block"
            >
              Get Started
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LandingNav;
