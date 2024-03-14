"use client";
import Link from "next/link";
import ShopeeLogo from "../ShopeeLogo";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const ShopeeLogoForPath = ({ type = "auth" }: { type: "auth" | "cart" }) => {
  const pathName = usePathname().split("/").at(-1);
  const path = pathName === "login" ? "đăng nhập" : pathName === "signup" ? "đăng ký" : pathName === "cart" ? "giỏ hàng" : "default";

  return (
    <Link className="min-w-1/6 items-end pr-6 flex mobile:px-4" aria-label="home" href={"/"}>
      <ShopeeLogo className="fill-primary max-h-[46px] pr-4" />
      <span
        className={clsx("capitalize p-[2px]  border-l-[1px] border-primary pl-4", {
          "text-black text-2xl": type === "auth",
          "text-primary text-xl ": type === "cart",
        })}
      >
        {path}
      </span>
    </Link>
  );
};

export default ShopeeLogoForPath;
