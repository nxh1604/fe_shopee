"use client";
import clsx from "clsx";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

const RatingStar = ({
  color = "primary",
  disableMouseMove = true,
  starSize = 10,
  starGap = 0,
  numOfStars = 5,
  ratingStar = 4.5,
  className,
}: {
  className?: string;
  disableMouseMove?: boolean;
  color?: "primary" | "yellow";
  starGap?: number;
  starSize?: number;
  ratingStar: number;
  numOfStars?: number;
}) => {
  const numberOfStars = new Array(numOfStars).fill(0);

  return (
    <div
      style={{ gap: `${starGap}px` }}
      className={clsx(
        "flex items-center",
        `${color === "primary" ? "text-primary" : "text-yellow-500"}`,
        className
      )}>
      {numberOfStars.map((_, index) => {
        const ratingOneStar = ratingStar > index + 1 ? 1 : ratingStar - index;
        return (
          <RatingOneStar
            disableMouseMove={disableMouseMove}
            ratingOneStar={ratingOneStar}
            starSize={starSize}
            key={index}
          />
        );
      })}
    </div>
  );
};

const RatingOneStar = ({
  disableMouseMove = false,
  starSize = 10,
  ratingOneStar = 1,
}: {
  disableMouseMove?: boolean;
  starSize?: number;
  ratingOneStar?: number;
}) => {
  const ratingOneStarRound = Number(ratingOneStar.toFixed(1));
  return (
    <span className={clsx("relative")}>
      <IoStarOutline
        onMouseMove={(e) => {
          if (disableMouseMove) return;
          const target = e.currentTarget.getBoundingClientRect();
          const newWidth = e.clientX - target.left;
          const siblingTarget = e.currentTarget.nextElementSibling;
          if (siblingTarget && siblingTarget instanceof HTMLElement) {
            siblingTarget.style.width = `${newWidth}px`;
          }
        }}
        style={{ width: `${starSize}px`, height: `${starSize}px` }}
      />
      <span
        onMouseMove={(e) => {
          if (disableMouseMove) return;
          const target = e.currentTarget.getBoundingClientRect();
          const newWidth = e.clientX - target.left;
          e.currentTarget.style.width = `${newWidth}px`;
        }}
        style={{
          width: `${
            (ratingOneStarRound === 0.5 || ratingOneStarRound === 1
              ? ratingOneStarRound
              : ratingOneStarRound == 0.1
              ? ratingOneStarRound * 2.5
              : ratingOneStarRound == 0.2
              ? ratingOneStarRound * 1.6
              : ratingOneStarRound == 0.3
              ? ratingOneStarRound * 1.3
              : ratingOneStarRound == 0.4
              ? ratingOneStarRound * 1.16
              : ratingOneStarRound == 0.6
              ? ratingOneStarRound * 0.93
              : ratingOneStarRound == 0.7
              ? ratingOneStarRound * 0.85
              : ratingOneStarRound == 0.8
              ? ratingOneStarRound * 0.8
              : ratingOneStarRound == 0.9
              ? ratingOneStarRound * 0.8
              : ratingOneStarRound) * 100
          }%`,
        }}
        className="h-full absolute top-0 overflow-hidden">
        <IoStarSharp
          style={{ width: `${starSize}px`, height: `${starSize}px` }}
          className="absolute top-0"
        />
      </span>
    </span>
  );
};

export default RatingStar;
