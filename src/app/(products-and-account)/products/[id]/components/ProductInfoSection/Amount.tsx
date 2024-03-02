import { ICartItem, IProduct } from "@/lib/definitions";
import { ChangeEvent } from "react";

interface IAmountProps {
  limit: IProduct["limit"];
  quantities: ICartItem["quantities"];
  handleRemoveOneQuantity: () => void;
  handleAddOneQuantity: () => void;
  handleBlurQuantities: (e: ChangeEvent<HTMLInputElement>) => void;
  handleQuantities: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Amount = ({
  limit = 1,
  quantities,
  handleRemoveOneQuantity,
  handleAddOneQuantity,
  handleBlurQuantities,
  handleQuantities,
}: IAmountProps) => {
  return (
    <section className="flex items-center">
      <h3 className="w-[110px] capitalize leading-tight text-[#757575]">Số lượng</h3>
      <div className="items-center gap-4 flex">
        <div className="flex">
          <button onClick={handleRemoveOneQuantity} className="w-[30px] border-[1px]">
            -
          </button>
          <input
            className="text-center border-[1px] w-[50px] py-2"
            type="number"
            min={1}
            required
            max={limit}
            value={quantities === 0 ? "" : quantities}
            onBlur={handleBlurQuantities}
            onChange={handleQuantities}
          />
          <button onClick={handleAddOneQuantity} className="w-[30px] border-[1px]">
            +
          </button>
        </div>
        <span>{limit} sản phẩm có sẵn</span>
      </div>
    </section>
  );
};

export default Amount;
