"use client";

import { AuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";
import { useContext } from "react";

const SignUp = () => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);
  return (
    <li className="hover:opacity-60">
      <Link
        onClick={() => {
          setTitle("Đăng ký");
          handleOpen();
        }}
        href={"#"}
      >
        Đăng ký
      </Link>
    </li>
  );
};

export default SignUp;
