import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="usaii-header-image flex text-white usaii-font justify-center font-poppins ">
        <a href="/">
          <img
            className="usaii-image"
            src="https://ik.imagekit.io/edtechdigit/usaii/content/images/official-logo/usaii-logo-white.png"
            alt="United States Artificial Intelligence Institute"
          />
        </a>
        <div className="flex justify-around my-auto">
          <a href="/" className="">
            USAAI
            <sup>®</sup>
            Certifications
          </a>
          <a href="/" className="">
            Examination Policy
          </a>
          <a href="/" className="">
            About USAII<sup>®</sup>
          </a>
          <a href="/" className="">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
