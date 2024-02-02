"use client";
import { IProduct } from "@/lib/definitions";
import { createContext, useState } from "react";

interface ICartContext {
  cart: Array<IProduct & { quantities: number }> | null;
  addProductToCart: (product: IProduct, quantities: number) => void;
  updateProductInCart: (productId: number, quantities: number) => void;
  DeleteOneProduct: (productID: number) => void;
  DeleteMultiProduct: (productIDs: number[]) => void;
  DeleteAllProduct: () => void;
}

const CartContext = createContext<ICartContext | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Array<IProduct & { quantities: number }> | null>(null);

  const addProductToCart = (product: IProduct, quantities: number) => {
    const newQuantities = quantities < 1 ? 1 : quantities;

    if (!cart) {
      setCart([{ ...product, quantities: newQuantities }]);
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const newCart = cart.map((item) =>
        item.id === product.id
          ? Object.assign(item, { quantities: item.quantities + newQuantities })
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, Object.assign(product, { quantities: newQuantities })]);
    }
  };

  const updateProductInCart = (productId: number, quantities: number) => {
    const newQuantities = quantities < 1 ? 1 : quantities;
    if (!cart) return;
    const newCart = cart.map((item) =>
      item.id === productId ? Object.assign(item, { quantities: newQuantities }) : item
    );
    setCart(newCart);
  };

  const DeleteOneProduct = (productID: number) => {
    if (!cart) return;
    const newCart = cart.filter((item) => item.id !== productID);
    setCart(newCart);
  };

  const DeleteMultiProduct = (productIDs: number[]) => {
    if (!cart) return;
    const newCart = cart.filter((item) => !productIDs.includes(item.id));
    setCart(newCart);
  };

  const DeleteAllProduct = () => {
    setCart(null);
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
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export { CartContextProvider };
