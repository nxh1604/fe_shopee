import { useEffect, useState } from "react";

const useScrollDetectOnDocument = (windowScrollOffset = 0) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    const handleScrollEvent = () => {
      const isScrollUp = Math.round(lastScrollY) - Math.round(window.scrollY) > 0;
      if (window.scrollY >= windowScrollOffset && !isScrollUp) {
        setIsScrollDown(true);
        setIsScrollUp(false);
      } else {
        setIsScrollUp(true);
        setIsScrollDown(false);
      }
      setLastScrollY(window.scrollY);
    };
    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, [lastScrollY, windowScrollOffset]);

  return { isScrollDown, isScrollUp };
};

export default useScrollDetectOnDocument;
