import React from "react";

export default function YouTubeFeatures() {
  return (
    // Features section
    <section id="features">
      {/* flex container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:flex-row md:space-y-0">
        {/* What's different */}
        <div className="flex flex-col space-y-12 md:w-1/2 ">
          <h1 className="max-w-md font-bold text-center text-4xl p-8 md:text-left">
            What's different about manage?
          </h1>
          <p className="max-w-sm text-darkGreyishBlue p-8 md:text-left">
            Manage provides all the functionality that your team needs, without
            the complexity. Our software is tailor-made for modern digital
            project needs
          </p>
        </div>
        {/* Numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className=" flex items-center space-x-2">
                <div className="bg-brightRed text-white py-2 px-4 pt-2 rounded-full baseline hover:bg-brightRedLight md:py-1">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company wide progress
              </h3>
              <p className="text-darkGreyishBlue">
                Go see how your day-to-day tasks fit into the wide version. Go
                from the tracking progress at milestone levelof all the way done
                to the smallest od details. Never loose site of the bigger
                picture again
              </p>
            </div>
          </div>
          {/* List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className=" flex items-center space-x-2">
                <div className="bg-brightRed text-white py-2 px-4 pt-2 rounded-full baseline hover:bg-brightRedLight md:py-1">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built in reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company wide progress
              </h3>
              <p className="text-darkGreyishBlue">
                Go see how your day-to-day tasks fit into the wide version. Go
                from the tracking progress at milestone levelof all the way done
                to the smallest od details. Never loose site of the bigger
                picture again
              </p>
            </div>
          </div>
          {/* List Item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className=" flex items-center space-x-2">
                <div className="bg-brightRed text-white py-2 px-4 pt-2 rounded-full baseline hover:bg-brightRedLight md:py-1">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company wide progress
              </h3>
              <p className="text-darkGreyishBlue">
                Go see how your day-to-day tasks fit into the wide version. Go
                from the tracking progress at milestone levelof all the way done
                to the smallest od details. Never loose site of the bigger
                picture again
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
