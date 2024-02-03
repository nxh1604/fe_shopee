import HeaderSearch from "@/components/Header/HeaderSearch";
import HeaderNavbar from "@/components/Header/Navbar";
import ShopeeLogo from "@/components/ShopeeLogo";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="text-sm m-and-t:[height:var(--header-mobile-height)] m-and-t:flex m-and-t:items-center m-and-t:pb-0 m-and-t:fixed m-and-t:fixed-top-all-width m-and-t:z-50">
        <div className="bg-gradient-shopee-b text-white">
          <HeaderNavbar className="gridLayout m-and-t:hidden pt-2 pb-2" />
        </div>
        <div className="shadow pt-2">
          <div className="gridLayout pt-4 pb-7 w-full flex gap-2 justify-between items-end ">
            <Link className="tablet:hidden min-w-1/6 pr-6 mobile:w-[162px] mobile:pr-0 flex items-end" aria-label="home" href={"/"}>
              <ShopeeLogo className="fill-primary flex-1 max-h-[46px] w-full pr-4" />
              <span className="text-xl capitalize p-[2px] text-primary border-l-[1px] border-primary pl-4">giỏ hàng</span>
            </Link>
            <HeaderSearch className="mobile:hidden w-1/2 border-2 border-primary p-[2px]" />
          </div>
        </div>
      </header>
      <div className="m-and-t:[margin-top:calc(var(--header-mobile-height)_+_var(--products-mobile-sort-bar))] w-full">
        <main className="bg-primaryBgColor py-8 w-full min-h-[100vh]">{children}</main>
      </div>
    </>
  );
}
