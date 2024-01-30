"use client";

import useModalContext from "@/hooks/useModalContext";
import { PropsWithChildren, createContext, Dispatch, SetStateAction, useState } from "react";

export interface ModalContextProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const AuthModalContext = createContext<
  ModalContextProps & { title: "Đăng nhập" | "Đăng ký"; setTitle: Dispatch<SetStateAction<"Đăng nhập" | "Đăng ký">> }
>({
  isOpen: true,
  handleClose: () => {},
  handleOpen: () => {},
  title: "Đăng nhập",
  setTitle: () => {},
});

const AuthModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, handleClose, handleOpen } = useModalContext();
  const [title, setTitle] = useState<"Đăng nhập" | "Đăng ký">("Đăng nhập");

  return <AuthModalContext.Provider value={{ isOpen, handleClose, handleOpen, title, setTitle }}>{children}</AuthModalContext.Provider>;
};

export default AuthModalProvider;

export { AuthModalContext };
