import React from "react";
import logo from "../Images/logo.svg";
import orange from "../Images/illustration-intro.svg";

export default function YouTubeNavBar() {
  return (
    <div>
      {/* Refer  */}
      {/* NavBar */}
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
          <div>
            <a
              href="/"
              className=" hidden md:block bg-brightRed text-white p-3 px-6 pt-2 rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
      {/* Hero section */}
    </div>
  );
}
