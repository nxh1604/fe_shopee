import clsx from "clsx";
import Image from "next/image";
import { BiPencil } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";

const SidebarAccount = ({ className }: { className?: string }) => {
  return (
    <aside className={clsx("flex flex-col text-sm", className)}>
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
        <li className="">
          <h3 className="flex items-center gap-1 pb-2">
            <FaRegUser className="w-8 fill-blue-500" />
            Tai Khoan cua toi
          </h3>
          <ul className="pl-9 space-y-2">
            <li>Ho so</li>
            <li>Doi mat kau</li>
          </ul>
        </li>
        <li className="flex gap-1 items-center">
          <TbNotes className="w-8 stroke-blue-500" />
          Order
        </li>
      </ul>
    </aside>
  );
};

export default SidebarAccount;
