import React from "react";
import orange from "../Images/illustration-intro.svg";

export default function Hero() {
  return (
    <div>
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col md:w-1/2 space-y-12 ">
            <h1 className="max-w-md font-bold text-4xl text-center md:text-left md:text-5xl">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center md:text-left text-darkGreyishBlue">
              Manage makes it simpler to make software team to plan day-to-day
              tasks while keeping the larger team golas in view.
            </p>
            <a
              href="/"
              className="md:inline-block w-44 text-white text-center bg-brightRed items-center p-3 px-6 rounded-full"
            >
              Get Started
            </a>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 ">
            <img src={orange} alt="Orange" />
          </div>
        </div>
      </section>
    </div>
  );
}
