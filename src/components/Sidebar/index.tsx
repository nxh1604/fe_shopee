"use client";
import { ICategory, IProduct } from "@/lib/definitions";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoIosList, IoMdArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const Sidebar = ({
  categoriesList,
  getCategory,
  className = "",
}: {
  className?: string;
  categoriesList: ICategory[];
  getCategory?: IProduct["categories"][0];
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
    <aside className={twMerge("w-[16.667%]", className)}>
      <div className="bg-white h-full">
        <h1 className="gap-2 items-center pl-2 flex text-base font-bold py-3 border-b-[1px] border-[#e9e9e9] mb-2">
          <IoIosList />
          Danh Mục
        </h1>
        <ul className="gap-2 pl-2 pb-5 text-sm flex flex-col">
          {categoriesList.map((categoryItem) => {
            return (
              <li
                onClick={() => handleCategories(categoryItem.category)}
                key={categoryItem.id}
                className={clsx(
                  "flex items-center group relative left-1",
                  categoryItem.category === "all" && "-order-1"
                )}>
                <IoMdArrowDropright
                  className={clsx(
                    `fill-primary group-hover:opacity-100 mr-1 group-hover:mr-2 transition-[margin-right] ease-linear duration-100 `,
                    `${getCategory === categoryItem.category ? "opacity-100 mr-2" : "opacity-0"}`
                  )}
                />
                <span
                  className={`group-hover:text-primary capitalize ${
                    getCategory === categoryItem.category && "text-primary"
                  }`}>
                  {categoryItem.category}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
