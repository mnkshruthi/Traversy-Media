import React from "react";

export default function Footersecond() {
  return (
    <div className="flex flex-col space-y-6 md:space-x-32 md:flex-row">
      {/* List container */}
      <div className="flex flex-col text-white">
        <a href="/" className="text-white">
          Home
        </a>
        <a href="/" className="text-white">
          Pricing
        </a>
        <a href="/" className="text-white">
          Products
        </a>
      </div>
      {/* <div>
        <a href="/" className="text-white">
          Career
        </a>
        <a href="/" className="text-white">
          Community
        </a>
        <a href="/" className="text-white">
          Privacy Policy
        </a>
      </div> */}
    </div>
  );
}
