"use client";
import { IProduct } from "@/lib/definitions";
import { createContext, useEffect, useState } from "react";

interface ICartContext {
  cart: Array<IProduct & { quantities: number }> | null;
  addProductToCart: (product: IProduct, quantities: number) => void;
  updateProductInCart: (productId: IProduct["id"], quantities: number) => void;
  DeleteOneProduct: (productID: IProduct["id"]) => void;
  DeleteMultiProduct: (productIDs: IProduct["id"][]) => void;
  DeleteAllProduct: () => void;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  addProductToCart: () => {},
  updateProductInCart: () => {},
  DeleteAllProduct: () => {},
  DeleteMultiProduct: () => {},
  DeleteOneProduct: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [cart, setCart] = useState<Array<IProduct & { quantities: number }> | null>(null);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      const data = window.localStorage.getItem("cart");
      const initialData = data ? JSON.parse(data) : null;
      setCart(initialData);
    }
  }, [isMounted]);

  const addProductToCart = (product: IProduct, quantities: number) => {
    const newQuantities = quantities < 1 ? 1 : quantities;

    if (!cart) {
      setCart([{ ...product, quantities: newQuantities }]);
      window.localStorage.setItem("cart", JSON.stringify([{ ...product, quantities: newQuantities }]));
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const newCart = cart.map((item) => (item.id === product.id ? Object.assign(item, { quantities: item.quantities + newQuantities }) : item));
      setCart(newCart);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      setCart([...cart, Object.assign(product, { quantities: newQuantities })]);
      window.localStorage.setItem("cart", JSON.stringify([...cart, Object.assign(product, { quantities: newQuantities })]));
    }
  };

  const updateProductInCart = (productId: IProduct["id"], quantities: number) => {
    const newQuantities = quantities < 1 ? 1 : quantities;
    if (!cart) return;
    const newCart = cart.map((item) => (item.id === productId ? Object.assign(item, { quantities: newQuantities }) : item));
    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const DeleteOneProduct = (productID: IProduct["id"]) => {
    if (!cart) return;
    const newCart = cart.filter((item) => item.id !== productID);
    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const DeleteMultiProduct = (productIDs: IProduct["id"][]) => {
    if (!cart) return;
    const newCart = cart.filter((item) => !productIDs.includes(item.id));
    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const DeleteAllProduct = () => {
    setCart(null);
    window.localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        DeleteAllProduct,
        DeleteOneProduct,
        DeleteMultiProduct,
        updateProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export { CartContextProvider };
