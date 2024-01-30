import { useState } from "react";

const useModalContext = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, handleClose, handleOpen };
};

export default useModalContext;
