"use client";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY) {
        if (window.scrollY >= 500) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };
    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  console.log(lastScrollY);

  return visible ? (
    <button className="p-2 rounded-full bg-blue-300/40 fixed bottom-[5%] right-[2%] z-50">
      <FaArrowUpLong className="w-8 h-8 fill-primary" />
    </button>
  ) : null;
};

export default ScrollToTop;
