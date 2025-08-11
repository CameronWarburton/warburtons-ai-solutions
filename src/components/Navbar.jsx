import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="row">
      <Link href="/">
        <Image src="/assets/Logo_No_Background.png" alt="Warburton's AI Solutions Ltd Logo" width={200} height={200} className="nav__logo"/>
      </Link>
      <ul className="nav__links">
        <li className="nav__link">
          <Link href='/'className="link__hover-effect">
            Home
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/services" className="link__hover-effect">
            Services
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/services" className="link__hover-effect">
            About Us
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
