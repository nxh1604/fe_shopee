/* eslint-disable @next/next/no-img-element */
"use client";

import carouselData from "@/lib/data/carouselData";
import {
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [lastMouseDownX, setLastMouseDownX] = useState(0);

  const handleMouseDown: MouseEventHandler<HTMLUListElement> = (e) => {
    setLastMouseDownX(e.clientX);
    setOnMouseDown(true);
  };

  const handleMouseMove: MouseEventHandler<HTMLUListElement> = (e) => {
    if (onMouseDown) {
      const diffX = e.clientX - lastMouseDownX;
      const transformValue = window
        .getComputedStyle(e.currentTarget)
        .transform.split(",")[4]
        .trim();
      console.log(transformValue + diffX);
      e.currentTarget.style.transform = `translateX(${parseInt(transformValue) + diffX}px)`;
    }
  };

  const handleMouseUp = () => {
    setOnMouseDown(false);
  };

  const handleMouseLeave = () => {
    setOnMouseDown(false);
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

  //   useEffect(() => {
  //     let interval: ReturnType<typeof setInterval> | null = null;
  //     if (!onMouseDown) {
  //       interval = setInterval(() => {
  //         handleNext();
  //       }, 3000);
  //     }
  //     return () => {
  //       interval && clearInterval(interval);
  //     };
  //   });

  return (
    <div className="relative w-[600px] h-[300px] overflow-hidden">
      <CarouselButton action={handlePrevious}>Previous</CarouselButton>
      {/* Carousel from top to bottom */}
      {/* <ul
        className={twMerge(
          "absolute flex flex-col-reverse bottom-0 w-max transition-[transform] duration-[0.7s]",
          carouselIndex === 0 && "translate-y-0",
          carouselIndex === 1 && "translate-y-[12.5%]",
          carouselIndex === 2 && "translate-y-[25%]",
          carouselIndex === 3 && "translate-y-[37.5%]",
          carouselIndex === 4 && "translate-y-[50%]",
          carouselIndex === 5 && "translate-y-[62.5%]",
          carouselIndex === 6 && "translate-y-[75%]",
          carouselIndex === 7 && "translate-y-[87.5%]"
        )}>
        {carouselData.map((item) => {
          return (
            <li key={item.id}>
              <img
                className={twMerge(
                  "min-w-0 grow-0 shrink-0 w-[600px] h-[300px] object-cover object-top"
                )}
                src={item.image}
                width={600}
                height={300}
                alt="carousel"
              />
            </li>
          );
        })}
      </ul> */}
      {/* Carousel from right to left */}
      <ul
        style={{ transform: `translateX(-${carouselIndex * 12.5}%)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => {
          console.log("mouseup");
          setOnMouseDown(false);
        }}
        onMouseLeave={() => {
          console.log("mouseleave");

          setOnMouseDown(false);
        }}
        className={twMerge("flex relative w-max transition-[transform] duration-[0.7s]")}>
        {carouselData.map((item) => {
          return (
            <li key={item.id}>
              <img
                draggable={false}
                className={twMerge(
                  "min-w-0 grow-0 shrink-0 w-[600px] h-[300px] object-cover object-top"
                )}
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

      <CarouselFooterPaginate
        carouselData={carouselData}
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
      />
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
      )}>
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
            className={`w-2 h-2 rounded-full ${
              carouselIndex === item.id - 1 ? "bg-primary" : "bg-black/20"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
