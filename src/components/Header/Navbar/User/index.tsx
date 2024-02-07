import Image from "next/image";
import { DropdownContent, DropdownControl, DropdownWrapper } from "@/components/Dropdown";
import { DropdownBox } from "@/components/Header/Dropdown/UI";
import { TriangleUp } from "@/components/Triangle";
import Link from "next/link";

const userAvatarOptions = [
  {
    operation: "Tài khoản của tôi",
    href: "/account",
  },
  {
    href: "/account/order",
    operation: "Đơn mua",
  },
  {
    operation: "Đăng xuất",
  },
];

const userData = {
  userName: "Bocchi The Rock",
};

const User = () => {
  return (
    <DropdownWrapper>
      <DropdownControl>
        <Link href={"/account"} className="flex items-center justify-between gap-2 hover:opacity-80 cursor-pointer">
          <Image
            width={100}
            className="rounded-full w-5 h-5 object-cover border-2 border-[#E7402C]"
            height={100}
            alt="user avatar"
            src={"/img/avatar.jpg"}
          />
          <span className="capitalize">{userData.userName}</span>
        </Link>
      </DropdownControl>
      <DropdownContent>
        <DropdownBox isTriangle className="origin-[calc(100%-40px)_top]">
          <TriangleUp className="right-[40px]" />
          <ul className="w-[150px] bg-white text-black shadow-md rounded-md overflow-hidden">
            {userAvatarOptions.map((option) => {
              return (
                <li className="p-2 cursor-pointer hover:bg-[#fafafa] hover:text-[#46d0bd]" key={option.operation}>
                  {option.href ? <Link href={option.href}>{option.operation}</Link> : option.operation}
                </li>
              );
            })}
          </ul>
        </DropdownBox>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default User;
