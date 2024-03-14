"use client";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoIosList, IoMdArrowDropright } from "react-icons/io";

const Sidebar = ({ categoriesList, getCategory, className = "" }: { className?: string; categoriesList: Array<string>; getCategory?: string }) => {
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
    <aside className={className}>
      <div className="bg-white h-full">
        <h1 className="gap-2 items-center pl-2 flex text-base font-bold py-3 border-b-[1px] border-[#e9e9e9] mb-2">
          <IoIosList />
          Danh Mục
        </h1>
        {!categoriesList.length ? (
          <div className="h-[200px] flex items-center justify-center capitalize">No categories</div>
        ) : (
          <ul className="gap-2 pl-2 pb-5 text-sm flex flex-col">
            {categoriesList.map((categoryItem) => {
              return (
                <li
                  onClick={() => handleCategories(categoryItem)}
                  key={categoryItem}
                  className={clsx("flex items-center group relative left-1", categoryItem === "all" && "-order-1")}
                >
                  <IoMdArrowDropright
                    className={clsx(
                      `fill-primary group-hover:opacity-100 mr-1 group-hover:mr-2 transition-[margin-right] ease-linear duration-100 `,
                      `${getCategory === categoryItem ? "opacity-100 mr-2" : "opacity-0"}`
                    )}
                  />
                  <span className={`group-hover:text-primary capitalize ${getCategory === categoryItem && "text-primary"}`}>{categoryItem}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
