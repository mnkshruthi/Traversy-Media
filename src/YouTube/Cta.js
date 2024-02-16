import React from "react";

export default function Cta() {
  return (
    <div className="bg-brightRed">
      <div className="container flex flex-col items-center px-6 py-24  space-y-12 mt-28 p-16 md:py-12 md:space-y-0 md:flex-row">
        <h2 className="font-bold m-auto text-white text-5xl leading-tight text-center md:text-4xl md:max-w-xl md:text-left">
          Simply how your team works today
        </h2>
        <button
          href="/"
          className="bg-white  text-brightRed hover:bg-gray-300 rounded-full p-3 px-6 pt-2 shadow-2xl text-center"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
