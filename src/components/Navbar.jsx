"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="row">
      <Image
        src="/assets/Logo_No_Background.png"
        alt="Warburton's AI Solutions Ltd Logo"
        width={200}
        height={200}
        className="nav__logo"
      />
      <ul className="nav__links">
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
            onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
