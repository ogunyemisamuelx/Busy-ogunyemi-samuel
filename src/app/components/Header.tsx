import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between lg:p-20 p-10 items-center  ">
      <div className="flex gap-5 text-[#646464]">
        <nav className="lg:text-lg">BUSY Bar</nav>
        <div className="lg:text-lg underline flex gap-4">
          <nav>Shop</nav>
          <nav>Downloads</nav>
          <nav>Blog</nav>
        </div>
      </div>
      <div className=" lg:px-20 lg:py-8 rounded-2xl border px-10 py-6"></div>
    </div>
  );
};

export default Header;
