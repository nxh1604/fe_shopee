"use client";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import CardProduct from "./components/CardProduct";

const sortOptions = [
  {
    option: "Giá: thấp đến cao",
  },
  {
    option: "Giá: cao đến thấp",
  },
];

const page = 9;

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const [isOpenSortOption, setIsOpenSortOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const handleClickOutSide = () => {
      setIsOpenSortOption(false);
      console.log("document clicked");
    };

    if (isOpenSortOption) {
      document.addEventListener("click", handleClickOutSide);
    }

    return () => document.removeEventListener("click", handleClickOutSide);
  }, [isOpenSortOption]);

  return (
    <main className="bg-primaryBgColor py-8">
      <div className="max-w-[1200px] mx-auto flex">
        <Sidebar />
        <div className="flex-1">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-1 items-center ">
              <h1 className="mr-1 text-[#555]"> Sắp xếp theo</h1>
              <Button
                onClick={() => setIsActive(true)}
                variant={isActive ? "primary" : "normal-no-hover"}
                size="small">
                Phổ biến
              </Button>
              <Button variant="normal-no-hover" size="small">
                Mới nhất
              </Button>
              <Button variant="normal-no-hover" size="small">
                Bán chạy
              </Button>
              <div className="relative self-stretch bg-white items-center flex justify-between">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpenSortOption((prev) => !prev);
                  }}
                  className="cursor-pointer w-[200px] h-full items-center flex justify-between pr-1 pl-3">
                  <span className="capitalize">{selectedOption ? selectedOption : "Giá"}</span>
                  <IoIosArrowDown />
                </div>
                {isOpenSortOption && (
                  <ul className="absolute bg-white top-[calc(100%+4px)] w-full left-0 shadow-md">
                    {sortOptions.map((option) => {
                      return (
                        <li
                          className="hover:text-primary flex items-center cursor-pointer pl-3 pb-2 capitalize justify-between pr-2 first:pt-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOption(option.option);
                            setIsOpenSortOption((prev) => !prev);
                          }}
                          key={option.option}>
                          {option.option}
                          {selectedOption === option.option && (
                            <FaCheck className="w-2 h-2 fill-primary" />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex gap-4 self-stretch">
              <div className="self-center">
                <span className="text-primary">{page < 2 ? 1 : page}</span>/<span>9</span>
              </div>
              <div className="flex">
                <Button
                  className={twMerge(
                    `border-r-[2px] border-primaryBgColor`,
                    "disabled:cursor-default disabled:bg-primaryBgColor"
                  )}
                  disabled={page < 2}
                  size="Xsmall">
                  <MdOutlineKeyboardArrowLeft />
                </Button>
                <Button
                  size="Xsmall"
                  className="disabled:cursor-default disabled:bg-primaryBgColor"
                  disabled={page >= 9}>
                  <MdKeyboardArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <CardProduct
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmwpe56kcbmnb5_tn"
              title="Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum dolor a12312312"
              discount={15}
              price={13000000}
              rating={4}
              shop="shopee"
              location="Lạng Sơn"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
