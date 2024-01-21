import { DropdownBox, DropdownBoxHeader } from "../../Dropdown/UI";

const inShopOptions = [
  {
    option: "Tìm kiếm áo giáp",
  },
  {
    option: "Tìm kiếm mũ khối",
  },
];

const SearchContent = () => {
  return (
    <DropdownBox>
      <DropdownBoxHeader title="Lịch sử tìm kiếm" />
      <HitorySearch />
    </DropdownBox>
  );
};

const HitorySearch = () => {
  return (
    <ul className="space-y-1 rounded overflow-hidden">
      {inShopOptions.map((option) => {
        return (
          <li className="cursor-pointer px-4 py-2 hover:bg-hoverBgTextColor hover:text-primary" key={option.option}>
            {option.option}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchContent;
