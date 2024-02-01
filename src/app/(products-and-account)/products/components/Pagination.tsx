"use client";

import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const SortbarPagination = ({ currentPage, maxPage }: { currentPage: number; maxPage: number }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      const params = new URLSearchParams(searchParams);
      params.set("page", `${currentPage + 1}`);
      router.replace(`${pathName}?${params.toString()}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage >= 2) {
      const params = new URLSearchParams(searchParams);
      if (currentPage - 1 === 1) params.delete("page");
      else params.set("page", `${currentPage - 1}`);
      router.replace(`${pathName}?${params.toString()}`);
    }
  };

  return (
    <div className="flex">
      <Button
        aria-label="Lùi về trang trước"
        onClick={handlePreviousPage}
        className={twMerge(`border-[2px] border-[#e6e6e6]`, "disabled:cursor-default disabled:bg-primaryBgColor")}
        disabled={currentPage < 2}
        size="Xsmall"
      >
        <MdOutlineKeyboardArrowLeft />
      </Button>
      <Button
        onClick={handleNextPage}
        aria-label="Tới trang tiếp theo"
        size="Xsmall"
        className="disabled:cursor-default disabled:bg-primaryBgColor border-[2px] border-l-0 border-[#e6e6e6]"
        disabled={currentPage >= maxPage}
      >
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
};

export { SortbarPagination };
