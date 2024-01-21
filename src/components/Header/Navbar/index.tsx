import { FaChevronDown, FaFacebook, FaGlobe, FaInstagram, FaQuestionCircle, FaRegBell } from "react-icons/fa";

import SignUp from "@/components/Header/Navbar//SignupItem";
import Signin from "@/components/Header/Navbar/SigninItem";
import HeaderDropdownNotify from "./NotifyContent";
import { DropdownContent, DropdownControl, DropdownWrapper } from "../Dropdown/WhenHover";
import { NavItem, NavItemWithIcon } from "./NavbarUI";
import DropdownLanguageContent from "./LanguageContent";
import DropdownDowloadContent from "./DowloadContent";
import notifyData from "./NotifyContent/notifyData";
import User from "./User";

export const user = false;

const HeaderNavbar = (): JSX.Element => {
  return (
    <nav className="py-2 flex justify-between ">
      <ul className="justify-start flex items-center gap-3 px-2 min-w-fit ">
        <NavItem href={"#"}>Kênh người bán</NavItem>

        <NavItem className="border-l-2 pl-3 border-slate-300" href={"#"}>
          Trở này Người bán Shopee
        </NavItem>

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
