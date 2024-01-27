"use client";

import clsx from "clsx";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { TfiMenu } from "react-icons/tfi";

const HeaderMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <TfiMenu className="fill-white w-7 h-7 self-start" />
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/20 fade-in-animation z-40"
        />
      )}
      <div
        className={clsx(
          "fixed top-0 bottom-0 left-0 bg-primaryBgColor text-black w-1/3 mobile:w-1/2 translate-x-[-100%] transition-[transform] duration-200 z-50",
          isOpen && "translate-x-[0]"
        )}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-0 py-2 px-3 hover:bg-slate-200">
          <HiXMark className="w-7 h-7" />
        </button>
        <div>
          <h1>User Name</h1>
          <h1>User avatar</h1>
        </div>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenuBar;
