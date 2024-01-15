import { PropsWithChildren } from "react";
import Button from "../Button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoQrCode } from "react-icons/io5";
import Triangle from "../Triangle";
import Link from "next/link";

const ModalOverlay = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 flex items-center justify-center">
      <AuthForm />
    </div>
  );
};

export default ModalOverlay;

const AuthFormWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white py-6 px-8 flex flex-col gap-6 rounded-sm justify-between w-[400px]">
      {children}
    </div>
  );
};

const AuthFormHeader = ({ title }: { title: "Đăng nhập" | "Đăng ký" }) => {
  return (
    <header className="flex gap-2 items-center justify-between">
      <h3 className="text-xl">{title}</h3>
      {title === "Đăng nhập" && (
        <div className="flex items-center gap-3">
          <div className="py-3 px-4 bg-[#fefaec] text-[#ffbf00] border-[#ffbf00] border-2 w-[165px] text-sm relative">
            <p className="font-bold">Đăng nhập với mã QR</p>
            <div
              className="w-[10px] h-[10px] absolute rotate-45 top-[30px] right-[-6px]
       bg-[#fefaec] border-t-2 border-r-2 border-[#ffbf00]"></div>
          </div>
          <IoQrCode className="w-10 h-10 fill-red-600" />
        </div>
      )}
    </header>
  );
};

const AuthFormContent = ({ children }: PropsWithChildren) => {
  return <form className=" text-sm flex flex-col gap-9">{children}</form>;
};

const AuthFormFooter = ({ title }: PropsWithChildren<{ title: "Đăng nhập" | "Đăng ký" }>) => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center">
        <div className="h-[1px] flex-1 bg-gray-300" />
        <p className="text-gray-300">Hoặc đăng ký</p>
        <div className="h-[1px] flex-1 bg-gray-300" />
      </div>

      <div className="flex *:flex-1 gap-2">
        <Button className="flex gap-2 border-2 border-gray-400">
          <FaFacebook className="fill-blue-600 w-6 h-6" /> Facebook
        </Button>
        <Button className="flex gap-2 border-2 border-gray-400">
          <FcGoogle className="w-6 h-6" /> Google
        </Button>
      </div>

      {title === "Đăng ký" && (
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
      )}

      <footer className="text-center text-gray-300 text-sm p-2">
        Bạn mới biết đến Shopee?{" "}
        <Link className="text-primary" href={"#"}>
          Đăng ký
        </Link>
      </footer>
    </>
  );
};

const AuthForm = () => {
  return (
    <AuthFormWrapper>
      <AuthFormHeader title="Đăng nhập" />
      <AuthFormContent>
        <div className="flex flex-col gap-2">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input className="p-3 border-2" placeholder="Email/Tên đăng nhập" id="name" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input className="p-3 border-2" placeholder="Mật khẩu" id="password" type="password" />
        </div>

        <div>
          <Button type="button" className="uppercase py-[10px]" variant="primary" size="full">
            Đăng nhập
          </Button>
          <Link href={"#"} className="block mt-2 text-end text-xs text-[#05a]">
            Quên mật khẩu
          </Link>
        </div>
      </AuthFormContent>

      <AuthFormFooter title="Đăng nhập" />
    </AuthFormWrapper>
  );
};
