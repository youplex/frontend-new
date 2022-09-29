import React from "react";
import { useLocation, Link } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  if (pathname !== "/" && pathname !== '/privacy') {
    return null;
  }

  return (
    <>
      <footer className="bg-footer">
        {/* Flex Container */}
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-4  md:space-y-0 justify-center items-center text-white">
          <p>Made by Team Youplex and Crework ❤️</p>
          <p className="underline py-2">
            <Link to='/privacy'>Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
