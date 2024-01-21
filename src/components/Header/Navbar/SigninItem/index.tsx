"use client";
import Link from "next/link";
import { useContext } from "react";

import { AuthModalContext } from "@/context/AuthModalContext";

const SigninItem = ({ className }: { className?: string }) => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);

  return (
    <li className={"hover:opacity-80" + ` ${className}`}>
      <Link
        onClick={() => {
          setTitle("Đăng nhập");
          handleOpen();
        }}
        href={"#"}
      >
        Đăng nhập
      </Link>
    </li>
  );
};

export default SigninItem;
