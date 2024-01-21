import Image from "next/image";
import { DropdownContent, DropdownControl, DropdownWrapper } from "@/components/Header/Dropdown/WhenHover";
import { DropdownBox } from "@/components/Header/Dropdown/UI";
import { TriangleUp } from "@/components/Triangle";

const userAvatarOptions = [
  {
    operation: "Tài khoản của tôi",
  },
  {
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
        <div className="flex items-center justify-between gap-2 hover:opacity-80 cursor-pointer">
          <Image
            width={100}
            className="rounded-full w-5 h-5 object-cover border-2 border-[#E7402C]"
            height={100}
            alt="user avatar"
            src={"/img/avatar.jpg"}
          />
          <span className="capitalize">{userData.userName}</span>
        </div>
      </DropdownControl>
      <DropdownContent>
        <DropdownBox isTriangle className="origin-[calc(100%-40px)_top]">
          <TriangleUp className="right-[40px]" />
          <ul className="w-[150px] bg-white text-black shadow-md ">
            {userAvatarOptions.map((option) => {
              return (
                <li className="p-2 cursor-pointer hover:bg-[#fafafa] hover:text-[#46d0bd]" key={option.operation}>
                  {option.operation}
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
