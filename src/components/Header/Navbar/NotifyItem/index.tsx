import { FaRegBell } from "react-icons/fa";
import { DropdownContent, DropdownHover, DropdownWrapper } from "../../DropdownWhenHover";
import { NavItemWithIcon } from "../NavbarUI";
import DropdownNotifyContent from "../../DropdownNotifyContent";

const NotifyItem = () => {
  return (
    <DropdownWrapper>
      <DropdownHover>
        <NavItemWithIcon href="#">
          <FaRegBell className="w-4 h-4" /> Thông báo
        </NavItemWithIcon>
      </DropdownHover>
      <DropdownContent className="right-0">
        <DropdownNotifyContent />
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default NotifyItem;
