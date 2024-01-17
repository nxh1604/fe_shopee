import { FaShoppingCart } from "react-icons/fa";
import { DropdownContent, DropdownHover, DropdownWrapper } from "../Dropdown/WhenHover";
import DropdownCartContent from "../Dropdown/CartContent";

const HeaderCart = () => {
  return (
    <DropdownWrapper>
      <DropdownHover>
        <FaShoppingCart className="w-7 h-7 self-center fill-white hover:opacity-60 hover:cursor-pointer" />
        <span className="absolute top-[-8px] text-primary border-2 border-red-500 py-[2px] text-xs px-1 leading-[12px] rounded-full bg-white right-[-12px]">
          3
        </span>
      </DropdownHover>
      <DropdownContent className="right-[-20px]">
        <DropdownCartContent />
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default HeaderCart;
