"use client";

import Currency from "@/components/Currency";
import RatingStar from "@/components/RatingStar";
import CartContext from "@/context/CartContext";
import { IProduct } from "@/lib/definitions";
import clsx from "clsx";
import { ChangeEvent, useContext, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import Delivery from "./Delivery";
import Amount from "./Amount";

const ProductInfoSection = ({ product }: { product: IProduct }) => {
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
      const currentQuantities =
        Math.abs(Number(e.target.value)) > product.limit ? product.limit : Math.abs(Number(e.target.value));
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
    <section className="col-12px flex-1 flex flex-col justify-start gap-8">
      <h2 className="sr-only">Product Information Section</h2>
      <div>
        <div className="font-[500] pb-2 mt-[3px]">
          {product.liked && (
            <span className="mr-3 bg-primary text-white p-1 rounded-sm text-xs relative -top-[3px] capitalize">
              yêu thích
            </span>
          )}
          <div className="inline text-xl leading-[0.75rem]">{product.title}</div>
        </div>
        <div className="flex gap-8 pb-4 mt-[10px]">
          <div className="flex gap-1 items-center">
            <span className="text-primary border-b-2 border-b-primary tracking-wider">{product.rating}</span>
            <RatingStar
              starSize={16}
              starGap={4}
              numOfStars={5}
              ratingStar={product.rating}
              className="relative -top-[1px]"
            />
          </div>
          <div className="capitalize flex gap-1 items-center">
            <span className="tracking-wider border-b-2 border-black">1,1k</span>{" "}
            <span className="text-black/70">Đánh Giá</span>
          </div>
          <div className="capitalize flex gap-1 items-center">
            <span className="tracking-wider">{sold}</span>
            <span className="text-black/70">Đã bán</span>
          </div>
          <div className="ml-auto text-black/70 capitalize">Tố cáo</div>
        </div>
        <div className="bg-primaryBgColor p-3 flex gap-4 items-center rounded-sm">
          {product.discount ? (
            <>
              <del className="text-black/70">
                <Currency price={product.price} />
              </del>
              <div className="uppercase bg-red-500 text-white px-1 rounded-sm text-xs font-bold order-2">
                {product.discount}% giảm
              </div>
            </>
          ) : null}
          <span className="text-3xl text-primary">
            <Currency price={product.price - (product.price * product.discount) / 100} />
          </span>
        </div>
      </div>

      <div className={clsx("pl-3 flex flex-col gap-12 pb-[15px] text-sm")}>
        <Delivery />
        <Amount
          limit={product.limit}
          quantities={quantities}
          handleAddOneQuantity={handleAddOneQuantity}
          handleRemoveOneQuantity={handleRemoveOneQuantity}
          handleBlurQuantities={handleBlurQuantities}
          handleQuantities={handleQuantities}
        />
        {handleError?.addError && <p className="text-red-500">{handleError.addError}</p>}
      </div>
      <div className="pl-3  gap-4 text-sm pb-4 hidden lg:flex">
        <button
          onClick={handleAddCart}
          className="min-w-fit bg-red-100 capitalize w-[200px] hover:opacity-90 text-red-600 border-[1px] px-4 py-3 flex gap-2 items-center border-red-600">
          <GiShoppingCart className="w-6 h-6" />
          Thêm vào giỏ hàng
        </button>
        <button className="text-white w-[200px] bg-red-700 hover:opacity-90 px-4 py-3">Mua ngay</button>
      </div>
      <div className="pl-3 capitalize text-sm border-t-2 border-t-[#888]/20 pt-5">
        Shopee đảm bảo <span className="capitalize ml-4 text-[#888]"># ngày hoàn trả hàng / Hoàn tiền</span>
      </div>
    </section>
  );
};

export default ProductInfoSection;
