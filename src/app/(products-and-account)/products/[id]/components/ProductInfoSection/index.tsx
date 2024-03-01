"use client";

import Currency from "@/components/Currency";
import RatingStar from "@/components/RatingStar";
import CartContext from "@/context/CartContext";
import { IProduct } from "@/lib/definitions";
import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent, useContext, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const ProductInfoSection = ({ product, className }: { product: IProduct; className: string }) => {
  const { addProductToCart } = useContext(CartContext);
  const [blurValue, setBlurValue] = useState<number>(1);
  const [quantities, setQuantities] = useState<number>(1);
  const [handleError, setHandleError] = useState<{ [key: string]: string } | null>(null);
  const sold =
    product.totalSold > 1000
      ? product.totalSold % 1000 === 0
        ? product.totalSold / 1000 + "k"
        : (product.totalSold / 1000).toFixed(1).replace(".", ",") + "k"
      : product.totalSold;

  const handleAddOneQuantity = () => {
    setQuantities((prev) => (prev + 1 > product.limit ? prev : ++prev));
  };

  const handleRemoveOneQuantity = () => {
    setQuantities((prev) => (prev - 1 < 1 ? prev : --prev));
  };

  const handleBlurQuantities = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setQuantities(blurValue);
    }
  };

  const handleQuantities = (e: ChangeEvent<HTMLInputElement>) => {
    if ("0" === e.target.value) return;
    if (["", "-", "+"].includes(e.target.value)) {
      setBlurValue(quantities);
      setQuantities(0);
    } else {
      const currentQuantities = Math.abs(Number(e.target.value)) > product.limit ? product.limit : Math.abs(Number(e.target.value));
      setQuantities(currentQuantities);
    }
  };

  const handleAddCart = () => {
    try {
      addProductToCart(product, quantities);
    } catch (err: Error | any) {
      setHandleError({ addError: err.message });
    }
  };

  return (
    <section className={className}>
      <h2 className="sr-only">Product Information Section</h2>
      <div>
        <div className="font-[500] pb-2 mt-[3px] tablet:text-center tablet:py-5 mobile:py-4">
          {product.liked && <span className="mr-3 bg-primary text-white p-1 rounded-sm text-xs relative -top-[3px] capitalize">yêu thích</span>}
          <div className="inline text-xl leading-[0.75rem]">{product.title}</div>
          {product.discount && (
            <div className="uppercase bg-red-500 text-white px-1 rounded-sm text-xs font-bold order-2 hidden mobile:block mobile:w-fit mt-2">
              {product.discount}% giảm
            </div>
          )}
        </div>
        <div className="flex gap-8 pb-4 mt-[10px] m-and-t:hidden">
          <div className="flex gap-1 items-center">
            <span className="text-primary border-b-2 border-b-primary tracking-wider">{product.rating}</span>
            <RatingStar starSize={16} starGap={4} numOfStars={5} ratingStar={product.rating} className="relative -top-[1px]" />
          </div>
          <div className="capitalize flex gap-1 items-center">
            <span className="tracking-wider border-b-2 border-black">1,1k</span> <span className="text-black/70">Đánh Giá</span>
          </div>
          <div className="capitalize flex gap-1 items-center">
            <span className="tracking-wider">{sold}</span>
            <span className="text-black/70">Đã bán</span>
          </div>
          <div className="ml-auto text-black/70 capitalize">Tố cáo</div>
        </div>
        <div className="bg-primaryBgColor p-3 flex gap-4 items-center rounded-sm mobile:justify-between mobile:gap-2">
          {product.discount ? (
            <>
              <del className="text-black/70">
                <Currency price={product.price} />
              </del>
              <div className="uppercase bg-red-500 text-white px-1 rounded-sm text-xs font-bold order-2 mobile:hidden">{product.discount}% giảm</div>
            </>
          ) : null}
          <span className="text-3xl text-primary">
            <Currency price={product.price - (product.price * product.discount) / 100} />
          </span>
        </div>
      </div>

      <div className={clsx("pl-3 flex flex-col gap-6 pb-[15px] text-sm", sections.length < 3 ? "justify-around" : "justify-between")}>
        {sections.map((section) => (
          <section className={clsx("flex", section.section.toLowerCase() !== "vận chuyển" && "items-center")} key={section.section}>
            <h3 className="w-[110px] capitalize leading-tight text-[#757575]">{section.section}</h3>
            {section.section.toLowerCase() === "vận chuyển" && (
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <Image className="w-[30px] h-[30px] object-contain" width={50} height={50} alt="" src="/img/freeship.png" />
                  <p>Miễn phí vận chuyển</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaTruck className="w-5 h-5" />
                  <span>Vận chuyển tới</span>
                  <button>Vị trí</button>
                </div>
                <div className="flex gap-2">
                  <span>Phí vận chuyển</span>
                  <span>Giá vận chuyển</span>
                </div>
              </div>
            )}

            {section.section.toLowerCase() === "số lượng" && (
              <div className="flex items-center gap-4">
                <div className="flex">
                  <button onClick={handleRemoveOneQuantity} className="w-[30px] border-[1px]">
                    -
                  </button>
                  <input
                    className="text-center border-[1px] w-[50px] py-2"
                    type="number"
                    min={1}
                    required
                    max={product.limit}
                    value={quantities === 0 ? "" : quantities}
                    onBlur={handleBlurQuantities}
                    onChange={handleQuantities}
                  />
                  <button onClick={handleAddOneQuantity} className="w-[30px] border-[1px]">
                    +
                  </button>
                </div>
                <span>{product.limit} sản phẩm có sẵn</span>
              </div>
            )}
          </section>
        ))}
        {handleError?.addError && <p className="text-red-500">{handleError.addError}</p>}
      </div>
      <div className="pl-3 flex gap-4 text-sm pb-4 m-and-t:fixed m-and-t:bottom-0 m-and-t:right-0 m-and-t:left-0 m-and-t:bg-white m-and-t:flex m-and-t:justify-center m-and-t:py-5 m-and-t:px-4 m-and-t:shadow-[0_-5px_5px_#0002] m-and-t:gap-8">
        <button
          onClick={handleAddCart}
          className="min-w-fit bg-red-100 capitalize w-[200px] hover:opacity-90 text-red-600 border-[1px] px-4 py-3 flex gap-2 items-center border-red-600 m-and-t:flex-1 m-and-t:w-auto"
        >
          <GiShoppingCart className="w-6 h-6 m-and-t:hidden" />
          Thêm vào giỏ hàng
        </button>
        <button className="text-white w-[200px] bg-red-700 hover:opacity-90 px-4 py-3 m-and-t:flex-1 m-and-t:w-auto m-and-t:-order-1">
          Mua ngay
        </button>
      </div>
      <div className="pl-3 capitalize text-sm border-t-2 border-t-[#888]/20 pt-5">
        Shopee đảm bảo <span className="capitalize ml-4 text-[#888]"># ngày hoàn trả hàng / Hoàn tiền</span>
      </div>
    </section>
  );
};

export default ProductInfoSection;

const sections = [
  // { section: "Mã giảm giá của shop" },
  // { section: "Combo Khuyến Mãi" },
  { section: "Vận Chuyển" },
  // { section: "Màu Sắc" },
  { section: "Số Lượng" },
];
