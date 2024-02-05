export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {}).format(value);
};

export const roundDigitToThousand = (value: number) => {
  return Math.round(value / 1000) * 1000;
};

export const calculatePriceDiscount = (value: number, discount: number) => {
  return roundDigitToThousand(value - (value * discount) / 100);
};
