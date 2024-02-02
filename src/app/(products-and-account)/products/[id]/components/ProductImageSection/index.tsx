/* eslint-disable @next/next/no-img-element */
"use client";
import ImageModal from "@/components/Modal/ImageModal";
import ImageContext from "@/context/ImageModalContext";
import { IProduct } from "@/lib/definitions";
import { useContext } from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaHeart,
  FaPinterest,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ProductImageSection({ product }: { product: IProduct }): JSX.Element {
  const { handleOpen } = useContext(ImageContext);

  const src = product.src.startsWith("https") ? product.src : `/${product.src}`;

  return (
    <section className="col-12px w-5/12">
      <ImageModal />
      <h2 className="sr-only">Product Image Section</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        onClick={handleOpen}
        className="w-[500px] h-[500px] border-2 hover:cursor-pointer border-primary rounded-sm object-contain object-center"
        width={400}
        height={400}
        src={src}
        alt=""></img>
      <div className="relative mt-4">
        <button
          aria-label="previous image"
          className="text-white absolute left-0 top-[50%] hover:bg-black/50 translate-y-[-50%] bg-black/5 py-2">
          <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
        </button>
        <ul className="flex gap-2 *:w-1/5">
          <li className="border-red-500 border-2">
            <img
              src={product.src}
              alt=""
              width={150}
              height={150}
              className="h-[80px] object-contain"
            />
          </li>
          <li>
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              width={150}
              height={150}
              className="h-[80px] object-contain"
            />
          </li>
          <li>
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              width={150}
              height={150}
              className="h-[80px] object-contain"
            />
          </li>
          <li>
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              width={150}
              height={150}
              className="h-[80px] object-contain"
            />
          </li>
          <li>
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              width={150}
              height={150}
              className="h-[80px] object-contain"
            />
          </li>
        </ul>
        <button
          aria-label="next image"
          className="text-white absolute  hover:bg-black/50 right-0 top-[50%] translate-y-[-50%] bg-black/5 py-2">
          <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex *:flex-1 mt-6">
        <div className="flex justify-center gap-1 items-center">
          <span>Chia sẻ:</span>
          <div className="flex *:w-6 *:h-6 gap-1">
            <FaFacebookMessenger className="text-blue-500" />
            <FaFacebook className="text-blue-800" />
            <FaPinterest className="text-red-800" />
            <div className="rounded-full bg-cyan-400 p-1 text-white">
              <FaTwitter className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 border-l-[2px]">
          <button className="*:w-6 *:h-6 flex text-red-500">
            {/* <FaRegHeart /> */}
            <FaHeart />
          </button>
          <span>Đã thích (100)</span>
        </div>
      </div>
    </section>
  );
}
