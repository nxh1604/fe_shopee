/* eslint-disable @next/next/no-img-element */
"use client";

import carouselData from "@/lib/data/carouselData";
import { MouseEventHandler, PropsWithChildren, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [lastMouseDownX, setLastMouseDownX] = useState(0);
  const [transformValue, setTransformValue] = useState(0);

  const handleMouseDown: MouseEventHandler<HTMLUListElement> = (e) => {
    setLastMouseDownX(e.clientX);
    setOnMouseDown(true);
    setTransformValue(parseInt(window.getComputedStyle(e.currentTarget).transform.split(",")[4].trim()));
  };

  const handleMouseMove: MouseEventHandler<HTMLUListElement> = (e) => {
    if (onMouseDown) {
      const diffX = e.clientX - lastMouseDownX;
      if (transformValue + diffX < 450 && transformValue + diffX > -4650) {
        e.currentTarget.style.transform = `translateX(${transformValue + diffX}px)`;
      }
    }
  };

  const handleMouseUp: MouseEventHandler<HTMLUListElement> = (e) => {
    const diffX = e.clientX - lastMouseDownX;
    if (diffX > 0) {
      const condition = diffX / 150 >= 1;
      if (condition && carouselIndex !== 0) setCarouselIndex((prev) => --prev);
      else {
        e.currentTarget.style.transform = `translateX(-${12.5 * 48 * carouselIndex}px)`;
        e.currentTarget.style.transition = `transform 0.5s ease-in`;
      }
    }
    if (diffX < 0) {
      const condition = Math.abs(diffX) / 150 >= 1;
      if (condition && carouselIndex !== carouselData.length - 1) setCarouselIndex((prev) => ++prev);
      else {
        e.currentTarget.style.transform = `translateX(-${12.5 * 48 * carouselIndex}px)`;
        e.currentTarget.style.transition = `transform 0.5s ease-in`;
      }
    }

    setOnMouseDown(false);
  };

  const handleMouseLeave: MouseEventHandler<HTMLUListElement> = (e) => {
    if (onMouseDown) {
      const diffX = e.clientX - lastMouseDownX;
      if (diffX > 0) {
        const condition = diffX / 150 >= 1;
        if (condition && carouselIndex !== 0) setCarouselIndex((prev) => --prev);
        else {
          e.currentTarget.style.transform = `translateX(-${12.5 * 48 * carouselIndex}px)`;
          e.currentTarget.style.transition = `transform 0.5s ease-in`;
        }
      }
      if (diffX < 0) {
        const condition = Math.abs(diffX) / 150 >= 1;
        if (condition && carouselIndex !== carouselData.length - 1) setCarouselIndex((prev) => ++prev);
        else {
          e.currentTarget.style.transform = `translateX(-${12.5 * 48 * carouselIndex}px)`;
          e.currentTarget.style.transition = `transform 0.5s ease-in`;
        }
      }
      setOnMouseDown(false);
    }
  };

  const handleNext = () => {
    if (carouselIndex < carouselData.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  };

  const handlePrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(carouselData.length - 1);
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (!onMouseDown) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => {
      interval && clearInterval(interval);
    };
  });

  return (
    <div className="relative w-[600px] overflow-hidden">
      <CarouselButton action={handlePrevious}>Previous</CarouselButton>
      <ul
        style={{ transform: `translateX(-${carouselIndex * 12.5 * 48}px)`, transition: `transform ${onMouseDown ? "0s" : "0.5s"} ease-in` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={twMerge("flex relative w-max")}
      >
        {carouselData.map((item) => {
          return (
            <li className="hover:cursor-grab active:cursor-grabbing" key={item.id}>
              <img
                draggable={false}
                className={twMerge("grow-0 shrink-0 w-[600px] h-[400px] object-cover object-top")}
                src={item.image}
                width={600}
                height={300}
                alt="carousel"
              />
            </li>
          );
        })}
      </ul>
      <CarouselButton type="next" action={handleNext}>
        Next
      </CarouselButton>

      <CarouselFooterPaginate carouselData={carouselData} carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
    </div>
  );
};

const CarouselButton = ({
  type = "previous",
  action,
  children,
  className,
}: PropsWithChildren<{ action: () => void; type?: "previous" | "next"; className?: string }>) => {
  return (
    <button
      onClick={action}
      className={twMerge(
        "absolute top-[50%] translate-y-[-50%] text-gray-400 bg-black/20 px-1 py-3 hover:bg-black/50 z-[1]",
        ` ${type === "previous" ? "left-0" : "right-0"}`,
        className
      )}
    >
      {children}
    </button>
  );
};

const CarouselFooterPaginate = ({
  carouselData,
  carouselIndex,
  setCarouselIndex,
}: {
  carouselIndex: number;
  setCarouselIndex: React.Dispatch<SetStateAction<number>>;
  carouselData: any[];
}) => {
  return (
    <div className="absolute bottom-0 right-[50%] space-x-2 translate-x-[50%] z-[1]">
      {carouselData.map((item) => {
        return (
          <button
            onClick={() => setCarouselIndex(item.id - 1)}
            key={item.id}
            className={`w-3 h-3 rounded-full ${carouselIndex === item.id - 1 ? "bg-primary" : "bg-black/20"}`}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
