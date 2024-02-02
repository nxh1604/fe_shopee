"use client";
import Button from "@/components/Button";
import Currency from "@/components/Currency";
import RatingStar from "@/components/RatingStar";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface IProduct {
  id: number;
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

const CardProduct = ({
  id,
  src,
  title,
  discount,
  price,
  shop,
  location,
  rating,
  sold,
}: IProduct) => {
  const [isLike, setIsLike] = useState(false);

  const priceDiscount = discount ? price - (discount * price) / 100 : price;

  const soldCalculated = sold > 1000 ? Math.floor(sold / 1000) + "k" : sold;

  return (
    <li className="pt-[10px] col-5px w-1/5 t-and-pc:w-1/4 tablet:w-1/3 mobile:w-1/2 small-mobile:w-full">
      <Link
        className="text-xs h-full flex bg-white flex-col cursor-pointer translate-x-0 transition-[transform] rounded-t-[3px] duration-100 ease-linear hover:-translate-y-[2px] shadow hover:shadow-xl rounded-b-[2px]"
        scroll={false}
        href={`/products/${id}`}>
        <div className="relative block text-center">
          {discount ? (
            <div className="absolute w-[36px] right-0 bg-yellow-500 rounded-tr-[3px]">
              <span className="text-[#ed3814] font-bold block ">{discount}%</span>
              <span className="uppercase text-white font-semibold relative -top-[1px]">Giảm</span>
              <div className="border-l-[18px] border-r-[18px] border-b-[6px] border-l-yellow-500 border-r-yellow-500 border-b-transparent absolute bottom-[-5px] left-0 right-0"></div>
            </div>
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-[200px] small-mobile:h-[300px] rounded-t-[3px] object-cover object-center"
            src={src}
            alt=""
            loading="lazy"
            width={200}
            height={200}
          />
          <div className="absolute flex top-2 -left-1 px-1 rounded-r text-xs bg-primary">
            <span className="text-white">Yêu thích</span>
            <div className="border-l-[4px] border-t-[6px] absolute border-t-primary brightness-[0.6] border-l-transparent left-0 bottom-[-6px]"></div>
          </div>
        </div>
        <div className="p-2 flex-1 flex flex-col">
          <h3 className="line-clamp-2 flex-1 mb-4">{title}</h3>
          <div className="pb-3 mt-auto flex flex-wrap items-center justify-between">
            <span className="text-base text-primary">
              <Currency price={priceDiscount} />
            </span>

            {discount ? (
              <del>
                <Currency price={price} />
              </del>
            ) : null}
          </div>
          <div className="flex mt-auto pb-4 justify-between items-center flex-wrap">
            <Button aria-label="like" onClick={() => setIsLike((prev) => !prev)} size="icon">
              {isLike ? <FaHeart className="fill-red-500" /> : <FaRegHeart />}
            </Button>
            {/* star rating */}
            <RatingStar
              className="ml-auto relative -top-[1px]"
              starSize={10}
              starGap={1}
              ratingStar={rating}
            />
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
