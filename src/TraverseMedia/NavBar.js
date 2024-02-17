import React from "react";
import logo from "../Images/logo.svg";

export default function NavBar() {
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex md:space-x-6 space-x-12">
          <a href="/" className="hover:text-darkGreyishBlue">
            Pricing
          </a>
          <a href="/" className="hover:text-darkGreyishBlue">
            Product
          </a>
          <a href="/" className="hover:text-darkGreyishBlue">
            About Us
          </a>
          <a href="/" className="hover:text-darkGreyishBlue">
            Careers
          </a>
          <a href="/" className="hover:text-darkGreyishBlue">
            Community
          </a>
        </div>
        {/* Button */}

        <a
          href="/"
          className=" hidden md:block bg-brightRed text-white p-3 px-6 pt-2 rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        {/* Hamburger */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="/">Pricing</a>
          <a href="/">Product</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Community</a>
        </div>
      </div>
    </nav>
  );
}
