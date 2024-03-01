import HeaderSearch from "./HeaderSearch";
import Link from "next/link";
import ShopeeLogo from "../ShopeeLogo";
import HeaderNavbar from "./Navbar";
import HeaderCart from "./HeaderCart";
import HeaderSearchMobile from "./HeaderSearchMobile";
import HeaderMenuBar from "./HeaderMenuBar";
import HeaderWrapper from "./HeaderWrapper";

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <header className="bg-gradient-shopee-b text-white text-sm">
        <HeaderNavbar className="gridLayout m-and-t:hidden pt-2 pb-2" />
        <div className="lg:gridLayout m-and-t:h-full">
          <div className="flex gap-4 w-full m-and-t:h-full pt-2 pb-3 tablet:py-4 mobile:pt-5 items-end mobile:items-center mobile:justify-between mobile:px-5">
            <HeaderMenuBar classNameMenu="text-center mobile:flex-1 mobile:text-start hidden mobile:block" />
            <Link className="lg:flex-1 mobile:relative mobile:-top-[6px] tablet:hidden mobile:w-[150px] " aria-label="home" href={"/"}>
              <ShopeeLogo className="fill-white w-full" />
            </Link>
            <div className="flex-[5] mobile:justify-end flex items-center mobile:self-stretch mobile:gap-5">
              <HeaderSearch className="flex-[5] mobile:hidden tablet:flex-[10] tablet:w-full tablet:gridLayout" />
              <HeaderMenuBar classNameMenu="-order-1 flex-1 text-center hidden tablet:block" />
              <HeaderSearchMobile className="-order-1 hidden mobile:block" />
              <HeaderCart classNameWrapper="flex-1 mobile:flex-initial flex justify-center" classNameShoppingCartIcon="mobile:mx-0" />
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Header;
