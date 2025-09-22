import React from "react";

const BusyHero = () => {
  return (
    <div className="w-full">
      <div className="h-[80vh] w-full">
        <video
          src="video/BusyBar_First_Block_Video_Desktop_02.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="w-full h-[860px] object-cover"
        ></video>
        <ProductivityHero />
      </div>
    </div>
  );
};

const ProductivityHero = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center ">
      <h2 className=" text-6xl">Productivity multi-tool</h2>
    </div>
  );
};

export { BusyHero };
