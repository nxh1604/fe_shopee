"use client";
import { useState } from "react";
import { IoIosList, IoMdArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const categories = [
  {
    id: "1",
    name: "Sản phẩm",
  },
  {
    id: "2",
    name: "10 Hot",
  },
  {
    id: "3",
    name: "Mẫu mới",
  },
];

const Sidebar = ({ className = "" }: { className?: string }) => {
  const [isActive, setIsActive] = useState<null | string>(null);

  return (
    <aside className={twMerge("w-[16.667%]", className)}>
      <div className="bg-white h-full">
        <h1 className="gap-2 items-center pl-2 flex text-base font-bold py-3 border-b-[1px] border-[#e9e9e9] mb-2">
          <IoIosList />
          Danh Mục
        </h1>
        <ul className="space-y-2 pl-2 pb-5 text-sm">
          {categories.map((category) => {
            return (
              <li
                onClick={() => setIsActive(category.id)}
                key={category.id}
                className={twMerge("flex items-center group relative left-1")}>
                <IoMdArrowDropright
                  className={twMerge(
                    `fill-primary group-hover:opacity-100 mr-1 group-hover:mr-2 transition-[margin-right] ease-linear duration-100 `,
                    `${isActive === category.id ? "opacity-100 mr-2" : "opacity-0"}`
                  )}
                />
                <span
                  className={`group-hover:text-primary ${
                    isActive === category.id && "text-primary"
                  }`}>
                  {category.name}
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
