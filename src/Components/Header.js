import React from "react";
// import mdLogo from "../Assets/Image/logo_50.png";
import smLogo from "../Assets/Image/logo_30.png";

function Header() {
  return (
    <>
    
      <div id="header"
        className="bg-primary w-full h-[17vh] flex justify-center ">
        <picture>
          {/* <source media="(max-width: 425px)" srcSet={smLogo} /> */}
          <img className="w-full " src={smLogo} alt="logo" />
        </picture>
      </div>   
    </>
  );
}

export default Header;
