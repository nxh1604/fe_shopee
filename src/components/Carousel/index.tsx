/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

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
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-[600px] h-[300px] overflow-hidden">
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-[50%] translate-y-[-50%] bg-black/20 px-1 py-3 hover:bg-black/50 z-[1]">
        Previous
      </button>
      <ul
        className={twMerge(
          "flex w-max transition-all duration-300",
          carouselIndex === 0 && "-translate-x-0",
          carouselIndex === 1 && "-translate-x-[12.5%]",
          carouselIndex === 2 && "-translate-x-[25%]",
          carouselIndex === 3 && "-translate-x-[37.5%]",
          carouselIndex === 4 && "-translate-x-[50%]",
          carouselIndex === 5 && "-translate-x-[62.5%]",
          carouselIndex === 6 && "-translate-x-[75%]",
          carouselIndex === 7 && "-translate-x-[87.5%]"
        )}>
        {carouselData.map((item) => {
          return (
            <img
              key={item.id}
              className={twMerge(
                "min-w-0 grow-0 shrink-0 w-[600px] h-[300px] object-cover object-top"
              )}
              src={item.image}
              width={600}
              height={300}
              alt="carousel"
            />
          );
        })}
      </ul>
      <button
        onClick={handleNext}
        className="absolute right-0 top-[50%] translate-y-[-50%] bg-black/20 px-1 py-3 hover:bg-black/50 z-[1]">
        Next
      </button>

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
    </div>
  );
};

export default Carousel;

const carouselData = [
  {
    id: 1,
    image: "https://placewaifu.com/image/100",
  },
  {
    id: 2,
    image: "https://placewaifu.com/image/200",
  },
  {
    id: 3,
    image: "https://placewaifu.com/image/330",
  },
  {
    id: 4,
    image: "https://placewaifu.com/image/400",
  },
  {
    id: 5,
    image: "https://placewaifu.com/image/500",
  },
  {
    id: 6,
    image: "https://placewaifu.com/image/800",
  },
  {
    id: 7,
    image: "https://placewaifu.com/image/1200",
  },
  {
    id: 8,
    image: "https://placewaifu.com/image/1000",
  },
];
