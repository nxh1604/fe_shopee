"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { clsx } from "clsx";

import useClickOutside from "@/hooks/useClickOutside";
import Button from "@/components/Button";
import { ISortSearchParams } from "../page";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

const ProductsSortBar = ({ className, order, sortBy }: { className?: string } & ISortSearchParams) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { push, prefetch } = useRouter();

  const [isOpenSortOption, setIsOpenSortOption] = useState(false);
  const ulOptionsRef = useClickOutside<HTMLUListElement>(isOpenSortOption, setIsOpenSortOption);

  const handleSortParams = ({ sortBy, order }: ISortSearchParams) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("sortBy", sortBy);
    if (sortBy === "pop") newSearchParams.delete("sortBy");
    newSearchParams.delete("order");
    if (sortBy === "price") {
      const rewriteOrder = order ? order : "asc";
      newSearchParams.set("order", rewriteOrder);
    }

    push(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <div className={twMerge("flex gap-1 items-center", className)}>
      <h1 className="mr-1 text-[#555] m-and-t:hidden">Sắp xếp theo</h1>
      <Button
        className={`flex-1 min-w-fit` + ` ${sortBy === "pop" ? "m-and-t:bg-slate-300 m-and-t:text-black" : ""}`}
        aria-label="Phổ biến"
        onClick={() => handleSortParams({ sortBy: "pop" })}
        variant={sortBy === "pop" ? "primary" : "normal-no-hover"}
        size="small"
      >
        Phổ biến
      </Button>
      <Button
        className={`flex-1 min-w-fit` + ` ${sortBy === "ctime" ? "m-and-t:bg-slate-300 m-and-t:text-black" : ""}`}
        aria-label="Mới nhất"
        onClick={() => handleSortParams({ sortBy: "ctime" })}
        variant={sortBy === "ctime" ? "primary" : "normal-no-hover"}
        size="small"
      >
        Mới nhất
      </Button>
      <Button
        className={`flex-1 min-w-fit` + ` ${sortBy === "sales" ? "m-and-t:bg-slate-300 m-and-t:text-black" : ""}`}
        aria-label="Bán chạy"
        onClick={() => handleSortParams({ sortBy: "sales" })}
        variant={sortBy === "sales" ? "primary" : "normal-no-hover"}
        size="small"
      >
        Bán chạy
      </Button>
      <div className="relative self-stretch bg-white items-center rounded-sm flex justify-between min-w-fit m-and-t:border-r-[1px] m-and-t:border-black/20">
        <div
          onClick={() => {
            setIsOpenSortOption(!isOpenSortOption);
          }}
          className="cursor-pointer w-[200px] m-and-t:w-full h-full items-center flex gap-4 justify-between pr-1 pl-3"
        >
          <span className="capitalize">{order === "asc" ? "Giá thấp đến cao" : order === "desc" ? "Giá cao đến thấp" : "Giá"}</span>
          <IoIosArrowDown />
        </div>
        <ul
          ref={ulOptionsRef}
          className={
            `absolute bg-white top-[calc(100%+4px)] w-full z-[1] left-0 shadow-md fade-in-animation rounded-sm overflow-hidden` +
            ` ${isOpenSortOption ? "block" : "hidden"}`
          }
        >
          {sortOptions.map((option) => {
            return (
              <li
                className="hover:text-primary flex items-center cursor-pointer pl-3 pb-2 capitalize justify-between pr-2 first:pt-2"
                onClick={() => {
                  handleSortParams({ sortBy: "price", order: option.option });
                  setIsOpenSortOption(!isOpenSortOption);
                }}
                key={option.option}
              >
                {option.option === "asc" ? "Giá thấp đến cao" : "Giá cao đến thấp"}
                {order === option.option && <FaCheck className="w-2 h-2 fill-primary" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsSortBar;

const sortOptions: { option: "asc" | "desc" }[] = [
  {
    option: "asc",
  },
  {
    option: "desc",
  },
];
