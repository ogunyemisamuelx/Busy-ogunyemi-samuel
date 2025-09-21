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
          className="w-full h-[830px] object-cover"
        ></video>
      </div>
    </div>
  );
};

export { BusyHero };
