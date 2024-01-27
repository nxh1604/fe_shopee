"use client";
import clsx from "clsx";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

const RatingStar = ({
  ratingStar,
  starSize = 10,
  starGap = 1,
  fillColor = "primary",
}: {
  ratingStar: number;
  starSize?: number;
  starGap?: number;
  fillColor?: "primary" | "yellow";
}) => {
  const width = Number(((ratingStar * 100) / 5).toFixed(1));
  const gap = starGap + starSize;
  const gaps = new Array(5).fill(0).map((_, index) => gap * index);

  return (
    <div className="relative w-max ml-auto">
      <span
        onMouseMove={(e) => {
          const target = e.currentTarget.getBoundingClientRect();
          const newWidth = e.clientX - target.left;
          const siblingTarget = e.currentTarget.nextElementSibling;
          if (siblingTarget && siblingTarget instanceof HTMLElement) {
            siblingTarget.style.width = `${newWidth}px`;
          }
        }}
        style={{ gap: `${starGap}px` }}
        className={clsx("flex translate-y-[-50%] left-0 relative top-[50%]")}>
        <IoStarOutline
          className={clsx(
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "text-primary" : "text-yellow-500"
            }`
          )}
        />
        <IoStarOutline
          className={clsx(
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "text-primary" : "text-yellow-500"
            }`
          )}
        />
        <IoStarOutline
          className={clsx(
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "text-primary" : "text-yellow-500"
            }`
          )}
        />
        <IoStarOutline
          className={clsx(
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "text-primary" : "text-yellow-500"
            }`
          )}
        />
        <IoStarOutline
          className={clsx(
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "text-primary" : "text-yellow-500"
            }`
          )}
        />
      </span>
      <span
        onMouseMove={(e) => {
          const target = e.currentTarget.getBoundingClientRect();
          const newWidth = e.clientX - target.left;
          e.currentTarget.style.width = `${newWidth}px`;
        }}
        style={{ width: `${width}%` }}
        className={clsx(
          "overflow-hidden absolute translate-y-[-50%] left-0 top-[50%]",
          `h-[${starSize}px]`
        )}>
        <IoStarSharp
          style={{ left: `${gaps[0]}px` }}
          className={clsx(
            "absolute",
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "fill-primary" : "  fill-yellow-500"
            }`
          )}
        />
        <IoStarSharp
          style={{ left: `${gaps[1]}px` }}
          className={clsx(
            "absolute",
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "fill-primary" : "fill-yellow-500"
            }`
          )}
        />
        <IoStarSharp
          style={{ left: `${gaps[2]}px` }}
          className={clsx(
            "absolute",
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "fill-primary" : " fill-yellow-500"
            }`
          )}
        />
        <IoStarSharp
          style={{ left: `${gaps[3]}px` }}
          className={clsx(
            "absolute",
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "fill-primary" : "  fill-yellow-500"
            }`
          )}
        />
        <IoStarSharp
          style={{ left: `${gaps[4]}px` }}
          className={clsx(
            "absolute",
            `w-[${starSize}px] h-[${starSize}px] ${
              fillColor === "primary" ? "fill-primary" : "  fill-yellow-500"
            }`
          )}
        />
      </span>
    </div>
  );
};

export default RatingStar;
