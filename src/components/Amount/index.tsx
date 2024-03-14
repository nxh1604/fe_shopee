"use client";
import CartContext from "@/context/CartContext";
import { IProduct } from "@/lib/definitions";
import { ChangeEvent, Ref, forwardRef, useContext, useEffect, useState } from "react";

interface IAmountProps {
  updateProduct?: { id: number | null; state: boolean };
  currentQuantities?: number;
  showLimit: boolean;
  limit: IProduct["limit"];
  showTitle: boolean;
}

const Amount = forwardRef(
  (
    { updateProduct = { id: null, state: false }, currentQuantities, limit = 1, showLimit = true, showTitle = true }: IAmountProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [blurValue, setBlurValue] = useState<number>(1);
    const [quantities, setQuantities] = useState(currentQuantities || 1);
    const { updateProductInCart } = useContext(CartContext);
    const handleAddOneQuantity = () => {
      setQuantities((prev) => (prev + 1 > limit ? prev : ++prev));
    };

    const handleRemoveOneQuantity = () => {
      setQuantities((prev) => (prev - 1 < 1 ? prev : --prev));
    };

    const handleBlurQuantities = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        setQuantities(blurValue);
      }
    };

    const handleQuantities = (e: ChangeEvent<HTMLInputElement>) => {
      if ("0" === e.target.value) return;
      if (["", "-", "+"].includes(e.target.value)) {
        setBlurValue(quantities);
        setQuantities(0);
      } else {
        const currentQuantities = Math.abs(Number(e.target.value)) > limit ? limit : Math.abs(Number(e.target.value));
        setQuantities(currentQuantities);
      }
    };

    useEffect(() => {
      if (updateProduct.state && updateProduct.id) {
        updateProductInCart(updateProduct.id, quantities);
      }
    }, [quantities]);

    return (
      <section className="flex items-center">
        {showTitle && <h3 className="w-[110px] capitalize leading-tight text-[#757575]">Số lượng</h3>}
        <div className="items-center gap-4 flex">
          <div className="flex">
            <button onClick={handleRemoveOneQuantity} className="w-[30px] border-[1px]">
              -
            </button>
            <input
              ref={ref}
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
          {showLimit ? <span>{limit} sản phẩm có sẵn</span> : null}
        </div>
      </section>
    );
  }
);

Amount.displayName = "Amount";

export default Amount;
