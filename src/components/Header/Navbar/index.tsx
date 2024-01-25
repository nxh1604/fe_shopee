import { twMerge } from "tailwind-merge";
import { FaChevronDown, FaFacebook, FaGlobe, FaInstagram, FaQuestionCircle, FaRegBell } from "react-icons/fa";

import SignUp from "@/components/Header/Navbar//SignupItem";
import Signin from "@/components/Header/Navbar/SigninItem";
import HeaderDropdownNotify from "@/components/Header/Navbar/NotifyContent";
import { DropdownContent, DropdownControl, DropdownWrapper } from "@/components/Header/Dropdown/WhenHover";
import { NavItem, NavItemWithIcon } from "@/components/Header/Navbar/NavbarUI";
import DropdownLanguageContent from "@/components/Header/Navbar/LanguageContent";
import DropdownDowloadContent from "@/components/Header/Navbar/DowloadContent";
import User from "@/components/Header/Navbar/User";

import user from "@/lib/data/userData";
import notifyData from "@/lib/data/notifyData";

const HeaderNavbar = ({ className }: { className?: string }): JSX.Element => {
  return (
    <nav className={twMerge("flex justify-between", className)}>
      <ul className="justify-start flex items-center gap-3 px-2 min-w-fit ">
        <NavItem href={"#"}>Kênh người bán</NavItem>

        {!user && (
          <NavItem className="border-l-2 pl-3 border-slate-300" href={"#"}>
            Trở thành Người bán Shopee
          </NavItem>
        )}

        <DropdownWrapper>
          <DropdownControl>
            <NavItem className="border-l-2 pl-3 border-slate-300" href={"#"}>
              Tải ứng dụng
            </NavItem>
          </DropdownControl>
          <DropdownContent className="left-0 right-[none]">
            <DropdownDowloadContent />
          </DropdownContent>
        </DropdownWrapper>

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

      <ul className="justify-end flex gap-3 px-2  min-w-fit">
        <DropdownWrapper>
          <DropdownControl>
            <NavItemWithIcon className="relative" href="#">
              <FaRegBell className="w-4 h-4 mr-1" /> Thông báo
              {notifyData.filter((item) => item.isRead === false).length > 0 && (
                <span className="absolute -top-2 text-primary border-2 border-red-500 py-[2px] text-xs px-1 leading-[12px] rounded-full bg-white left-[6px]">
                  {notifyData.filter((item) => item.isRead === false).length}
                </span>
              )}
            </NavItemWithIcon>
          </DropdownControl>
          <DropdownContent className="right-0">
            <HeaderDropdownNotify />
          </DropdownContent>
        </DropdownWrapper>

        <NavItemWithIcon href="#">
          <FaQuestionCircle className="w-4 h-4" /> Hỗ trợ
        </NavItemWithIcon>
        <DropdownWrapper>
          <DropdownControl>
            <NavItemWithIcon href="#">
              <FaGlobe className="w-4 h-4" /> Tiếng Việt <FaChevronDown className="w-4 h-4" />
            </NavItemWithIcon>
          </DropdownControl>
          <DropdownContent>
            <DropdownLanguageContent />
          </DropdownContent>
        </DropdownWrapper>
        {user && <User />}
        {!user && (
          <div className="ml-3 gap-3 flex">
            <Signin />
            <SignUp className="border-l-2 pl-3 border-slate-300" />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
