/* eslint-disable @next/next/no-img-element */
"use client";

import carouselData from "@/lib/data/carouselData";
import clsx from "clsx";
import { MouseEventHandler, PropsWithChildren, SetStateAction, TouchEventHandler, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ICarouselProperties {
  onClick?: () => void;
  width?: number | "full" | "auto";
  height?: number | "full" | "auto";
  disableAutoSlide?: boolean;
  transition?: boolean;
  slideAutoDelay?: number;
  transitionDelay?: number;
  data?: typeof carouselData;
  className?: string;
}

const Carousel = ({
  onClick = () => {},
  width = "full",
  height = 400,
  disableAutoSlide = false,
  slideAutoDelay = 3000,
  data = carouselData,
  transition = true,
  transitionDelay = 0.5,
  className = "",
}: ICarouselProperties) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [onTouchStart, setOnTouchStart] = useState<boolean>(false);
  const [lastTouchMoveX, setLastTouchMoveX] = useState<number>(0);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [lastMouseDownX, setLastMouseDownX] = useState(0);
  const [transformValue, setTransformValue] = useState(0);
  const [currentTarget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [childElementWidth, setChildElementWidth] = useState<number>(typeof width === "number" ? width : 0);
  const [wrapperWidth, setWrapperWidth] = useState<number | string>(width === "full" ? "100%" : typeof width === "number" ? width + "px" : width);
  const divRef = useRef<HTMLDivElement | null>(null);

  const setWidth = width === "full" ? "100%" : typeof width === "number" ? width + "px" : width;
  const setHeight = height === "full" ? "100%" : typeof height === "number" ? height + "px" : height;
  const newTransitionDelay = transition ? transitionDelay : 0;

  useEffect(() => {
    setWrapperWidth(divRef.current ? divRef.current.offsetWidth : setWidth);
    setChildElementWidth((prev) => (divRef.current ? divRef.current.offsetWidth : prev));
  }, [setWidth, data]);

  // goto next carousel item
  const handleNext = () => {
    if (carouselIndex < data.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else if (!disableAutoSlide) {
      setCarouselIndex(0);
    }
  };

  // goto previous carousel item
  const handlePrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else if (!disableAutoSlide) {
      setCarouselIndex(data.length - 1);
    }
  };

  const handleMouseDown: MouseEventHandler<HTMLUListElement> = (e) => {
    const width = e.currentTarget.firstElementChild
      ? e.currentTarget.firstElementChild.getClientRects()[0].width
      : e.currentTarget.getClientRects()[0].width;
    setLastMouseDownX(e.clientX);
    setOnMouseDown(true);
    setCurrentTarget(e.currentTarget);
    setTransformValue(parseInt(window.getComputedStyle(e.currentTarget).transform.split(",")[4].trim()));
    setChildElementWidth(width);
  };

  const handleTouchStart: TouchEventHandler<HTMLUListElement> = (e) => {
    const width = e.currentTarget.firstElementChild
      ? e.currentTarget.firstElementChild.getClientRects()[0].width
      : e.currentTarget.getClientRects()[0].width;
    setLastMouseDownX(e.touches[0].clientX);
    setOnTouchStart(true);
    setCurrentTarget(e.currentTarget);
    setTransformValue(parseInt(window.getComputedStyle(e.currentTarget).transform.split(",")[4].trim()));
    setChildElementWidth(width);
  };

  const handleTouchMove: TouchEventHandler<HTMLUListElement> = (e) => {
    if (onTouchStart && currentTarget && childElementWidth) {
      const perItemWidth = childElementWidth;
      const parentWidth = childElementWidth * data.length;
      const diffX = e.touches[0].clientX - lastMouseDownX;
      if (transformValue + diffX < (perItemWidth * 2) / 3 && transformValue + diffX > -parentWidth + perItemWidth / 3) {
        currentTarget.style.transform = `translateX(${transformValue + diffX}px)`;
        currentTarget.style.transition = `transform 0s ease-in`;
      }
      setLastTouchMoveX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    const diffX = lastTouchMoveX - lastMouseDownX;
    if (diffX === 0) return;
    const absDiffX = Math.abs(diffX);
    if (currentTarget && childElementWidth && diffX) {
      const perItemWidth = childElementWidth;
      if (absDiffX > perItemWidth) {
        const multiple = Math.floor(absDiffX / perItemWidth);
        const range = absDiffX - perItemWidth * multiple;
        if (diffX > 0) {
          const condition = range / (perItemWidth / 3) >= 1;
          if (carouselIndex - multiple <= 0) {
            setCarouselIndex(0);
            currentTarget.style.transform = `translateX(0px)`;
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
          } else if (condition) {
            if (carouselIndex - multiple - 1 <= 0) {
              setCarouselIndex(0);
              currentTarget.style.transform = `translateX(0px)`;
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            } else {
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
              setCarouselIndex((prev) => {
                prev -= multiple + 1;
                return prev;
              });
            }
          } else {
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            setCarouselIndex((prev) => {
              prev -= multiple;
              return prev;
            });
          }
        }
        if (diffX < 0) {
          const condition = range / (perItemWidth / 3) >= 1;
          if (carouselIndex + multiple >= data.length - 1) {
            setCarouselIndex(data.length - 1);
            currentTarget.style.transform = `translateX(-${perItemWidth * (data.length - 1)}px)`;
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
          } else if (condition) {
            if (carouselIndex + multiple + 1 >= data.length - 1) {
              setCarouselIndex(data.length - 1);
              currentTarget.style.transform = `translateX(-${perItemWidth * (data.length - 1)}px)`;
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            } else {
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
              setCarouselIndex((prev) => {
                prev += multiple + 1;
                return prev;
              });
            }
          } else {
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            setCarouselIndex((prev) => {
              prev += multiple;
              return prev;
            });
          }
        }
      } else {
        if (diffX > 0) {
          const condition = diffX / (perItemWidth / 3) >= 1;
          if (condition && carouselIndex !== 0) {
            setCarouselIndex((prev) => --prev);
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
          } else {
            currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
          }
        }
        if (diffX < 0) {
          const condition = Math.abs(diffX) / (perItemWidth / 3) >= 1;
          if (condition && carouselIndex !== data.length - 1) {
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            setCarouselIndex((prev) => ++prev);
          } else {
            currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
            currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
          }
        }
      }
    }
    setCurrentTarget(null);
    setOnTouchStart(false);
  };

  // set period time to goto next carousel item
  useEffect(() => {
    if (disableAutoSlide) return;
    let interval: ReturnType<typeof setInterval> | null = null;
    if (!onMouseDown) {
      interval = setInterval(() => {
        handleNext();
      }, slideAutoDelay);
    }
    return () => {
      interval && clearInterval(interval);
    };
  });

  // add global event listener when grab carousel item
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (onMouseDown && currentTarget && childElementWidth) {
        const perItemWidth = childElementWidth;
        const parentWidth = childElementWidth * data.length;
        const diffX = e.clientX - lastMouseDownX;
        if (transformValue + diffX < (perItemWidth * 2) / 3 && transformValue + diffX > -parentWidth + perItemWidth / 3) {
          currentTarget.style.transform = `translateX(${transformValue + diffX}px)`;
          currentTarget.style.transition = `transform 0s ease-in`;
        }
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      const diffX = e.clientX - lastMouseDownX;
      if (diffX === 0) return;
      console.log({ diffX }, "2");

      const absDiffX = Math.abs(diffX);
      if (currentTarget && childElementWidth) {
        const perItemWidth = childElementWidth;
        if (absDiffX > perItemWidth) {
          const multiple = Math.floor(absDiffX / perItemWidth);
          const range = absDiffX - perItemWidth * multiple;
          if (diffX > 0) {
            const condition = range / (perItemWidth / 3) >= 1;
            if (carouselIndex - multiple <= 0) {
              setCarouselIndex(0);
              currentTarget.style.transform = `translateX(0px)`;
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            } else if (condition) {
              if (carouselIndex - multiple - 1 <= 0) {
                setCarouselIndex(0);
                currentTarget.style.transform = `translateX(0px)`;
                currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
              } else {
                currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
                setCarouselIndex((prev) => {
                  prev -= multiple + 1;
                  return prev;
                });
              }
            } else {
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
              setCarouselIndex((prev) => {
                prev -= multiple;
                return prev;
              });
            }
          }
          if (diffX < 0) {
            const condition = range / (perItemWidth / 3) >= 1;
            if (carouselIndex + multiple >= data.length - 1) {
              setCarouselIndex(data.length - 1);
              currentTarget.style.transform = `translateX(-${perItemWidth * (data.length - 1)}px)`;
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            } else if (condition) {
              if (carouselIndex + multiple + 1 >= data.length - 1) {
                setCarouselIndex(data.length - 1);

                currentTarget.style.transform = `translateX(-${perItemWidth * (data.length - 1)}px)`;
                currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
              } else {
                currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
                setCarouselIndex((prev) => {
                  prev += multiple + 1;
                  return prev;
                });
              }
            } else {
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
              setCarouselIndex((prev) => {
                prev += multiple;
                return prev;
              });
            }
          }
        } else {
          if (diffX > 0) {
            const condition = diffX / (perItemWidth / 3) >= 1;
            if (condition && carouselIndex !== 0) {
              setCarouselIndex((prev) => --prev);
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            } else {
              currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            }
          }
          if (diffX < 0) {
            const condition = Math.abs(diffX) / (perItemWidth / 3) >= 1;
            if (condition && carouselIndex !== data.length - 1) {
              setCarouselIndex((prev) => ++prev);
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            } else {
              currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
              currentTarget.style.transition = `transform ${newTransitionDelay}s ease-in`;
            }
          }
        }
      }
      setCurrentTarget(null);
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
  }, [onMouseDown, carouselIndex, currentTarget, lastMouseDownX, transformValue, childElementWidth, data, newTransitionDelay]);

  return (
    <div onClick={onClick} ref={divRef} className={clsx("relative overflow-hidden w-full ", className)}>
      <CarouselButton className="mobile:hidden" action={handlePrevious}>
        Previous
      </CarouselButton>
      <ul
        style={{
          transform: `translateX(-${carouselIndex * childElementWidth}px)`,
          transition: transition ? `transform ${newTransitionDelay}s ease-in` : "",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={twMerge("flex max-w-max h-full")}
      >
        {data.map((item, index) => {
          return (
            <li
              style={{
                width: wrapperWidth,
                height: setHeight,
              }}
              className="hover:cursor-grab active:cursor-grabbing shrink-0 h-full"
              key={index}
            >
              <img
                draggable={false}
                className={twMerge("w-full h-full object-contain object-center")}
                onError={(e) => {
                  e.currentTarget.src = "/img/ecat-fallback/png";
                }}
                src={item}
                width={width}
                height={height}
                alt="carousel"
              />
            </li>
          );
        })}
      </ul>
      <CarouselButton className="mobile:hidden" type="next" action={handleNext}>
        Next
      </CarouselButton>

      <CarouselFooterPaginate data={data} carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
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
        "absolute top-[50%] translate-y-[-50%] text-gray-height bg-black/20 px-1 py-3 hover:bg-black/50 z-[1]",
        ` ${type === "previous" ? "left-0" : "right-0"}`,
        className
      )}
    >
      {children}
    </button>
  );
};

const CarouselFooterPaginate = ({
  data,
  carouselIndex,
  setCarouselIndex,
}: {
  carouselIndex: number;
  setCarouselIndex: React.Dispatch<SetStateAction<number>>;
  data: any[];
}) => {
  return (
    <div className="absolute bottom-0 right-[50%] translate-x-[50%] z-[1] flex flex-nowrap gap-2">
      {data.map((_, index) => {
        return (
          <button
            onClick={() => setCarouselIndex(index)}
            key={index}
            className={`w-3 h-3 rounded-full ${carouselIndex === index ? "bg-primary" : "bg-black/20"}`}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
