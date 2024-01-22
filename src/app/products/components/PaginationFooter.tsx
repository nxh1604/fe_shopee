"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const array = [1, 2, 3, 4, 5];

export default function PaginationFooter(): JSX.Element {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <nav className="pt-[40px] pb-[60px] flex justify-center items-center gap-8 text-xl text-[#939393]">
      <Link
        scroll={false}
        onClick={() =>
          setIsSelected((prev) => {
            prev > 1 && prev--;
            return prev;
          })
        }
        href={"#"}>
        <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
      </Link>
      {array.map((item) => (
        <Link
          scroll={false}
          onClick={() => setIsSelected(item)}
          key={item}
          className={
            "w-[40px] h-[30px] text-center leading-[30px]" +
            ` ${isSelected === item ? " bg-primary text-white rounded-sm" : ""}`
          }
          href={"#"}>
          {item}
        </Link>
      ))}
      <Link
        scroll={false}
        onClick={() =>
          setIsSelected((prev) => {
            prev < array.length && prev++;
            return prev;
          })
        }
        href={"#"}>
        <MdOutlineKeyboardArrowRight className="w-8 h-8" />
      </Link>
    </nav>
  );
}
