"use client";

import MainButton from "@/components/ui/buttons/MainButton";
import { useState } from "react";
import HamburgerButton from "../components/ui/buttons/HamburgerButton";
import useScrolled from "../hooks/useScrolled";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const scrolled = useScrolled(150);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const hideNavbar = () => {
    setShowNav(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full py-4 px-4 ${
        scrolled && "bg-[#171717ee] shadow-lg shadow-black"
      }`}
    >
      <nav className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
        <a className="z-50 uppercase font-bold text-gradient" href="#">
          Tomás Sorgetti
        </a>
        <HamburgerButton handleClick={toggleNavbar} />
        <ul
          className={`bg-black h-[100vh] w-full absolute top-0 left-0 flex flex-col items-center justify-center gap-6 transform transition-transform duration-500 ease-in-out ${
            showNav ? "translate-x-0" : "translate-x-[100%]"
          } lg:relative lg:w-auto lg:bg-transparent lg:h-auto lg:flex-row lg:gap-8 lg:translate-x-0 `}
        >
          <li onClick={hideNavbar} className="flex items-center">
            <a
              className="uppercase font-medium hover:text-pink px-4 py-2"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li onClick={hideNavbar} className="flex items-center">
            <a
              className="uppercase font-medium hover:text-pink px-4 py-2"
              href="#about"
            >
              About me
            </a>
          </li>
          <li onClick={hideNavbar} className="flex items-center">
            <a
              className="uppercase font-medium hover:text-pink px-4 py-2"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li onClick={hideNavbar}>
            <MainButton href="#contact" target="_self">
              Get in Touch
            </MainButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
