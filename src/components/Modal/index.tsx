import { PropsWithChildren } from "react";
import { VscClose } from "react-icons/vsc";

interface ModalOverlayProps extends PropsWithChildren {
  handleClose: () => void;
  isOpen: boolean;
}

const ModalOverlay = ({ children, isOpen, handleClose }: ModalOverlayProps) => {
  return (
    <div
      onClick={handleClose}
      className={`${
        !isOpen && "hidden"
      } fixed bottom-0 top-0 left-0 right-0 bg-black/30 flex items-center justify-center z-50`}>
      {children}
    </div>
  );
};

interface ModalCotentProps extends PropsWithChildren {
  handleClose: () => void;
}

const ModalContent = ({ children, handleClose }: ModalCotentProps) => {
  return (
    <div
      className="relative animate-[ModalAnimate_0.2s] will-change-[opacity] "
      onClick={(e) => e.stopPropagation()}>
      <VscClose
        onClick={handleClose}
        className="absolute w-6 h-6 top-0 right-0 p-1 cursor-pointer hover:bg-slate-200"
      />
      {children}
    </div>
  );
};

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  handleOpen?: () => void;
  handleClose: () => void;
}

const Modal = ({ children, isOpen = false, handleClose }: ModalProps) => {
  return (
    <ModalOverlay handleClose={handleClose} isOpen={isOpen}>
      <ModalContent handleClose={handleClose}>{children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
