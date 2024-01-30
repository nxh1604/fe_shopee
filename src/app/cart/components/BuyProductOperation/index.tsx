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
    <div ref={ref} className="flex pr-4 pl-8 py-8 bg-white mt-4 items-center sticky -bottom-[1px] w-full gridLayout">
      <div className="w-[62.5%]">Tổng sản phẩm X</div>
      <div className="w-[12.5%] text-center">Tổng giá tiền Y</div>
      <button className="w-[12.5%] border-[1px] hover:bg-slate-300 mr-2 border-black px-2 py-2 rounded capitalize">Xóa tất cả</button>
      <button className="w-[12.5%] px-2 py-2 bg-primary text-white rounded hover:brightness-125">Mua Hàng</button>
    </div>
  );
};

export default BuyProductOperation;
