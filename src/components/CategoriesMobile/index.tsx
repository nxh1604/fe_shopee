"use client";
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
  categoriesList: Array<string>;
  getCategory: string;
}) => {
  const { push, prefetch } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleCategories = (category: string) => {
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
              key={categoryItem}
              onClick={() => handleCategories(categoryItem)}
              className={clsx(
                "shrink-0 text-center text-white min-w-[108px] flex items-center justify-center max-w-[200px] break-all p-2 rounded-2xl",
                categoryItem === "all" && "-order-1",
                getCategory === categoryItem && "brightness-[.85]",
                {
                  "bg-[#76C9BD]": index % 3 === 0,
                  "bg-[#88CF81]": index % 3 === 2,
                  "bg-[#87AFd8]": index % 3 === 1,
                }
              )}
            >
              {categoryItem}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoriesMobile;
