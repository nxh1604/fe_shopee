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
        <Sidebar className="self-start" />
        <div className="flex-1">
          <div className="flex justify-between px-5 py-3 rounded items-center text-sm bg-secondaryBgColor">
            <div className="flex gap-1 items-center ">
              <h1 className=" mr-1 text-[#555]"> Sắp xếp theo</h1>
              <Button
                aria-label="Phổ biến"
                onClick={() => setIsActive(true)}
                variant={isActive ? "primary" : "normal-no-hover"}
                size="small">
                Phổ biến
              </Button>
              <Button aria-label="Mới nhất" variant="normal-no-hover" size="small">
                Mới nhất
              </Button>
              <Button aria-label="Bán chạy" variant="normal-no-hover" size="small">
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
                <ul
                  className={
                    `absolute bg-white top-[calc(100%+4px)] w-full z-[1] left-0 shadow-md fade-in-animation` +
                    ` ${isOpenSortOption ? "block" : "hidden"}`
                  }>
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
              </div>
            </div>
            <div className="flex gap-4 self-stretch">
              <div className="self-center">
                <span className="text-primary">{page < 2 ? 1 : page}</span>/<span>9</span>
              </div>
              <div className="flex">
                <Button
                  aria-label="Lùi về trang trước"
                  className={twMerge(
                    `border-[2px] border-[#e6e6e6]`,
                    "disabled:cursor-default disabled:bg-primaryBgColor"
                  )}
                  disabled={page < 2}
                  size="Xsmall">
                  <MdOutlineKeyboardArrowLeft />
                </Button>
                <Button
                  aria-label="Tới trang tiếp theo"
                  size="Xsmall"
                  className="disabled:cursor-default disabled:bg-primaryBgColor border-[2px] border-l-0 border-[#e6e6e6]"
                  disabled={page >= 9}>
                  <MdKeyboardArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-[10px]">
            {products.map((product) => {
              return <CardProduct key={product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

const products = [
  {
    id: 1,
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmwpe56kcbmnb5_tn",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 4.5,
    sold: 500,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 2,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 3,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 4,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 5,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 6,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 7,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 8,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 9,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 10,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
  {
    id: 11,
    src: "img/tree-736885_1280.jpg",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 0,
    sold: 0,
    shop: "shopee",
    location: "Lạng Sơn",
  },
];
