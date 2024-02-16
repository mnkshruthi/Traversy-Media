import React from "react";
import anisha from "../Images/avatar-anisha.png";
import richard from "../Images/avatar-richard.png";
import shanai from "../Images/avatar-shanai.png";

export default function Testimonials() {
  return (
    <div>
      {/* Contianer to headng tand teatimonial block */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's different about Manage?
        </h2>
        {/* Testimonials container */}
        <div className="flex flex-col mt-24 md:space-x-6 md:flex-row">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:w-1/3">
            <img src={anisha} className="w-16 -mt-14" alt="Anisha" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p classname="text-sm text-darkGreyishBlue">
              Mange has supercharged out team's workflow. the ability to
              maintain the visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          {/* Testmonial 2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:flex md:w-1/3">
            <img src={richard} className="w-16 -mt-14" alt="Anisha" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p classname="text-sm text-darkGreyishBlue">
              Mange has supercharged out team's workflow. the ability to
              maintain the visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          {/* Testimoial 3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:flex md:w-1/3">
            <img src={shanai} className="w-16 -mt-14" alt="Anisha" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p classname="text-sm text-darkGreyishBlue">
              Mange has supercharged out team's workflow. the ability to
              maintain the visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
        </div>
        {/* Button */}
        <button className="bg-brightRed text-white rounded-full px-6 p-2 hover:bg-brightRedLight mt-10 baseline">
          Get Started
        </button>
      </div>
    </div>
  );
}
