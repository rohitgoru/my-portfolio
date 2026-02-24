"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { navItems } from "./Helper";
import NavLink from "./NavLink";
import { MenuIcon } from "./Icons";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <header className="max-w-[95%] sm:max-w-[450px] mx-auto px-4 py-3 flex justify-center items-center  header-gradient border-[#121631] border rounded-xl mt-[30px] sm:mt-[50px]">
        <ul className="flex items-center gap-5 sm:gap-10">
          {navItems.map((item, index) => (
            <NavLink item={item} key={index} />
          ))}
        </ul>
        {/* <div className="flex items-center gap-4">
          <PrimaryButton>Contact Me</PrimaryButton>
          <button onClick={toggleSidebar} className="block md:hidden">
            <MenuIcon />
          </button>
        </div> */}
      </header>
    </>
  );
};

export default Header;
