import React from "react";

const Content$4 = () => {
  const FourContent = [
    {
      id: 1,
      title: "Productivity tool",
      Description:
        "Distraction blocker, custom BUSY message, focus timer, cross-platform syn",
    },
    {
      id: 2,
      title: "Apps & integration",
      Description:
        "App Library, connection to 3rd-party software, i﻿ntegrations with calendar events and calls",
    },
    {
      id: 3,
      title: "Smart home support",
      Description:
        "Connect to Google Home and Apple Home via t﻿he Matter protocol",
    },
    {
      id: 4,
      title: "Developer-friendly",
      Description:
        "Open HTTP API, open-source SDK, Python / Go / JavaScript libs, MQTT, no vendor lock-in",
    },
  ];

  return (
    <div className="w-full justify-center items-center flex">
      <div className="flex mt-[70px]">
        {FourContent.map((el, i) => (
          <div key={i}>
            <h4 className=" text-xl">{el.title}</h4>
            <p>{el.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Content$4 };
