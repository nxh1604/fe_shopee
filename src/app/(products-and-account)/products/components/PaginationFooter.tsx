"use client";

import Button from "@/components/Button";
import clsx from "clsx";
// import clsx from "clsx";
// import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function PaginationFooter({ currentPage, maxPage }: { currentPage: number; maxPage: number }): JSX.Element {
  const { push, prefetch } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const array = new Array(maxPage).fill(0);

  const previousNavigateCondition = currentPage <= 1;
  const previousNavigate = currentPage - 1;

  const nextNavigateCondition = currentPage >= maxPage;
  const nextNavigate = currentPage + 1;

  const handleToPage = (toPage: number) => {
    document.getElementById("products-page")?.scrollIntoView({ behavior: "smooth" });
    const params = new URLSearchParams(searchParams);
    params.set("page", `${toPage}`);
    push(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const handleNextPage = () => {
    if (!nextNavigateCondition) {
      document.getElementById("products-page")?.scrollIntoView({ behavior: "smooth" });
      const params = new URLSearchParams(searchParams);
      params.set("page", `${nextNavigate}`);
      push(`${pathName}?${params.toString()}`, { scroll: false });
    }
  };

  const handlePreviousPage = () => {
    if (!previousNavigateCondition) {
      document.getElementById("products-page")?.scrollIntoView({ behavior: "smooth" });
      const params = new URLSearchParams(searchParams);
      params.set("page", `${previousNavigate}`);
      push(`${pathName}?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <nav className="pt-[40px] pb-[60px] flex justify-center items-center gap-8 mobile:gap-0 text-xl text-[#939393]">
      <Button
        aria-disabled={previousNavigateCondition}
        className={clsx(previousNavigateCondition ? "pointer-events-none" : "")}
        variant="unset"
        onClick={handlePreviousPage}
      >
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
      <Button
        aria-disabled={previousNavigateCondition}
        className={clsx(nextNavigateCondition ? "pointer-events-none" : "")}
        variant="unset"
        onClick={handleNextPage}
      >
        <MdOutlineKeyboardArrowRight className="w-8 h-8" />
      </Button>
      {/* <Link
        className={clsx(previousNavigateCondition ? "pointer-events-none" : "")}
        aria-label="previous page"
        aria-disabled={previousNavigateCondition}
        tabIndex={previousNavigateCondition ? -1 : undefined}
        href={`?page=${previousNavigate}`}
        scroll={true}
      >
        <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
      </Link>
      {array.map((_, index) => (
        <Link
          aria-label={`to page ${index + 1}`}
          href={`?page=${index + 1}`}
          key={index}
          className={"w-[40px] h-[30px] text-center leading-[30px]" + ` ${currentPage === index + 1 ? "bg-primary text-white rounded-sm" : ""}`}
          scroll={true}
        >
          {index + 1}
        </Link>
      ))}
      <Link
        aria-label="next page"
        href={`?page=${nextNavigate}`}
        className={clsx(nextNavigateCondition ? "pointer-events-none" : "")}
        aria-disabled={nextNavigateCondition}
        tabIndex={nextNavigateCondition ? -1 : undefined}
        scroll={true}
      >
        <MdOutlineKeyboardArrowRight className="w-8 h-8" />
      </Link> */}
    </nav>
  );
}
