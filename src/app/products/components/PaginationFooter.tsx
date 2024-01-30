"use client";
import Button from "@/components/Button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function PaginationFooter({ currentPage, maxPage }: { currentPage: number; maxPage: number }): JSX.Element {
  const { push, prefetch } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const array = new Array(maxPage).fill(0);

  const handleToPage = (toPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (toPage === 1) params.delete("page");
    else params.set("page", `${toPage}`);
    push(`${pathName}?${params.toString()}#products-page`, { scroll: true });
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      const params = new URLSearchParams(searchParams);
      params.set("page", `${currentPage + 1}`);
      push(`${pathName}?${params.toString()}#products-page`, { scroll: true });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage >= 2) {
      const params = new URLSearchParams(searchParams);
      if (currentPage - 1 === 1) params.delete("page");
      else params.set("page", `${currentPage - 1}`);
      push(`${pathName}?${params.toString()}#products-page`, { scroll: true });
    }
  };

  return (
    <nav className="pt-[40px] pb-[60px] flex justify-center items-center gap-8 mobile:gap-0 text-xl text-[#939393]">
      <Button className="disabled:cursor-auto" variant="unset" onClick={handlePreviousPage} disabled={currentPage <= 1}>
        <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
      </Button>
      {array.map((_, index) => (
        <Button
          variant="unset"
          onClick={() => handleToPage(index + 1)}
          key={index}
          className={"w-[40px] h-[30px] text-center leading-[30px]" + ` ${currentPage === index + 1 ? "bg-primary text-white rounded-sm" : ""}`}
        >
          {index + 1}
        </Button>
      ))}
      <Button className="disabled:cursor-auto" variant="unset" onClick={handleNextPage} disabled={currentPage >= maxPage}>
        <MdOutlineKeyboardArrowRight className="w-8 h-8" />
      </Button>
    </nav>
  );
}
