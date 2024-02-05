/* eslint-disable @next/next/no-img-element */
"use client";
import ImageModal from "@/components/Modal/ImageModal";
import ImageContext from "@/context/ImageModalContext";
import { IProduct } from "@/lib/definitions";
import clsx from "clsx";
import { useContext, useState } from "react";
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
  const [showingPhotoIndexed, setShowingPhotoIndexed] = useState(0);
  const [pageOfSubPhoto, setPageOfSubPhoto] = useState(1);

  const handleShowNextPhoto = () => {
    if (showingPhotoIndexed < product.subPhotos.length) {
      setShowingPhotoIndexed(showingPhotoIndexed + 1);
    }
  };

  const handleShowPreviousPhoto = () => {
    if (showingPhotoIndexed > 0) {
      setShowingPhotoIndexed(showingPhotoIndexed - 1);
    }
  };

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
        src={showingPhotoIndexed === 0 ? product.photo : product.subPhotos[showingPhotoIndexed - 1]}
        alt=""></img>
      <div className="relative mt-4 overflow-hidden">
        <button
          onClick={handleShowPreviousPhoto}
          aria-label="previous image"
          className="text-white absolute left-0 top-[50%] hover:bg-black/50 translate-y-[-50%] bg-black/5 py-2 z-10">
          <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
        </button>
        <ul
          style={{
            transform: `${
              showingPhotoIndexed > 3 && "translateX(-" + (showingPhotoIndexed - 3) * 80 + "px)"
            }`,
          }}
          className="flex min-w-max">
          <li
            className={clsx(
              "w-[20%] p-1",
              showingPhotoIndexed === 0 && "border-2  border-red-500"
            )}>
            <img
              src={product.photo}
              alt=""
              width={150}
              height={150}
              className="w-[80px] object-contain"
            />
          </li>
          {product.subPhotos.map((photo, index) => (
            <li
              key={index}
              className={clsx(
                "w-[20%] p-1",
                showingPhotoIndexed === index + 1 && "border-2  border-red-500"
              )}>
              <img
                src={photo}
                alt=""
                width={150}
                height={150}
                className="w-[80px] object-contain"
              />
            </li>
          ))}
        </ul>
        <button
          onClick={handleShowNextPhoto}
          aria-label="next image"
          className="text-white absolute  hover:bg-black/50 right-0 top-[50%] translate-y-[-50%] bg-black/5 py-2 z-10">
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
