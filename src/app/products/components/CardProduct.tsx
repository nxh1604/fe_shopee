"use client";
import Button from "@/components/Button";
import Currency from "@/components/Currency";
import { formatCurrency } from "@/lib/utilies";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface IProduct {
  src: string;
  title: string;
  discount: null | number;
  price: number;
  rating: number;
  shop: string;
  location: string;
}

const maxTitleLength = "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a".length;

const products = [
  {
    src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmwpe56kcbmnb5_tn",
    title: "Mũ lông nhung họa tiết mèo nhiều màu Lorem ipsum, dolor a12312312",
    discount: 15,
    price: 13000000,
    rating: 4,
    shop: "shopee",
    location: "Lạng Sơn",
  },
];

const CardProduct = ({ src, title, discount, price, shop, location, rating }: IProduct) => {
  const [isLike, setIsLike] = useState(false);

  const priceDiscount = discount ? price - (discount * price) / 100 : price;

  return (
    <div className="w-[20%] bg-white">
      <div className="relative">
        {discount && <span className="absolute right-0">{discount}</span>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-auto" src={src} alt="" width={200} height={200} />
        <div className="absolute flex bottom-0 text-xs">
          <span>Label ve ngay thang</span>
          <span>Label ve shope</span>
        </div>
      </div>
      <div className="text-xs p-2">
        <h3 className="text-xs">{title.length > maxTitleLength + 1 ? `${title.slice(0, maxTitleLength - 3)}...` : title}</h3>
        <div className="pt-1 pb-2 flex flex-wrap items-center justify-between">
          <span className="text-base text-primary">
            <Currency price={priceDiscount} />
          </span>

          {discount && (
            <del>
              <Currency price={price} />
            </del>
          )}
        </div>
        <div className="flex justify-between pb-2">
          <Button onClick={() => setIsLike((prev) => !prev)} size="icon">
            {isLike ? <FaHeart className="fill-red-500" /> : <FaRegHeart />}
          </Button>
          <span>{rating}</span>
        </div>
        <div className="flex justify-between">
          <span>{shop}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
