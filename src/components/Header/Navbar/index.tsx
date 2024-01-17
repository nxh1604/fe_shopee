import { FaChevronDown, FaFacebook, FaGlobe, FaInstagram, FaQuestionCircle, FaRegBell } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import SignUp from "@/components/Header/Navbar//Signup";
import Signin from "@/components/Header/Navbar/Signin";
import { TriangleUp } from "@/components/Triangle";
import HeaderDropdownNotify from "../DropdownNotifyContent";
import { DropdownContent, DropdownHover, DropdownWrapper } from "../DropdownWhenHover";
import DowloadAppItem from "./DowloadAppItem";
import { NavItem, NavItemWithIcon } from "./NavbarUI";

interface IHeaderLink {
  title: string;
  link: string;
}

const links: IHeaderLink[] = [
  {
    title: "Kênh người bán",
    link: "#",
  },
  {
    title: "Trở này Người bán Shopee",
    link: "#",
  },
  {
    title: "Tải ứng dụng",
    link: "#",
  },
];

const HeaderNavbar = (): JSX.Element => {
  return (
    <nav className=" text-nowrap py-2 flex justify-between text-sm">
      <ul className="justify-start flex items-center gap-3 px-2">
        {links.map((link) => {
          if (link.title === "Tải ứng dụng") return <DowloadAppItem key={link.title} title={link.title} href={link.link} />;

          return (
            <NavItem key={link.title} className="border-l-2 pl-3 border-slate-300 first:border-none first:pl-0" href={link.link}>
              {link.title}
            </NavItem>
          );
        })}
        <div className="flex gap-2 border-l-2 pl-3 border-slate-300 items-center">
          <span className="mr-1">Kết nối</span>
          <NavItem href="#">
            <abbr title="facebook">
              <FaFacebook className="w-4 h-4" />
            </abbr>
          </NavItem>
          <NavItem href="#">
            <abbr title="instagram">
              <FaInstagram className="w-4 h-4" />
            </abbr>
          </NavItem>
        </div>
      </ul>

      <ul className="justify-end flex gap-3 px-2">
        <DropdownWrapper>
          <DropdownHover>
            <NavItemWithIcon href="#">
              <FaRegBell className="w-4 h-4" /> Thông báo
            </NavItemWithIcon>
          </DropdownHover>
          <DropdownContent className="right-0">
            <HeaderDropdownNotify />
          </DropdownContent>
        </DropdownWrapper>

        <NavItemWithIcon href="#">
          <FaQuestionCircle className="w-4 h-4" /> Hỗ trợ
        </NavItemWithIcon>
        <DropdownWrapper>
          <DropdownHover>
            <NavItemWithIcon href="#">
              <FaGlobe className="w-4 h-4" /> Tiếng Việt <FaChevronDown className="w-4 h-4" />
            </NavItemWithIcon>
          </DropdownHover>
          <DropdownContent className="right-0">
            <ul className="text-sm text-black shadow relative w-[180px] header-notify-animation bg-white">
              <TriangleUp className="z-[100] border-x-[16px] border-y-[8px] " color="white" />
              <li className="p-2 hover:bg-gray-300 relative z-1 hover:text-primary text-sm cursor-pointer">Tiếng Việt</li>
              <li className="p-2 hover:bg-gray-300 relative z-1 hover:text-primary text-sm cursor-pointer">English</li>
            </ul>
          </DropdownContent>
        </DropdownWrapper>

        <div className="gap-3 flex">
          <Signin />
          <SignUp className="border-l-2 pl-3 border-slate-300" />
        </div>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
