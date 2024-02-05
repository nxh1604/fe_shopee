"use client";

import { useContext } from "react";
import Product from "./Product";
import CartContext from "@/context/CartContext";
import BuyProductOperation from "../BuyProductOperation";

const CartProducts = () => {
  const { cart, DeleteOneProduct } = useContext(CartContext);

  if (!cart || !cart[0]) return <h1>Empty products</h1>;

  return (
    <>
      <div className="flex h-[55px] bg-white text-[#888888] pr-4 pl-8">
        {tableHeadCartData.map((data) => {
          return (
            <div className="first:w-1/2 my-auto text-center capitalize first:text-start w-[12.5%]" key={data.name}>
              {data.name}
            </div>
          );
        })}
      </div>
      <ul className="mt-4 space-y-4 bg-white p-4">
        {cart?.map((product) => (
          <Product key={product.id} DeleteOneProduct={DeleteOneProduct} product={product} />
        ))}
      </ul>
      <BuyProductOperation />
    </>
  );
};

export default CartProducts;

const tableHeadCartData = [
  {
    name: "sản phẩm",
  },
  {
    name: "đơn giá",
  },
  {
    name: "số lượng",
  },
  {
    name: "số tiền",
  },
  {
    name: "thao tác",
  },
];
