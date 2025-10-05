import React from "react";
import {
  FaFacebookSquare,
  FaHeart,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function SocialBar() {
  return (
    <div className="w-full hidden md:flex justify-end  bg-primary ">
      <div className="w-64 h-9 flex justify-around items-center bg-black">
        <NavLink>
          <FaFacebookSquare className="text-xl cursor-pointer text-white lg:text-2xl" />
        </NavLink>
        <NavLink>
          <FaTwitterSquare className="text-xl text-white cursor-pointer  lg:text-2xl" />
        </NavLink>
        <NavLink to={"https://www.instagram.com/accounts/login/"}>
          <FaInstagramSquare className="text-xl text-white cursor-pointer  lg:text-2xl" />
        </NavLink>

        <NavLink to={"/wishlist"}>
          <FaHeart className="text-xl text-white cursor-pointer  lg:text-2xl" />
        </NavLink>

        <NavLink to={"/cart"}>
          <FiShoppingBag className="text-xl text-white cursor-pointer  lg:text-2xl" />
        </NavLink>
      </div>
    </div>
  );
}

export default SocialBar;
