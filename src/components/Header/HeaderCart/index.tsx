import { FaShoppingCart } from "react-icons/fa";
import { DropdownContent, DropdownControl, DropdownWrapper } from "../Dropdown/WhenHover";
import DropdownCartContent from "./CartContent";
import cartData from "./cartData";

const HeaderCart = () => {
  return (
    <DropdownWrapper>
      <DropdownControl>
        <FaShoppingCart className="w-7 h-7 self-center fill-white hover:opacity-60 hover:cursor-pointer" />
        {cartData.length > 0 && (
          <span className="absolute top-[-8px] text-primary border-2 border-red-500 py-[2px] text-xs px-1 leading-[12px] rounded-full bg-white right-[-12px]">
            {cartData.length}
          </span>
        )}
      </DropdownControl>
      <DropdownContent className="right-[-20px]">
        <DropdownCartContent />
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default HeaderCart;
