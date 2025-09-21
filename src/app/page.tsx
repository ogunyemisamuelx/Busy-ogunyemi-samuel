import React from "react";
import Header from "./components/Header";
import { BusyHero } from "./components/Hero";
import { Content$4 } from "./components/Features";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-sm">
      {/* {Header} */}
      <div className="relative">
        <Header />
      </div>

      {/* {HomePage} */}
      <div className="absolute top-0 left-0 -z-10">
        <BusyHero />
        <div className="min-w-full flex justify-center  items-center h-screen flex-col ">
          <div className="lg:w-3/5 w-5/5 lg:mt-[350px] mt-[460px]  pl-10">
            <h4 className="font-semibold text-lg  lg:text-xl flex gap-1">
              {" "}
              <p>BUSY</p> <p>Bar</p>{" "}
              <p className="lg:text-xl text-base font-normal text-left">
                is a productivity multi-tool device with an LED pixel display.
              </p>
            </h4>
            <p className="lg:text-xl text-base text-left">
              Focu﻿s timer with distraction blocking feature on your phone and
              PC. Fully customizable, open-source, and smart home ready.
            </p>
          </div>
          <div className="mt-10">
            <button className="px-16 py-5 rounded-md bg-[#EA5212] text-white">
              BUY
            </button>
          </div>
          <div className="">
            <Content$4 />
          </div>
        </div>
      </div>

      {/* {Footer} */}
    </div>
  );
};

export default Page;
