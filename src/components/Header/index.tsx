import HeaderSearch from "./HeaderSearch";
import ShopeeLogo from "../ShopeeLogo";
import HeaderNavbar from "./Navbar";
import HeaderCart from "./HeaderCart";
import Link from "next/link";
import ProductsSortBar from "@/app/products/components/ProductsSortBar";
import HeaderSearchMobile from "./HeaderSearchMobile";
import HeaderMenuBar from "./HeaderMenuBar";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="bg-gradient-shopee-b text-white text-sm m-and-t:[height:var(--header-mobile-height)] m-and-t:flex m-and-t:items-center m-and-t:pb-0 m-and-t:fixed m-and-t:fixed-top-all-width m-and-t:z-50">
        <HeaderNavbar className="gridLayout m-and-t:hidden pt-2 pb-2" />
        <div className="gridLayout pt-4 pb-7 w-full flex gap-2 justify-between items-end mobile:items-center mobile:px-3">
          <Link className="tablet:hidden w-1/6 pr-6 mobile:w-[162px] mobile:pr-0" aria-label="home" href={"/"}>
            <ShopeeLogo className="fill-white w-full" />
          </Link>
          <HeaderSearch className="mobile:hidden" />
          <div className="-order-1 items-center gap-4 self-stretch hidden m-and-t:flex">
            <HeaderMenuBar />
            <HeaderSearchMobile className="hidden mobile:block" />
          </div>
          <HeaderCart classNameShoppingCartIcon="mobile:mx-0" />
        </div>
      </header>
      <div className="shadow bg-white top-[var(--header-mobile-height)] [height:var(--products-mobile-sort-bar)] fixed z-10 fixed-all-width w-full hidden m-and-t:block">
        <ProductsSortBar className="gridLayout items-stretch h-full justify-between flex gap-0 *:border-l-[1px] *:border-black/20 *:flex-1" />
      </div>
    </>
  );
};

export default Header;
