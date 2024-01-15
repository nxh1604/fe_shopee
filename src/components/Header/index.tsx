import { FaShoppingCart } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";
import ShopeeLogo from "./ShopeeLogo";
import HeaderNavbar from "./Navbar";

const Header = (): JSX.Element => {
  return (
    <header className="*:max-w-[1200px] *:w-full *:min-w-fit *:mx-auto shopee-linear-gradient-b pb-5 text-white">
      <HeaderNavbar />
      <div className="flex justify-between pt-4 pb-2 px-2 items-end gap-5">
        <ShopeeLogo className="fill-white w-[162px]" />
        <HeaderSearch />
        <FaShoppingCart className="w-7 h-7 self-center fill-white hover:opacity-60 hover:cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
