"use client";
import { ICategorySearchParams } from "@/app/(products-and-account)/products/page";
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
];

const Sidebar = ({ category, className = "" }: { className?: string } & ICategorySearchParams) => {
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
    <aside className={twMerge("w-[16.667%]", className)}>
      <div className="bg-white h-full">
        <h1 className="gap-2 items-center pl-2 flex text-base font-bold py-3 border-b-[1px] border-[#e9e9e9] mb-2">
          <IoIosList />
          Danh Mục
        </h1>
        <ul className="space-y-2 pl-2 pb-5 text-sm">
          {categories.map((categoryItem) => {
            return (
              <li
                onClick={() => handleCategories(categoryItem.id)}
                key={categoryItem.id}
                className={twMerge("flex items-center group relative left-1")}
              >
                <IoMdArrowDropright
                  className={twMerge(
                    `fill-primary group-hover:opacity-100 mr-1 group-hover:mr-2 transition-[margin-right] ease-linear duration-100 `,
                    `${category === categoryItem.id ? "opacity-100 mr-2" : "opacity-0"}`
                  )}
                />
                <span className={`group-hover:text-primary ${category === categoryItem.id && "text-primary"}`}>{categoryItem.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
