"use client";

import useScrollDetectOnDocument from "@/hooks/useScrollDetectOnDocument";
import clsx from "clsx";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const { isScrollDown } = useScrollDetectOnDocument(300);

  return (
    <button
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
      className={clsx(
        "p-2 rounded-full bg-blue-300 fixed bottom-[5%] right-[2%] z-50 lg:hidden opacity-0 transition-all rotate-0 duration-300 ease-linear",
        isScrollDown && "opacity-100 rotate-180"
      )}
    >
      <FaArrowDownLong className="w-8 h-8 fill-primary" />
    </button>
  );
};

export default ScrollToTop;
