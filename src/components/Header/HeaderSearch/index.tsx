import { FaCheck, FaSearch } from "react-icons/fa";
import SearchContent from "./SearchContent";

const HeaderSearch = (props: React.PropsWithChildren<{ placeHolder?: string }>) => {
  const { placeHolder } = props;

  return (
    <div className="flex-1 flex rounded-sm gap-1 text-black items-center bg-white p-1">
      <div className="flex-1 relative ">
        <input placeholder={placeHolder ? placeHolder : "Tìm kiếm"} type="text" className="w-full peer p-2 text-base min-w-[300px]" />
        <div className="absolute hidden top-[calc(100%+10px)] peer-focus:flex fade-in-animation rounded flex-col gap-2 bg-white w-full shadow-md">
          <SearchContent />
        </div>
      </div>
      <div className="h-8 w-[1px] bg-gray-300"></div>
      <div className="self-stretch relative text-sm">
        <p className="flex p-2 peer h-full text-nowrap items-center gap-3 pr-2 hover:bg-gray-300">
          Trong shop <FaCheck className="fill-primary" />
        </p>
        <div className=" absolute hidden fade-in-animation top-[calc(100%)] pt-2 hover:flex peer-hover:flex flex-col gap-2 w-full shadow-md">
          <ul className="space-y-1 rounded bg-white">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-300 hover:text-primary">Tìm kiếm áo giáp</li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-300 hover:text-primary">Tìm kiếm mũ khối</li>
          </ul>
        </div>
      </div>
      <button className="bg-[#ff6533] py-3 px-6 rounded-sm shopee-linear-gradient-l hover:opacity-80">
        <FaSearch className="fill-white " />
      </button>
    </div>
  );
};

export default HeaderSearch;
