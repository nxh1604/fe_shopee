import { formatCurrency } from "@/lib/utilies";

const Currency = ({ price }: { price: number }) => {
  const currencyFormat = formatCurrency(price);

  return (
    <span className="first-letter:text-[4px]">
      <span className="text-[10px] relative -top-[2px] underline ">đ</span>
      {currencyFormat}
    </span>
  );
};

export default Currency;
