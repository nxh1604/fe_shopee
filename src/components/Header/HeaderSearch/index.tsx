import { FaSearch } from "react-icons/fa";

const HeaderSearch = (props: React.PropsWithChildren<{ placeHolder?: string }>) => {
  const { placeHolder } = props;

  return (
    <div className="flex-1 flex gap-1 text-black bg-white p-1">
      <input placeholder={placeHolder ? placeHolder : "Tìm kiếm"} type="text" className="w-full p-2 text-base" />
      <button className="bg-[#ff6533] py-3 px-6 rounded-sm shopee-linear-gradient-l hover:opacity-80">
        <FaSearch className="fill-white " />
      </button>
    </div>
  );
};

export default HeaderSearch;
