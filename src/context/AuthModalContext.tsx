"use client";

import useModalContext from "@/hooks/useModalContext";
import { PropsWithChildren, createContext, Dispatch, SetStateAction } from "react";

interface ModalContextProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  title: "Đăng nhập" | "Đăng ký";
  setTitle: Dispatch<SetStateAction<"Đăng nhập" | "Đăng ký">>;
}

const AuthModalContext = createContext<ModalContextProps>({
  isOpen: true,
  handleClose: () => {},
  handleOpen: () => {},
  title: "Đăng nhập",
  setTitle: () => {},
});

const AuthModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, handleClose, handleOpen, title, setTitle } = useModalContext();

  return <AuthModalContext.Provider value={{ isOpen, handleClose, handleOpen, title, setTitle }}>{children}</AuthModalContext.Provider>;
};

export default AuthModalProvider;

export { AuthModalContext };
