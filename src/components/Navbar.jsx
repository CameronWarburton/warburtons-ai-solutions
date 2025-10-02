"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="row relative">
      <Image
        src="/assets/Logo_No_Background.png"
        alt="Warburton's AI Solutions Ltd Logo"
        width={200}
        height={200}
        className="pl-4 md:pl-12"
      />
      <button
        className="md:hidden text-2xl pr-5 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex">
        <ul className="flex space-x-6 items-center">
          <li className="nav__link">
            <span
              onClick={() => scrollToSection("services")}
              className="link__hover-effect cursor-pointer"
            >
              Services
            </span>
          </li>
          <li className="nav__link">
            <span
              onClick={() => scrollToSection("about")}
              className="link__hover-effect cursor-pointer"
            >
              About Us
            </span>
          </li>
          <li className="nav__link">
            <button
              className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-cyan-500 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
      {/* Mobile menu with smooth height transition */}
      <ul
        className={`flex flex-col items-center md:hidden absolute top-full left-0 w-full bg-white shadow-md z-20 overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-screen py-2" : "max-h-0 py-0"}
        `}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <li className="nav__link py-1 px-3 w-full flex justify-center">
          <span
            onClick={() => scrollToSection("services")}
            className="link__hover-effect cursor-pointer block"
          >
            Services
          </span>
        </li>
        <li className="nav__link py-1 px-3 w-full flex justify-center">
          <span
            onClick={() => scrollToSection("about")}
            className="link__hover-effect cursor-pointer block"
          >
            About Us
          </span>
        </li>
        <li className="nav__link py-1 px-3 w-full flex justify-center">
          <button
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-cyan-500 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
