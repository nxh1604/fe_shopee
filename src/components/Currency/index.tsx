import { formatCurrency } from "@/lib/utilies";
import clsx from "clsx";

const Currency = ({ price, className }: { price: number; className?: string }) => {
  const currencyFormat = formatCurrency(price);

  return (
    <span className={clsx("flex leading-tight", className)}>
      <span className="text-[0.8em] self-start">₫</span>
      <span>{currencyFormat}</span>
    </span>
  );
};

export default Currency;
