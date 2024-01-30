import Currency from "@/components/Currency";
import ProductInfo from "../ProductInfo";
import { MdArrowDropDown } from "react-icons/md";

const Product = () => {
  return (
    <li className="flex pl-4 py-4 items-center border-[2px] border-pink-100">
      <ProductInfo />
      <div className="w-[12.5%] text-center">
        <Currency className="flex justify-center" price={1000} />
      </div>
      <div className="w-[12.5%] text-center">Quantity</div>
      <div className="w-[12.5%] ">
        <Currency className="text-primary flex justify-center" price={1000} />
      </div>
      <div className=" flex flex-col items-center w-[12.5%]">
        Xóa
        <span className="text-primary text-center flex items-center gap-1">
          Tìm sản phẩm <br /> tương tự <MdArrowDropDown className="w-5 h-5" />
        </span>
      </div>
    </li>
  );
};

export default Product;
