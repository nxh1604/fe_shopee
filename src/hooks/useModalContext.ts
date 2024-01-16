import { useState } from "react";

const useModalContext = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<"Đăng nhập" | "Đăng ký">("Đăng nhập");
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return { isOpen, handleClose, handleOpen, title, setTitle };
};

export default useModalContext;
