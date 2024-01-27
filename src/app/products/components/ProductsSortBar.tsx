"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import useClickOutside from "@/hooks/useClickOutside";
import Button from "@/components/Button";

const ProductsSortBar = ({ className }: { className?: string }) => {
  const [isActive, setIsActive] = useState<1 | 2 | 3 | 4>(1);
  const [isOpenSortOption, setIsOpenSortOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"asc" | "dsc">("asc");
  const ulOptionsRef = useClickOutside<HTMLUListElement>(isOpenSortOption, setIsOpenSortOption);

  return (
    <div className={twMerge("flex gap-1 items-center", className)}>
      <h1 className="mr-1 text-[#555] m-and-t:hidden">Sắp xếp theo</h1>
      <Button
        className={
          `flex-1 min-w-fit` + ` ${isActive === 1 ? "m-and-t:bg-slate-300 m-and-t:text-black" : ""}`
        }
        aria-label="Phổ biến"
        onClick={() => setIsActive(1)}
        variant={isActive === 1 ? "primary" : "normal-no-hover"}
        size="small">
        Phổ biến
      </Button>
      <Button
        className={
          `flex-1 min-w-fit` + ` ${isActive === 2 ? "m-and-t:bg-slate-300 m-and-t:text-black" : ""}`
        }
        aria-label="Mới nhất"
        onClick={() => setIsActive(2)}
        variant={isActive === 2 ? "primary" : "normal-no-hover"}
        size="small">
        Mới nhất
      </Button>
      <Button
        className={
          `flex-1 min-w-fit` + ` ${isActive === 3 ? "m-and-t:bg-slate-300 m-and-t:text-black" : ""}`
        }
        aria-label="Bán chạy"
        onClick={() => setIsActive(3)}
        variant={isActive === 3 ? "primary" : "normal-no-hover"}
        size="small">
        Bán chạy
      </Button>
      <div className="relative self-stretch bg-white items-center rounded-sm flex justify-between min-w-fit m-and-t:border-r-[1px] m-and-t:border-black/20">
        <div
          onClick={() => {
            setIsOpenSortOption(!isOpenSortOption);
          }}
          className="cursor-pointer w-[200px] m-and-t:w-full h-full items-center flex gap-4 justify-between pr-1 pl-3">
          <span className="capitalize">{selectedOption}</span>
          <IoIosArrowDown />
        </div>
        <ul
          ref={ulOptionsRef}
          className={
            `absolute bg-white top-[calc(100%+4px)] w-full z-[1] left-0 shadow-md fade-in-animation rounded-sm overflow-hidden` +
            ` ${isOpenSortOption ? "block" : "hidden"}`
          }>
          {sortOptions.map((option) => {
            return (
              <li
                className="hover:text-primary flex items-center cursor-pointer pl-3 pb-2 capitalize justify-between pr-2 first:pt-2"
                onClick={() => {
                  setSelectedOption(option.option);
                  setIsOpenSortOption(!isOpenSortOption);
                }}
                key={option.option}>
                {option.option}
                {selectedOption === option.option && <FaCheck className="w-2 h-2 fill-primary" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsSortBar;

const sortOptions = [
  {
    option: "asc",
  },
  {
    option: "dsc",
  },
];
