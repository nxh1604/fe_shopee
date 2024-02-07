"use client";

import { useContext, useState } from "react";
import ImageContext from "@/context/ImageModalContext";
import Modal from "..";
import Image from "next/image";
import { IProduct } from "@/lib/definitions";
import clsx from "clsx";

const ImageModal = ({ title, productPhotos }: { title: IProduct["title"]; productPhotos: IProduct["subPhotos"] }) => {
  const { isOpen, handleClose } = useContext(ImageContext);
  const [showingIndex, setShowingIndex] = useState(0);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="bg-white flex gap-4 items-start p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={500} height={500} alt="" className="w-[500px] bg-black h-[500px] object-contain" src={productPhotos[showingIndex]} />
        <div className="w-[350px]">
          <h1 className="text-xl font-bold pb-2 text-wrap">{title}</h1>
          <ul className="flex flex-wrap gap-4 content-start">
            {productPhotos.map((photo, index) => (
              <li key={index}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  onClick={() => setShowingIndex(index)}
                  width={100}
                  height={100}
                  alt=""
                  src={photo}
                  className={clsx("w-[100px] h-auto object-contain hover:cursor-pointer", showingIndex === index && "border-2 border-primary")}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
