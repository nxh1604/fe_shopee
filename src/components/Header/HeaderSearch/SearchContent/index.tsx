import { DropdownBox, DropdownBoxHeader } from "../../Dropdown/UI";

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
    <ul className="space-y-1">
      <li className="cursor-pointer px-4 py-2 hover:bg-gray-300 hover:text-primary">Tìm kiếm áo giáp</li>
      <li className="px-4 py-2 cursor-pointer hover:bg-gray-300 hover:text-prima">Tìm kiếm mũ khối</li>
    </ul>
  );
};

export default SearchContent;
