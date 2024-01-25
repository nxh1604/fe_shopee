"use client";
import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import HeaderSearch from "../HeaderSearch";

const HeaderSearchMobile = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  useEffect(() => {
    const handleCloseSearch = () => {
      setIsOpenSearch(false);
    };
    if (isOpenSearch) {
      document.addEventListener("click", handleCloseSearch);
    }

    return () => document.removeEventListener("click", handleCloseSearch);
  }, [isOpenSearch]);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenSearch(true);
      }}
      className="-order-1"
    >
      <FaSearch className="fill-white w-7 h-7" />
      <div onClick={(e) => e.stopPropagation()}>
        <HeaderSearch className={`absolute` + ` ${isOpenSearch ? "" : "hidden"}`} />
      </div>
    </button>
  );
};

export default HeaderSearchMobile;
