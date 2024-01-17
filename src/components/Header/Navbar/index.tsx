import {
  FaChevronDown,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaQuestionCircle,
  FaRegBell,
} from "react-icons/fa";

import SignUp from "@/components/Header/Navbar//SignupItem";
import Signin from "@/components/Header/Navbar/SigninItem";
import HeaderDropdownNotify from "../Dropdown/NotifyContent";
import { DropdownContent, DropdownHover, DropdownWrapper } from "../Dropdown/WhenHover";
import { NavItem, NavItemWithIcon } from "./NavbarUI";
import DropdownLanguageContent from "../Dropdown/LanguageContent";
import DropdownDowloadContent from "../Dropdown/DowloadContent";

const HeaderNavbar = (): JSX.Element => {
  return (
    <nav className=" text-nowrap py-2 flex justify-between text-sm">
      <ul className="justify-start flex items-center gap-3 px-2">
        <NavItem href={"#"}>Kênh người bán</NavItem>

        <NavItem className="border-l-2 pl-3 border-slate-300" href={"#"}>
          Trở này Người bán Shopee
        </NavItem>

        <DropdownWrapper>
          <DropdownHover>
            <NavItem className="border-l-2 pl-3 border-slate-300" href={"#"}>
              Tải ứng dụng
            </NavItem>
          </DropdownHover>
          <DropdownContent className="right-[50%] translate-x-[50%]">
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
          <DropdownContent>
            <DropdownLanguageContent />
          </DropdownContent>
        </DropdownWrapper>

        <div className="ml-3 gap-3 flex">
          <Signin />
          <SignUp className="border-l-2 pl-3 border-slate-300" />
        </div>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
