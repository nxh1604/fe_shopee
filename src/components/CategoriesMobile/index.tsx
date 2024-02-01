"use client";
import { ICategorySearchParams } from "@/app/(products-and-account)/products/page";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoIosList, IoMdArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const categories = [
  {
    id: 1,
    name: "Sản phẩm",
  },
  {
    id: 2,
    name: "Konosuba",
  },
  {
    id: 3,
    name: "UnknowWorld",
  },
  {
    id: 4,
    name: "Hoa mi khong hot, no se chet",
  },
  {
    id: 5,
    name: "Hoa mi hot, no cung se chet",
  },
];

const CategoriesMobile = ({ category, className = "" }: { className?: string } & ICategorySearchParams) => {
  const { push, prefetch } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleCategories = (category: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (category === 1) newSearchParams.delete("category");
    else if (category) newSearchParams.set("category", `${category}`);

    push(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <aside className={twMerge("pt-5 pb-4", className)}>
      <ul className="flex overflow-x-auto gap-4 gridLayout mobile:mx-1 hide-scroll">
        {categories.map((categoryItem, index) => {
          return (
            <li
              onClick={() => handleCategories(categoryItem.id)}
              key={categoryItem.id}
              className={clsx(
                "shrink-0 text-center text-white min-w-[108px] flex items-center justify-center max-w-[200px] break-all p-2 rounded-2xl",
                {
                  "bg-[#76C9BD]": index % 3 === 0,
                  "bg-[#88CF81]": index % 3 === 2,
                  "bg-[#87AFd8]": index % 3 === 1,
                }
              )}
            >
              {categoryItem.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoriesMobile;
