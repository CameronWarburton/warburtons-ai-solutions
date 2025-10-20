"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="row relative">
      <Link href="/">
        <Image
          src="/assets/Logo_No_Background.png"
          alt="Warburton's AI Solutions Ltd Logo"
          width={200}
          height={200}
          className="pl-4 md:pl-12 cursor-pointer"
        />
      </Link>
      <button
        className="lg:hidden text-2xl pr-5 text-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      {/* Desktop menu */}
      <div className="hidden lg:flex">
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
            <Link href="/process" className="link__hover-effect cursor-pointer">
              How it Works
            </Link>
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
        className={`flex flex-col items-center lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-20 overflow-hidden transition-all duration-300 ease-in-out
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
          <Link
            href="/process"
            className="link__hover-effect cursor-pointer block"
          >
            How it Works
          </Link>
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
