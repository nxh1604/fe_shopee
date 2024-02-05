"use client";
import { IProduct } from "@/lib/definitions";
import { createContext, useState } from "react";

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
  const [cart, setCart] = useState<Array<IProduct & { quantities: number }> | null>(null);

  console.log(cart);

  const addProductToCart = (product: IProduct, quantities: number) => {
    const newQuantities = quantities < 1 ? 1 : quantities;

    if (!cart) {
      setCart([{ ...product, quantities: newQuantities }]);
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const newCart = cart.map((item) => (item.id === product.id ? Object.assign(item, { quantities: item.quantities + newQuantities }) : item));
      setCart(newCart);
    } else {
      setCart([...cart, Object.assign(product, { quantities: newQuantities })]);
    }
  };

  const updateProductInCart = (productId: IProduct["id"], quantities: number) => {
    const newQuantities = quantities < 1 ? 1 : quantities;
    if (!cart) return;
    const newCart = cart.map((item) => (item.id === productId ? Object.assign(item, { quantities: newQuantities }) : item));
    setCart(newCart);
  };

  const DeleteOneProduct = (productID: IProduct["id"]) => {
    if (!cart) return;
    const newCart = cart.filter((item) => item.id !== productID);
    setCart(newCart);
  };

  const DeleteMultiProduct = (productIDs: IProduct["id"][]) => {
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export { CartContextProvider };
