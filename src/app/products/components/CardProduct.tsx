"use client";
import Button from "@/components/Button";
import Currency from "@/components/Currency";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

interface IProduct {
  src: string;
  title: string;
  discount: null | number;
  price: number;
  rating: number;
  sold: number;
  shop: string;
  location: string;
}

// const maxTitleLength = "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a".length;

const CardProduct = ({ src, title, discount, price, shop, location, rating, sold }: IProduct) => {
  const [isLike, setIsLike] = useState(false);

  const priceDiscount = discount ? price - (discount * price) / 100 : price;

  const soldCalculated = sold > 1000 ? Math.floor(sold / 1000) + "k" : sold;

  const width = (((rating - 0.1) / 5) * 100).toFixed(1) + "%";

  return (
    <li className="w-[calc(20%-8px)] flex flex-col bg-white cursor-pointer translate-x-0 transition-[transform] rounded-t-[3px] duration-100 ease-linear hover:-translate-y-[2px] shadow hover:shadow-xl rounded-b-[2px]">
      <Link scroll={false} href={"#"}>
        <div className="relative text-xs text-center">
          {discount && (
            <div className="absolute w-[36px] right-0 bg-yellow-500 rounded-tr-[3px]">
              <span className="text-[#ed3814] font-bold block ">{discount}%</span>
              <span className="uppercase text-white font-semibold relative -top-[1px]">Giảm</span>
              <div className="border-l-[18px] border-r-[18px] border-b-[6px] border-l-yellow-500 border-r-yellow-500 border-b-transparent absolute bottom-[-5px] left-0 right-0"></div>
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[200px] h-[200px] rounded-t-[3px] object-cover object-center"
            src={src}
            alt=""
            width={200}
            height={200}
          />
          <div className="absolute flex top-2 -left-1 px-1 rounded-r text-xs bg-primary">
            <span className="text-white">Yêu thích</span>
            <div className="border-l-[4px] border-t-[6px] absolute border-t-primary brightness-[0.6] border-l-transparent left-0 bottom-[-6px]"></div>
          </div>
        </div>
        <div className="text-xs p-2 flex-1 flex flex-col">
          <h3 className="text-xs mb-4 h-[32px] line-clamp-2">{title}</h3>
          <div className="pb-3 mt-auto flex flex-wrap items-center justify-between">
            <span className="text-base text-primary">
              <Currency price={priceDiscount} />
            </span>

            {discount && (
              <del>
                <Currency price={price} />
              </del>
            )}
          </div>
          <div className="flex mt-auto pb-4 justify-between items-center flex-wrap">
            <Button aria-label="like" onClick={() => setIsLike((prev) => !prev)} size="icon">
              {isLike ? <FaHeart className="fill-red-500" /> : <FaRegHeart />}
            </Button>
            <div className="relative w-14 ml-auto">
              <span
                // onMouseMove={(e) => {
                //   const target = e.currentTarget.getBoundingClientRect();
                //   const newWidth = e.clientX - target.left;
                //   const siblingTarget = e.currentTarget.nextElementSibling;
                //   if (siblingTarget && siblingTarget instanceof HTMLElement) {
                //     siblingTarget.style.width = `${newWidth}px`;
                //   }
                // }}
                className="flex gap-[1px] translate-y-[-50%] left-0 absolute">
                <IoStarOutline className="w-[10px] h-[10px]" />
                <IoStarOutline className="w-[10px] h-[10px]" />
                <IoStarOutline className="w-[10px] h-[10px]" />
                <IoStarOutline className="w-[10px] h-[10px]" />
                <IoStarOutline className="w-[10px] h-[10px]" />
              </span>
              <span
                // onMouseMove={(e) => {
                //   const target = e.currentTarget.getBoundingClientRect();
                //   const newWidth = e.clientX - target.left;
                //   e.currentTarget.style.width = `${newWidth}px`;
                // }}
                style={{ width: width }}
                className={"h-[10px] w-0 overflow-hidden absolute translate-y-[-50%] left-0"}>
                <IoStarSharp className="fill-yellow-500 absolute w-[10px] h-[10px] left-0" />
                <IoStarSharp className="fill-yellow-500 absolute w-[10px] h-[10px] left-[11px]" />
                <IoStarSharp className="fill-yellow-500 absolute w-[10px] h-[10px] left-[22px] " />
                <IoStarSharp className="fill-yellow-500 absolute w-[10px] h-[10px] left-[33px]" />
                <IoStarSharp className="fill-yellow-500 absolute w-[10px] h-[10px] left-[44px] " />
              </span>
            </div>
            {sold ? <span className="ml-1">Đã bán {soldCalculated}</span> : null}
          </div>
          <div className="mt-auto flex justify-between text-textColor">
            <span>{shop}</span>
            <span>{location}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardProduct;
