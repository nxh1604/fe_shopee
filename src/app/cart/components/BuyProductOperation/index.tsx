"use client";
import { useEffect, useRef } from "react";

const BuyProductOperation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obeserve = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle("stickyBuyCart", e.intersectionRatio < 1);
      },
      { threshold: 1 }
    );
    if (ref.current) {
      obeserve.observe(ref.current);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="m-and-t:flex pr-4 pl-8 py-8 bg-white mt-4 sticky -bottom-[1px] w-full gridLayout grid grid-cols-[62.5%_12.5%_25%] items-center m-and-t:gap-2 m-and-t:justify-between mobile:fixed"
    >
      <button className="m-and-t:block hidden">chọn tất cả</button>
      <div className="m-and-t:hidden">Tổng sản phẩm X</div>
      <div className="text-center">Tổng giá tiền Y</div>
      <div className="flex gap-2 items-center">
        <button className="flex-1 text-nowrap border-[1px] hover:bg-slate-300 border-black px-2 py-2 rounded capitalize mobile:hidden">
          Xóa tất cả
        </button>
        <button className="flex-1 px-2 py-2 bg-primary text-white rounded hover:brightness-125">Mua Hàng</button>
      </div>
    </div>
  );
};

// w-[62.5%]
// w-[12.5%]
// w-[12.5%]
// w-[12.5%]

export default BuyProductOperation;
