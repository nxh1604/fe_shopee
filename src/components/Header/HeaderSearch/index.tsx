"use client";
import { FaCheck, FaSearch } from "react-icons/fa";

import SearchContent from "@/components/Header/HeaderSearch/SearchContent";
import { DropdownContent, DropdownControl, DropdownWrapper } from "@/components/Header/Dropdown/WhenHover";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";

const HeaderSearch = (props: React.PropsWithChildren<{ className?: string; placeHolder?: string }>) => {
  const { placeHolder, className } = props;

  return (
    <div onClick={(e) => e.stopPropagation()} className={twMerge("flex-1 flex rounded-sm gap-1 text-black items-center bg-white p-1", className)}>
      <div className="flex-1 relative ">
        <input placeholder={placeHolder ? placeHolder : "Tìm kiếm"} type="text" className="w-full peer p-2 text-base " />
        <div className="absolute hidden z-[1] top-[calc(100%+10px)] peer-focus:flex fade-in-animation rounded flex-col gap-2 bg-white w-full shadow-md">
          <SearchContent />
        </div>
      </div>
      <div className="h-8 w-[1px] bg-gray-300"></div>
      <DropdownWrapper>
        <DropdownControl>
          <p className="flex p-2 h-full text-nowrap items-center gap-3 cursor-pointer hover:bg-gray-300">
            Trong shop <FaCheck className="fill-primary" />
          </p>
        </DropdownControl>
        <DropdownContent className="right-[-40px] left-0 z-[1]">
          <ul className="space-y-1 w-full rounded overflow-hidden bg-white shadow-md">
            <li className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-hoverBgTextColor hover:text-primary">
              Trong shop <FaCheck className="fill-primary" />
            </li>
            <li className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-hoverBgTextColor hover:text-primary">
              Ngoài shop
              {/* <FaCheck className="fill-primary" /> */}
            </li>
          </ul>
        </DropdownContent>
      </DropdownWrapper>
      <Button size="icon" variant="primary" aria-label="Tìm kiếm" className="py-3 px-6 hover:opacity-80">
        <FaSearch className="fill-white" />
      </Button>
    </div>
  );
};

export default HeaderSearch;
