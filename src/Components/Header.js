import React from "react";
import mdLogo from "../Assets/Images/logo_50.png";
import smLogo from "../Assets/Images/logo_30.png";

import Navbar from "./Navbar";
function Header() {
  return (
    <>
      <div
        id="header"
        className="bg-primary w-full h-36 flex justify-center ">
        <picture>
          {/* <source media="(max-width: 425px)" srcSet={smLogo} /> */}
          <img className="w-full " src={smLogo} alt="logo" />
        </picture>
      </div>
      <Navbar/>
    </>
  );
}

export default Header;
