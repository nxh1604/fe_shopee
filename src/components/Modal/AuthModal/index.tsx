"use client";
import { useContext } from "react";

import { AuthModalContext } from "@/context/AuthModalContext";
import Modal from "@/components/Modal";
import AuthForm from "@/components/AuthForm";

const AuthModal = () => {
  const { isOpen, handleClose, title } = useContext(AuthModalContext);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <AuthForm title={title} />
    </Modal>
  );
};

export default AuthModal;
