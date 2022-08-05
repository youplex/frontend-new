import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <footer className="bg-footer">
        {/* Flex Container */}
        <div className="container flex px-6 py-4 mx-auto space-y-4  md:space-y-0 justify-center items-center text-white">
          <p>Crework ❤️</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
