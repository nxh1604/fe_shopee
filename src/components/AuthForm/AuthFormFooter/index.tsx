"use client";
import Link from "next/link";
import { PropsWithChildren, useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Button from "@/components/Button";
import { AuthModalContext } from "@/context/AuthModalContext";

const AuthFormFooter = ({ title }: PropsWithChildren<{ title: "login" | "signup" }>) => {
  return (
    <>
      <Separate title={title} />
      <CommonFooter title={title} />
    </>
  );
};

const Separate = ({ title }: PropsWithChildren<{ title: "login" | "signup" }>) => {
  return (
    <div className="flex justify-between gap-4 items-center">
      <div className="h-[1px] flex-1 bg-gray-300" />
      <p className="text-gray-300 capitalize">Hoặc {title === "signup" ? "Đăng ký" : "Đăng nhập"}</p>
      <div className="h-[1px] flex-1 bg-gray-300" />
    </div>
  );
};

const CommonFooter = ({ title }: { title: "login" | "signup" }) => {
  return (
    <>
      <div className="flex *:flex-1 gap-2">
        <Button className="flex gap-2 border-2 border-gray-400">
          <FaFacebook className="fill-blue-600 w-6 h-6" /> Facebook
        </Button>
        <Button className="flex gap-2 border-2 border-gray-400">
          <FcGoogle className="w-6 h-6" /> Google
        </Button>
      </div>
      {title === "signup" && <SigninPolicy />}
      <GoToLoginOrSignup title={title} />
    </>
  );
};

const SigninPolicy = () => {
  return (
    <div className="text-center text-xs leading-4">
      Bằng việc đăng kí, bạn đã đồng ý với Shopee về{" "}
      <Link href={"#"} className="text-primary">
        Điều khoản dịch vụ
      </Link>{" "}
      &{" "}
      <Link className="text-primary" href={"#"}>
        Chính sách bảo mật
      </Link>
    </div>
  );
};

const GoToLoginOrSignup = ({ title }: { title: "login" | "signup" }) => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);
  const text = title === "login" ? "Bạn mới biết đến Shopee?" : "Bạn đã có tài khoản?";
  const linkText = title === "login" ? "đăng ký" : "đăng nhập";
  const goToTitle = title === "login" ? "signup" : "login";

  return (
    <p className="text-center text-gray-300 text-sm p-2">
      {text}{" "}
      <Link
        onClick={() => {
          setTitle(goToTitle);
          handleOpen();
        }}
        scroll={false}
        className="text-primary"
        href={"#"}
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFormFooter;
