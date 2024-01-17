"use client";

import { AuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";
import { useContext } from "react";

const SignUpItem = ({ className }: { className?: string }) => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);
  return (
    <li className={"hover:opacity-80" + ` ${className}`}>
      <Link
        onClick={() => {
          setTitle("Đăng ký");
          handleOpen();
        }}
        href={"#"}>
        Đăng ký
      </Link>
    </li>
  );
};

export default SignUpItem;
