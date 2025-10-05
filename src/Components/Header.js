import React from "react";
import smLogo from "../Assets/Image/logo_30.png"; // Smaller logo for small screens

function Header() {
  return (
    <header id="header" className="bg-primary w-full flex justify-center">
      <picture>
        {/* Switch logo image based on screen size */}
        {/* <source media="(min-width: 768px)" srcSet={mdLogo} /> */}
        <img
          className="w-auto h-[13vh] lg:h-[15vh]" // Adjust height based on screen size
          src={smLogo} // Fallback to smaller logo on small screens
          alt="Website logo"
        />
      </picture>
    </header>
  );
}

export default Header;
