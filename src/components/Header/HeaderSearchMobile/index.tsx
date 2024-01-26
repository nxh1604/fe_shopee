"use client";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import HeaderSearch from "../HeaderSearch";
import useClickOutside from "@/hooks/useClickOutside";
import clsx from "clsx";

const HeaderSearchMobile = ({ className }: { className?: string }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const headerSearchRef = useClickOutside<HTMLDivElement>(isOpenSearch, setIsOpenSearch);

  return (
    <div className={clsx(className)}>
      <button
        onClick={() => {
          setIsOpenSearch(!isOpenSearch);
        }}
      >
        <FaSearch className="fill-white w-7 h-7" />
      </button>
      <HeaderSearch
        ref={headerSearchRef}
        className={
          `fixed top-[var(--header-mobile-height)] px-3 fixed-all-width h-[var(--products-mobile-sort-bar)] z-[10]` +
          ` ${isOpenSearch ? "" : "hidden"}`
        }
      />
    </div>
  );
};

export default HeaderSearchMobile;
