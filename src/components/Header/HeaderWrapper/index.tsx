"use client";

import useScrollDetectOnDocument from "@/hooks/useScrollDetectOnDocument";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const HeaderWrapper = ({ children }: PropsWithChildren) => {
  const { isScrollUp, isScrollDown } = useScrollDetectOnDocument(100);

  return (
    <header
      className={clsx(
        isScrollUp && "m-and-t:translate-y-[0]",
        isScrollDown && "m-and-t:-translate-y-[calc(100%+var(--products-mobile-sort-bar))]",
        "bg-gradient-shopee-b m-and-t:transition-[transform] m-and-t:duration-300 m-and-t:ease-in-out text-white text-sm m-and-t:[height:var(--header-mobile-height)] m-and-t:items-center m-and-t:pb-0 m-and-t:fixed m-and-t:fixed-top-all-width m-and-t:z-50"
      )}>
      {children}
    </header>
  );
};

export default HeaderWrapper;
