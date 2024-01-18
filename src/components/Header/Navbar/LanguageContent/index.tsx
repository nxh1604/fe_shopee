import { DropdownBox } from "../../Dropdown/UI";

const DropdownLanguageContent = () => {
  return (
    <DropdownBox isTriangle className="right-[32px]">
      <ul className="w-[180px]">
        <li className="p-2 hover:bg-gray-300 relative z-1 hover:text-primary cursor-pointer">Tiếng Việt</li>
        <li className="p-2 hover:bg-gray-300 relative z-1 hover:text-primary cursor-pointer">English</li>
      </ul>
    </DropdownBox>
  );
};

export default DropdownLanguageContent;
