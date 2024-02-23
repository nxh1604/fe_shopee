"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  pathName.split("/");
  return (
    <>
      <nav className="bg-slate-300 flex items-stretch overflow-x-auto">
        <Link className={"capitalize p-3 text-sm" + ` ${pathName.includes("history") && "bg-primary text-white"}`} href={"history"}>
          Lịch Sử Order
        </Link>
        <Link className={"capitalize p-3 text-sm" + ` ${pathName.includes("in-progress") && "bg-primary text-white"}`} href={"in-progress"}>
          Order Đang vận chuyển
        </Link>
      </nav>
      <section className="bg-white pt-4 h-full">{children}</section>
    </>
  );
}
