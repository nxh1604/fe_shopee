"use client";
import { PropsWithChildren, createContext } from "react";
import { ModalContextProps } from "./AuthModalContext";
import useModalContext from "@/hooks/useModalContext";

const ImageContext = createContext<ModalContextProps>({
  isOpen: false,
  handleClose: () => {},
  handleOpen: () => {},
});

const ImageContextProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, handleClose, handleOpen } = useModalContext();

  return <ImageContext.Provider value={{ isOpen, handleOpen, handleClose }}>{children}</ImageContext.Provider>;
};

export default ImageContext;
export { ImageContextProvider };
