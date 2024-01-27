import { formatCurrency } from "@/lib/utilies";

const Currency = ({ price }: { price: number }) => {
  const currencyFormat = formatCurrency(price);

  return (
    <span className="flex leading-tight">
      <span className="text-[0.8em] self-start">₫</span>
      <span>{currencyFormat}</span>
    </span>
  );
};

export default Currency;
