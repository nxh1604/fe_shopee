"use client";

import { useContext } from "react";
import ImageContext from "@/context/ImageModalContext";
import Modal from "..";
import Image from "next/image";

const ImageModal = () => {
  const { isOpen, handleClose } = useContext(ImageContext);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="bg-white flex gap-4 items-start p-8">
        <Image width={500} height={500} alt="" className="w-[500px] bg-black h-[500px] object-contain" src={"/img/avatar.jpg"} />
        <ul className="flex flex-wrap w-[350px] gap-y-4 content-start justify-between">
          <li>
            <Image width={100} height={100} alt="" src={"/img/avatar.jpg"} className="w-[100px] h-auto object-contain" />
          </li>
          <li>
            <Image width={100} height={100} alt="" src={"/img/avatar.jpg"} className="w-[100px] h-auto object-contain" />
          </li>
          <li>
            <Image width={100} height={100} alt="" src={"/img/avatar.jpg"} className="w-[100px] h-auto object-contain" />
          </li>
          <li>
            <Image width={100} height={100} alt="" src={"/img/avatar.jpg"} className="w-[100px] h-auto object-contain" />
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
