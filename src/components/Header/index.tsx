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
      <HeaderNavbar className="gridLayout m-and-t:hidden pt-2 pb-2" />
      <div className="lg:gridLayout m-and-t:h-full">
        <div className="lg:row-12px w-full m-and-t:h-full mobile:flex pt-2 pb-3 tablet:py-4 mobile:pt-5 items-end mobile:items-center mobile:justify-between mobile:px-5">
          <HeaderMenuBar classNameMenu="text-center mobile:flex-1 mobile:text-start hidden mobile:block" />
          <Link
            className="lg:col-12px mobile:relative mobile:-top-[6px] tablet:hidden w-1/6 mobile:w-[150px] pr-6 mobile:pr-0"
            aria-label="home"
            href={"/"}>
            <ShopeeLogo className="fill-white w-full" />
          </Link>
          <div className="lg:col-12px flex-1 m-and-t:flex-1 mobile:justify-end flex items-center mobile:self-stretch mobile:gap-5">
            <HeaderSearch className="mobile:hidden w-4/5 tablet:w-full tablet:gridLayout" />
            <HeaderMenuBar classNameMenu="-order-1 flex-1 text-center hidden tablet:block" />
            <HeaderSearchMobile className="-order-1 hidden mobile:block" />
            <HeaderCart
              classNameWrapper="lg:w-1/5 tablet:flex-1 flex justify-center"
              classNameShoppingCartIcon="mobile:mx-0"
            />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
