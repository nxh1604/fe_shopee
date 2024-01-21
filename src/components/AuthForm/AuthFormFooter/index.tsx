import Link from "next/link";
import { PropsWithChildren, useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Button from "@/components/Button";
import { AuthModalContext } from "@/context/AuthModalContext";

const AuthFormFooter = ({ title }: PropsWithChildren<{ title: "Đăng nhập" | "Đăng ký" }>) => {
  return (
    <>
      <Separate title={title} />
      <CommonFooter />
      {title === "Đăng nhập" && <SignupFooter />}
      {title === "Đăng ký" && (
        <>
          <SigninPolicy />
          <SigninFooter />
        </>
      )}
    </>
  );
};

const Separate = ({ title }: PropsWithChildren<{ title: "Đăng nhập" | "Đăng ký" }>) => {
  return (
    <div className="flex justify-between gap-4 items-center">
      <div className="h-[1px] flex-1 bg-gray-300" />
      <p className="text-gray-300">Hoặc {title === "Đăng ký" ? "Đăng nhập" : "Đăng ký"}</p>
      <div className="h-[1px] flex-1 bg-gray-300" />
    </div>
  );
};

const CommonFooter = () => {
  return (
    <div className="flex *:flex-1 gap-2">
      <Button className="flex gap-2 border-2 border-gray-400">
        <FaFacebook className="fill-blue-600 w-6 h-6" /> Facebook
      </Button>
      <Button className="flex gap-2 border-2 border-gray-400">
        <FcGoogle className="w-6 h-6" /> Google
      </Button>
    </div>
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

const SigninFooter = () => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);
  return (
    <footer className="text-center text-gray-300 text-sm p-2">
      Bạn đã có tài khoản?{" "}
      <Link
        onClick={() => {
          setTitle("Đăng nhập");
          handleOpen();
        }}
        scroll={false}
        className="text-primary"
        href={"#"}>
        Đăng nhập
      </Link>
    </footer>
  );
};

const SignupFooter = () => {
  const { setTitle, handleOpen } = useContext(AuthModalContext);

  return (
    <footer className="text-center text-gray-300 text-sm p-2">
      Bạn mới biết đến Shopee?{" "}
      <Link
        onClick={() => {
          setTitle("Đăng ký");
          handleOpen();
        }}
        scroll={false}
        className="text-primary"
        href={"#"}>
        Đăng ký
      </Link>
    </footer>
  );
};

export default AuthFormFooter;
