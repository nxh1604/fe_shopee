"use client";

import { AuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";
import { useContext } from "react";

const Signin = () => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);

  return (
    <li className="hover:opacity-60 border-none ">
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

export default Signin;
