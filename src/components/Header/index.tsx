import { FaShoppingCart } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";
import ShopeeLogo from "./ShopeeLogo";
import HeaderNavbar from "./Navbar";
import { TriangleUp } from "../Triangle";

const Header = (): JSX.Element => {
  return (
    <header className="*:max-w-[1200px] *:w-full *:min-w-fit *:mx-auto shopee-linear-gradient-b pb-5 text-white">
      <HeaderNavbar />
      <div className="flex justify-between pt-4 pb-2 px-2 items-end gap-5">
        <ShopeeLogo className="fill-white w-[162px]" />
        <HeaderSearch />
        <div className="relative">
          <FaShoppingCart className="peer w-7 h-7 self-center fill-white hover:opacity-60 hover:cursor-pointer" />
          <div className=" hidden animate-[headerNotify_0.3s] origin-[calc(100%-20px)_top] will-change-[opacity,_scale] peer-hover:block hover:block absolute top-[100%] pt-4 right-[-25px] w-[400px]">
            <div className="bg-white flex shadow-md flex-col items-center p-16 justify-center relative">
              <TriangleUp className="border-x-[16px] border-y-[8px]" color="white" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className=" max-w-[150px]"
                alt=""
                width={200}
                height={200}
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
              />
              <p className="text-black">Chưa có sản phẩm</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
