import React from "react";
import Logo from "../Assets/Image/logo_30.png";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";

function Footer() {
  return (
    <div>
      <footer className="grid md:grid-cols-4 mt-3 bg-primary text-secondary lg:py-6">
        <aside className="px-7 pt-3 flex justify-center items-start md:col-span-2 lg:col-span-1">
          <img src={Logo} alt="Logo" />
        </aside>

        <nav className="flex flex-col leading-8 py-3 px-10 text-sm md:px-3 md:col-span-2 lg:col-span-1 ">
          <div className="footer-title text-base ">Get In Touch</div>
          <NavLink to={""}>Phone: +1 (0) 000 0000 001</NavLink>
          <NavLink to={""}>Email: yourmail@example.com</NavLink>
          <NavLink to={""}>Address:1234 Street Name City, AA 99999</NavLink>
        </nav>
        <nav className="flex flex-col leading-7 p-3 px-10 text-sm md:col-span-2 lg:col-span-1 md:text-center lg:text-left">
          <div className="footer-title  text-base">Pages</div>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about-us"}>About Us</NavLink>
          <NavLink to={"/exhibitions"}>Exhibitions</NavLink>
          <NavLink to={"/artwork-shop"}>ArtShop</NavLink>
        </nav>

        <div className="w-full pt-1 px-10 md:px-3 lg:pr-2 flex flex-col justify-center items-left md:col-span-2 lg:col-span-1">
          <div className="footer-title">News Letter</div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-base  bg-transparent  border-b-2 border-b-whitehite w-full p-2"
            required
          />
          <button className="btn bg-transparent border-white text-white rounded-full mt-4 hover:text-primary w-24">
            Subscribe
          </button>
          <div className="w-44 py-5 flex justify-between bg-primary ">
            <FaFacebookSquare className="cursor-pointer text-white text-3xl" />
            <FaTwitterSquare className=" text-white cursor-pointer  text-3xl" />
            <FaInstagramSquare className=" text-white cursor-pointer text-3xl" />
            <TbBrandYoutubeFilled className=" text-white cursor-pointer text-3xl" />
          </div>
        </div>
      </footer>
      <hr className="border-gray-600" />
      <div className="text-center w-full bg-primary text-secondary text-sm py-2">
        © Copyright 2024 Braille - All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
