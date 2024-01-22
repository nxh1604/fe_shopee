import { formatCurrency } from "@/lib/utilies";

const Currency = ({ price }: { price: number }) => {
  const currencyFormat = formatCurrency(price);

  return (
    <span className="first-letter:text-[4px] flex items-center">
      <u className="text-[10px] ">₫</u>
      {currencyFormat}
    </span>
  );
};

export default Currency;
