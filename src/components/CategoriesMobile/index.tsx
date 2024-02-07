"use client";
import { ICategory } from "@/lib/definitions";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const CategoriesMobile = ({
  categoriesList,
  getCategory,
  className = "",
}: {
  className?: string;
  categoriesList: ICategory[];
  getCategory: ICategory["category"];
}) => {
  const { push, prefetch } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleCategories = (category: ICategory["category"]) => {
    const newSearchParams = new URLSearchParams(searchParams);

    const page = newSearchParams.get("page");

    if (category === "all") {
      newSearchParams.delete("category");
    } else {
      newSearchParams.set("category", `${category}`);
    }
    if (page) {
      newSearchParams.delete("page");
    }

    push(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <aside className={twMerge("pt-5 pb-4", className)}>
      <ul className="flex overflow-x-auto gap-4 gridLayout mobile:mx-1 hide-scroll">
        {categoriesList.map((categoryItem, index) => {
          return (
            <li
              key={categoryItem.id}
              onClick={() => handleCategories(categoryItem.category)}
              className={clsx(
                "shrink-0 text-center text-white min-w-[108px] flex items-center justify-center max-w-[200px] break-all p-2 rounded-2xl",
                categoryItem.category === "all" && "-order-1",
                getCategory === categoryItem.category && "brightness-[.85]",
                {
                  "bg-[#76C9BD]": index % 3 === 0,
                  "bg-[#88CF81]": index % 3 === 2,
                  "bg-[#87AFd8]": index % 3 === 1,
                }
              )}
            >
              {categoryItem.category}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoriesMobile;
