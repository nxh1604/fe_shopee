import { TriangleUp } from "@/components/Triangle";
import { DropdownBox } from "../../Dropdown/UI";

const languageOptions = [
  {
    language: "Tiếng Việt",
  },
  {
    language: "English",
  },
];

const DropdownLanguageContent = () => {
  return (
    <DropdownBox isTriangle className="origin-[calc(100%-32px)_top] ">
      <TriangleUp className="right-[32px]" />
      <ul className="w-[180px]">
        {languageOptions.map((option) => (
          <li key={option.language} className="p-2 hover:bg-hoverBgTextColor relative z-1 hover:text-primary cursor-pointer">
            {option.language}
          </li>
        ))}
      </ul>
    </DropdownBox>
  );
};

export default DropdownLanguageContent;
