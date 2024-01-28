"use client";

import { FaShoppingCart } from "react-icons/fa";

import DropdownCartContent from "@/components/Header/HeaderCart/CartContent";
import user from "@/lib/data/userData";
import cartData from "@/lib/data/cartData";
import clsx from "clsx";
import { DropdownContent, DropdownControl, DropdownWrapper } from "@/components/Dropdown";
import Link from "next/link";

const HeaderCart = ({ classNameShoppingCartIcon }: { classNameShoppingCartIcon?: string }) => {
  return (
    <DropdownWrapper>
      <DropdownControl>
        <Link href={"/cart"}>
          <FaShoppingCart className={clsx("w-7 h-7 self-center fill-white hover:cursor-pointer mx-5", classNameShoppingCartIcon)} />
          {user && cartData.length > 0 && (
            <span className="absolute top-[-8px] text-primary border-2 border-red-500 py-[2px] text-xs px-1 leading-[12px] rounded-full bg-white right-[calc(40%-20px)]">
              {cartData.length}
            </span>
          )}
        </Link>
      </DropdownControl>

      <DropdownContent className="m-and-t:fixed m-and-t:pt-0 m-and-t:fixed-all-width m-and-t:top-[var(--header-mobile-height)]">
        <DropdownCartContent />
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default HeaderCart;
