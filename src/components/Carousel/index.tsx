/* eslint-disable @next/next/no-img-element */
"use client";

import carouselData from "@/lib/data/carouselData";
import {
  MouseEventHandler,
  PropsWithChildren,
  SetStateAction,
  TouchEventHandler,
  useEffect,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

const Carousel = ({ width = 400, height = 200, disableAutoScroll = true, scrollDelay = 3000 }) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [onTouchStart, setOnTouchStart] = useState<boolean>(false);
  const [lastTouchMoveX, setLastTouchMoveX] = useState<number>(0);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [lastMouseDownX, setLastMouseDownX] = useState(0);
  const [transformValue, setTransformValue] = useState(0);
  const [currentTarget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [currentElementInfo, setCurrentElementInfo] = useState<{
    width: number;
    perItemWidth: number;
  } | null>(null);

  const handleMouseDown: MouseEventHandler<HTMLUListElement> = (e) => {
    const width = e.currentTarget.getClientRects()[0].width;
    const perItemWidth = width / carouselData.length;
    setLastMouseDownX(e.clientX);
    setOnMouseDown(true);
    setCurrentTarget(e.currentTarget);
    setTransformValue(
      parseInt(window.getComputedStyle(e.currentTarget).transform.split(",")[4].trim())
    );
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

  const handleTouchStart: TouchEventHandler<HTMLUListElement> = (e) => {
    const width = e.currentTarget.getClientRects()[0].width;
    const perItemWidth = width / carouselData.length;
    setLastMouseDownX(e.touches[0].clientX);
    setOnTouchStart(true);
    setCurrentTarget(e.currentTarget);
    setTransformValue(
      parseInt(window.getComputedStyle(e.currentTarget).transform.split(",")[4].trim())
    );
    setCurrentElementInfo({ width, perItemWidth });
  };
  const handleTouchMove: TouchEventHandler<HTMLUListElement> = (e) => {
    if (onTouchStart && currentTarget && currentElementInfo) {
      const { width: elementWidth, perItemWidth } = currentElementInfo;
      const diffX = e.touches[0].clientX - lastMouseDownX;
      if (
        transformValue + diffX < (perItemWidth * 2) / 3 &&
        transformValue + diffX > -elementWidth + perItemWidth / 3
      ) {
        currentTarget.style.transform = `translateX(${transformValue + diffX}px)`;
        currentTarget.style.transition = `transform 0s ease-in`;
      }
      setLastTouchMoveX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    const diffX = lastTouchMoveX - lastMouseDownX;
    const absDiffX = Math.abs(diffX);
    if (currentTarget && currentElementInfo) {
      const { perItemWidth } = currentElementInfo;
      if (absDiffX > width) {
        const multiple = Math.floor(absDiffX / width);
        const range = absDiffX - width * multiple;
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
              currentTarget.style.transition = `transform 0.5s ease-in`;
              setCarouselIndex((prev) => {
                prev -= multiple + 1;
                return prev;
              });
            }
          } else {
            currentTarget.style.transition = `transform 0.5s ease-in`;
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
            currentTarget.style.transform = `translateX(-${
              perItemWidth * (carouselData.length - 1)
            }px)`;
            currentTarget.style.transition = `transform 0.5s ease-in`;
          } else if (condition) {
            if (carouselIndex + multiple + 1 >= carouselData.length - 1) {
              setCarouselIndex(carouselData.length - 1);
              currentTarget.style.transform = `translateX(-${
                perItemWidth * (carouselData.length - 1)
              }px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            } else {
              currentTarget.style.transition = `transform 0.5s ease-in`;
              setCarouselIndex((prev) => {
                prev += multiple + 1;
                return prev;
              });
            }
          } else {
            currentTarget.style.transition = `transform 0.5s ease-in`;
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
          if (condition && carouselIndex !== 0) {
            setCarouselIndex((prev) => --prev);
            currentTarget.style.transition = `transform 0.5s ease-in`;
          } else {
            currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
            currentTarget.style.transition = `transform 0.5s ease-in`;
          }
        }
        if (diffX < 0) {
          const condition = Math.abs(diffX) / (perItemWidth / 3) >= 1;
          if (condition && carouselIndex !== carouselData.length - 1) {
            currentTarget.style.transition = `transform 0.5s ease-in`;
            setCarouselIndex((prev) => ++prev);
          } else {
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
  // set period time to goto next carousel item
  useEffect(() => {
    if (disableAutoScroll) return;
    let interval: ReturnType<typeof setInterval> | null = null;
    if (!onMouseDown) {
      interval = setInterval(() => {
        handleNext();
      }, scrollDelay);
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
        if (
          transformValue + diffX < (perItemWidth * 2) / 3 &&
          transformValue + diffX > -elementWidth + perItemWidth / 3
        ) {
          currentTarget.style.transform = `translateX(${transformValue + diffX}px)`;
          currentTarget.style.transition = `transform 0s ease-in`;
        }
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      const diffX = e.clientX - lastMouseDownX;
      const absDiffX = Math.abs(diffX);
      if (currentTarget && currentElementInfo) {
        const { perItemWidth } = currentElementInfo;
        if (absDiffX > width) {
          const multiple = Math.floor(absDiffX / width);
          const range = absDiffX - width * multiple;
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
                currentTarget.style.transition = `transform 0.5s ease-in`;
                setCarouselIndex((prev) => {
                  prev -= multiple + 1;
                  return prev;
                });
              }
            } else {
              currentTarget.style.transition = `transform 0.5s ease-in`;
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
              currentTarget.style.transform = `translateX(-${
                perItemWidth * (carouselData.length - 1)
              }px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            } else if (condition) {
              if (carouselIndex + multiple + 1 >= carouselData.length - 1) {
                setCarouselIndex(carouselData.length - 1);
                currentTarget.style.transform = `translateX(-${
                  perItemWidth * (carouselData.length - 1)
                }px)`;
                currentTarget.style.transition = `transform 0.5s ease-in`;
              } else {
                currentTarget.style.transition = `transform 0.5s ease-in`;
                setCarouselIndex((prev) => {
                  prev += multiple + 1;
                  return prev;
                });
              }
            } else {
              currentTarget.style.transition = `transform 0.5s ease-in`;
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
            if (condition && carouselIndex !== 0) {
              setCarouselIndex((prev) => --prev);
              currentTarget.style.transition = `transform 0.5s ease-in`;
            } else {
              currentTarget.style.transform = `translateX(-${perItemWidth * carouselIndex}px)`;
              currentTarget.style.transition = `transform 0.5s ease-in`;
            }
          }
          if (diffX < 0) {
            const condition = Math.abs(diffX) / (perItemWidth / 3) >= 1;
            if (condition && carouselIndex !== carouselData.length - 1) {
              setCarouselIndex((prev) => ++prev);
              currentTarget.style.transition = `transform 0.5s ease-in`;
            } else {
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
  }, [
    width,
    onMouseDown,
    carouselIndex,
    currentTarget,
    lastMouseDownX,
    transformValue,
    currentElementInfo,
  ]);

  return (
    <div style={{ width: width + "px" }} className="relative overflow-hidden">
      <CarouselButton action={handlePrevious}>Previous</CarouselButton>
      <ul
        style={{
          transform: `translateX(-${carouselIndex * width}px)`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={twMerge("flex relative w-max")}>
        {carouselData.map((item) => {
          return (
            <li
              style={{
                width: width + "px",
                height: height + "px",
              }}
              className="hover:cursor-grab active:cursor-grabbing"
              key={item.id}>
              <img
                draggable={false}
                className={twMerge("grow-0 shrink-0 w-full h-full object-cover object-top")}
                src={item.image}
                width={width}
                height={height}
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
        "absolute top-[50%] translate-y-[-50%] text-gray-height bg-black/20 px-1 py-3 hover:bg-black/50 z-[1]",
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
            className={`w-3 h-3 rounded-full ${
              carouselIndex === item.id - 1 ? "bg-primary" : "bg-black/20"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
