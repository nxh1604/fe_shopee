import { IoQrCode } from "react-icons/io5";

const AuthFormHeader = ({ title }: { title: "Đăng nhập" | "Đăng ký" }) => {
  return (
    <header className="flex gap-2 items-center justify-between">
      <h3 className="text-xl">{title}</h3>
      {title === "Đăng nhập" && <HeaderSignin />}
    </header>
  );
};

const HeaderSignin = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="py-3 px-4 bg-[#fefaec] text-[#ffbf00] border-[#ffbf00] border-2 w-[165px] text-sm relative">
        <p className="font-bold">Đăng nhập với mã QR</p>
        <div className="w-[10px] h-[10px] absolute rotate-45 top-[30px] right-[-6px] bg-[#fefaec] border-t-2 border-r-2 border-[#ffbf00]"></div>
      </div>
      <IoQrCode className="w-10 h-10 fill-red-600" />
    </div>
  );
};

export default AuthFormHeader;
