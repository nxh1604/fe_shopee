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
  const [currentTarget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [currentElementInfo, setCurrentElementInfo] = useState<{ width: number; perItemWidth: number } | null>(null);

  const handleMouseDown: MouseEventHandler<HTMLUListElement> = (e) => {
    const width = e.currentTarget.getClientRects()[0].width;
    const perItemWidth = width / carouselData.length;
    setLastMouseDownX(e.clientX);
    setOnMouseDown(true);
    setCurrentTarget(e.currentTarget);
    setTransformValue(parseInt(window.getComputedStyle(e.currentTarget).transform.split(",")[4].trim()));
    setCurrentElementInfo({ width, perItemWidth });
  };

  // goto next carousel item
  const handleNext = () => {
    if (carouselIndex < carouselData.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  };

  // goto previous carousel item
  const handlePrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(carouselData.length - 1);
    }
  };

  // set period time to goto next carousel item
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

  // add global event listener when grab carousel item
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (onMouseDown && currentTarget && currentElementInfo) {
        const { width: elementWidth, perItemWidth } = currentElementInfo;
        const diffX = e.clientX - lastMouseDownX;
        if (transformValue + diffX < (perItemWidth * 2) / 3 && transformValue + diffX > -elementWidth + perItemWidth / 3) {
          currentTarget.style.transform = `translateX(${transformValue + diffX}px)`;
        }
      }
    };
    const handleMouseUp = (e: MouseEvent) => {
      const diffX = e.clientX - lastMouseDownX;
      const absDiffX = Math.abs(diffX);
      if (currentTarget && currentElementInfo) {
        const { perItemWidth } = currentElementInfo;
        if (absDiffX > 600) {
          const multiple = Math.floor(absDiffX / 600);
          const range = absDiffX - 600 * multiple;
          if (diffX > 0) {
            const condition = range / (perItemWidth / 3) >= 1;
            if (carouselIndex - multiple <= 0) {
              setCarouselIndex(0);
              currentTarget.style.transform = `translateX(0px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            } else if (condition) {
              if (carouselIndex - multiple - 1 <= 0) {
                setCarouselIndex(0);
                currentTarget.style.transform = `translateX(0px)`;
                currentTarget.style.transition = `transform 0.5s ease-in`;
              } else {
                setCarouselIndex((prev) => {
                  prev -= multiple + 1;
                  return prev;
                });
              }
            } else {
              setCarouselIndex((prev) => {
                prev -= multiple;
                return prev;
              });
            }
          }
          if (diffX < 0) {
            const condition = range / (perItemWidth / 3) >= 1;
            if (carouselIndex + multiple >= carouselData.length - 1) {
              setCarouselIndex(carouselData.length - 1);
              currentTarget.style.transform = `translateX(-${perItemWidth * (carouselData.length - 1)}px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            } else if (condition) {
              if (carouselIndex + multiple + 1 >= carouselData.length - 1) {
                setCarouselIndex(carouselData.length - 1);
                currentTarget.style.transform = `translateX(-${perItemWidth * (carouselData.length - 1)}px)`;
                currentTarget.style.transition = `transform 0.5s ease-in`;
              } else {
                setCarouselIndex((prev) => {
                  prev += multiple + 1;
                  return prev;
                });
              }
            } else {
              setCarouselIndex((prev) => {
                console.log("condition 3");

                prev += multiple;
                return prev;
              });
            }
          }
        } else {
          if (diffX > 0) {
            const condition = diffX / (perItemWidth / 3) >= 1;
            if (condition && carouselIndex !== 0) setCarouselIndex((prev) => --prev);
            else {
              currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            }
          }
          if (diffX < 0) {
            const condition = Math.abs(diffX) / (perItemWidth / 3) >= 1;
            if (condition && carouselIndex !== carouselData.length - 1) setCarouselIndex((prev) => ++prev);
            else {
              currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            }
          }
        }
        setCurrentElementInfo(null);
        setCurrentTarget(null);
      }
      setOnMouseDown(false);
    };

    if (onMouseDown) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onMouseDown, carouselIndex, currentTarget, lastMouseDownX, transformValue, currentElementInfo]);

  return (
    <div className="relative w-[600px] overflow-hidden">
      <CarouselButton action={handlePrevious}>Previous</CarouselButton>
      <ul
        style={{ transform: `translateX(-${carouselIndex * 600}px)`, transition: `transform ${onMouseDown ? "0s" : "0.5s"} ease-in` }}
        onMouseDown={handleMouseDown}
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
