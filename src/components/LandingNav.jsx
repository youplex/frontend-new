import { NavLink } from "react-router-dom";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import google_logo  from '../assets/google_logo.svg'

const LandingNav = ({ login }) => {
  const { token } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [URLParams] = useSearchParams();
  const redirect = URLParams.get("redirectedFrom") || "";
  // fix -
  const description = URLParams.get("description") || "";
  const page = URLParams.get("page") || "";

  useEffect(() => {
    if (token && pathname === "/" && redirect) {
      let navigateURL = redirect;
      if (description && redirect) navigateURL += `&description=${description}`;
      if (page && redirect) navigateURL += `&page=${page}`;
      // fix -
      navigate(navigateURL || "/dashboard");
    }
  }, [token]);

  return (
    <>
      <nav className="relative container max-w-6xl mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <HiOutlineLightningBolt size={32} />
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#features" className="hover:text-blue-700">
              Features
            </a>
            <a href="#faq" className="hover:text-blue-700">
              FAQ
            </a>
          </div>
          {/* Button */}
          {token ? (
            <NavLink
              to={"/dashboard"}
              className="hidden p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700 md:block "
            >
              Visit Dashboard
            </NavLink>
          ) : (
            <button
              onClick={() => login()}
              className="flex flex-row align-center hidden pt-2 pb-2 pr-5 pl-2 text-white baseline hover:bg-blue-600  md:block google-btn-bg"
            >
              <span className="inline-block bg-white mr-3">
                <img
                  src={"./assets/google_logo.svg"}
                  style={{ transform: "scale(1.9)" }}
                  className="h-6 inline-block"
                  alt=""
                />
              </span>
              <span>Sign in with Google</span>
            </button>
          )}
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top" />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#features" className="hover:text-blue-700">
              Features
            </a>
            <a href="#faq" className="hover:text-blue-700">
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingNav;
