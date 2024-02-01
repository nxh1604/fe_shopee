import { FaShoppingCart } from "react-icons/fa";

import DropdownCartContent from "@/components/Header/HeaderCart/CartContent";
import user from "@/lib/data/userData";
import cartData from "@/lib/data/cartData";
import clsx from "clsx";
import { DropdownContent, DropdownControl, DropdownWrapper } from "@/components/Dropdown";
import Link from "next/link";

const HeaderCart = ({
  classNameWrapper,
  classNameControl,
  classNameShoppingCartIcon,
}: {
  classNameWrapper?: string;
  classNameControl?: string;
  classNameShoppingCartIcon?: string;
}) => {
  return (
    <DropdownWrapper className={classNameWrapper}>
      <DropdownControl className={clsx("relative hover:cursor-pointer m-and-t:block hidden", classNameControl)}>
        <FaShoppingCart className={clsx("w-7 h-7 self-center fill-white hover:cursor-pointer", classNameShoppingCartIcon)} />
        {user && cartData.length > 0 && (
          <span className="absolute top-[-8px] text-primary border-2 border-red-500 py-[2px] text-xs px-1 leading-[12px] rounded-full bg-white right-[calc(40%-24px)]">
            {cartData.length}
          </span>
        )}
      </DropdownControl>
      <DropdownControl className={clsx("relative hover:cursor-pointer m-and-t:hidden block", classNameControl)}>
        <Link href={"/cart"}>
          <FaShoppingCart className={clsx("w-7 h-7 self-center fill-white hover:cursor-pointer", classNameShoppingCartIcon)} />
          {user && cartData.length > 0 && (
            <span className="absolute top-[-8px] text-primary border-2 border-red-500 py-[2px] text-xs px-1 leading-[12px] rounded-full bg-white right-[calc(40%-24px)]">
              {cartData.length}
            </span>
          )}
        </Link>
      </DropdownControl>
      <DropdownContent className="right-[calc(50%-34px)] top-[calc(100%+4px)] m-and-t:fixed m-and-t:pt-0 m-and-t:fixed-all-width m-and-t:top-[var(--header-mobile-height)]">
        <DropdownCartContent />
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default HeaderCart;
