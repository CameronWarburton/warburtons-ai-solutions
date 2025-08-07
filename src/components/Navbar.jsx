import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="row">
      <Link href="/">
        <Image src="/assets/Logo_Light.png" alt="Warburton's AI Solutions Ltd Logo" width={120} height={40} />
      </Link>
      <ul className="nav__links">
        <li className="nav__link">
          <Link href='/'className="link__hover-effect">
            Home
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/movies" className="link__hover-effect">
            Movies
          </Link>
        </li>
        <li className="nav__link">
          <button className="btn">
            Contact
          </button>
        </li>
        </ul>
    </nav>
  );
};

export default Navbar;
