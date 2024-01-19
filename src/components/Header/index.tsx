import HeaderSearch from "./HeaderSearch";
import ShopeeLogo from "../ShopeeLogo";
import HeaderNavbar from "./Navbar";
import HeaderCart from "./HeaderCart";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="*:max-w-[1200px] *:w-full *:min-w-fit *:mx-auto bg-gradient-shopee-b pb-5 text-white text-sm">
      <HeaderNavbar />
      <div className="flex justify-between pt-4 pb-2 px-2 items-end gap-5">
        <Link href={"#"}>
          <ShopeeLogo className="fill-white w-[162px]" />
        </Link>
        <HeaderSearch />
        <HeaderCart />
      </div>
    </header>
  );
};

export default Header;
