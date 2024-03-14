"use client";

import useModalContext from "@/hooks/useModalContext";
import { PropsWithChildren, createContext, Dispatch, SetStateAction, useState } from "react";

export interface ModalContextProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const AuthModalContext = createContext<ModalContextProps & { title: "login" | "signup"; setTitle: Dispatch<SetStateAction<"login" | "signup">> }>({
  isOpen: true,
  handleClose: () => {},
  handleOpen: () => {},
  title: "login",
  setTitle: () => {},
});

const AuthModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, handleClose, handleOpen } = useModalContext();
  const [title, setTitle] = useState<"login" | "signup">("login");

  return <AuthModalContext.Provider value={{ isOpen, handleClose, handleOpen, title, setTitle }}>{children}</AuthModalContext.Provider>;
};

export default AuthModalProvider;

export { AuthModalContext };
