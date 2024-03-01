"use client";
import clsx from "clsx";
import { subscribe } from "diagnostics_channel";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiPencil } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";

const navigateData = [
  {
    name: "Tài khoản của tôi",
    href: "/account/profile",
    icon: "user",
    subNavigate: [
      {
        name: "Hồ sơ",
        href: "/account/profile",
      },
      {
        name: "Đổi mật khẩu",
        href: "/account/password",
      },
    ],
  },
  {
    name: "Đơn mua",
    href: "/account/order",
    icon: "order",
    subNavigate: [],
  },
];

const SidebarAccount = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  return (
    <aside className={className}>
      <div className="flex py-4 items-center border-b-2 gap-3 border-b-slate-200/80">
        <Image
          src={"/img/avatar.jpg"}
          width={50}
          height={50}
          alt="user image"
          className="rounded-full w-[50px] h-[50px] object-cover border-[1px] border-black/50 mr-2"
        />
        <div className="flex flex-col gap-1">
          <span className="font-bold">UserName</span>
          <span className="flex items-center gap-[2px] text-[#888]">
            <BiPencil /> EditProfile
          </span>
        </div>
      </div>
      <ul className="space-y-2 flex-1 mt-7">
        {navigateData.map((data) => {
          return (
            <li className={clsx()} key={data.name}>
              <Link
                className={clsx(pathName === data.href && data.subNavigate.length === 0 && "text-primary", "flex items-center gap-1 pb-2")}
                key={data.name}
                href={data.href}
              >
                {data.icon === "user" && <FaRegUser className="w-8 fill-blue-500" />}
                {data.icon === "order" && <TbNotes className="w-8 stroke-blue-500" />}
                {data.name}
              </Link>
              {data.subNavigate.length > 0 ? (
                <div className={clsx(data.subNavigate.length > 0 && "overflow-hidden")}>
                  <ul
                    className={clsx(
                      "pl-12 space-y-2 transition-all duration-150 ease-linear",
                      data.subNavigate.map((item) => item.href).includes(pathName)
                        ? "opacity-100 translate-y-0 h-full"
                        : "opacity-0 -translate-y-[100px] h-[0px]"
                    )}
                  >
                    {data.subNavigate.map((subData) => (
                      <li className={clsx(pathName === subData.href && "text-primary")} key={subData.name}>
                        <Link href={subData.href}>{subData.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SidebarAccount;
