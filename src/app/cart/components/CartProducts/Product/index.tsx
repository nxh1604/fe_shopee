import Currency from "@/components/Currency";
import ProductInfo from "../ProductInfo";
import { MdArrowDropDown } from "react-icons/md";
import { IProduct } from "@/lib/definitions";
import Button from "@/components/Button";

const Product = ({
  product,
  DeleteOneProduct,
}: {
  DeleteOneProduct: (productId: IProduct["id"]) => void;
  product: IProduct & { quantities: number };
}) => {
  const priceAfterDiscount = product.price * (1 - product.discount / 100);
  const totalPrice = priceAfterDiscount * product.quantities;

  return (
    <li className="flex pl-4 py-4 items-center border-[2px] border-pink-100">
      <ProductInfo title={product.title} src={product.src} id={product.id} />
      <div className="w-[12.5%] text-center">
        <Currency className="flex justify-center" price={priceAfterDiscount} />
      </div>
      <div className="w-[12.5%] text-center">{product.quantities}</div>
      <div className="w-[12.5%] ">
        <Currency className="text-primary flex justify-center" price={totalPrice} />
      </div>
      <div className=" flex flex-col items-center w-[12.5%]">
        <Button onClick={() => DeleteOneProduct(product.id)} variant="unset">
          Xóa
        </Button>
        <Button variant="unset" className="text-primary text-center flex items-center gap-1 relative">
          Tìm sản phẩm <br /> tương tự <MdArrowDropDown className="absolute w-5 h-5 -right-[22px] top-[50%] -translate-y-[50%]" />
        </Button>
      </div>
    </li>
  );
};

export default Product;
