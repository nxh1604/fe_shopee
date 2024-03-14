import { faker } from "@faker-js/faker";
import { IFakeStoreProducts } from "./definitions";
import translateToVietnamese from "./open-ai";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {}).format(value);
};

export const roundDigitToThousand = (value: number) => {
  return Math.round(value / 1000) * 1000;
};

export const calculatePriceDiscount = (value: number, discount: number) => {
  return roundDigitToThousand(value - (value * discount) / 100);
};

export const caculatePagination = (maxPage: number, currentPage: number) => {
  const totalItems = maxPage > 7 ? 7 : maxPage;
  const pagination = new Array(totalItems).fill(0).map((_, index) => index + 1);
  if (maxPage <= 7) {
    return pagination;
  }
  return pagination.map((number) => {
    if (number === 1) return number;

    if (currentPage >= maxPage - 3) {
      if (number === 3) return maxPage - 4;
      if (number === 4) return maxPage - 3;
      if (number === 5) return maxPage - 2;
      if (number === 6) return maxPage - 1;
    }

    if (currentPage > 4) {
      if (number === 2) return "...";
      if (number === 3) return currentPage - 1;
      if (number === 4) return currentPage;
      if (number === 5) return currentPage + 1;
    } else {
      if (number === 6) return "...";
      if (number === 7) return maxPage;
      return number;
    }

    if (number === 6) return "...";

    if (number === 7) return maxPage;
  });
};

export const convertUSDtoVND = (usd: number) => {
  return roundDigitToThousand(usd * 24697.5);
};

faker.seed(faker.number.int({ max: 1000, min: 0 }));
export const generateSubPhotoWithFakerJs = (category: string, quantities: number) => {
  let subPhotos = [];
  for (let i = 0; i < quantities; i++) {
    subPhotos.push(faker.image.urlLoremFlickr({ width: 500, height: 500, category: category.replace("'s", "").split(" ").join(",") }));
  }
  return subPhotos;
};

export const generateMissingProductProperties = (products: IFakeStoreProducts[]) => {
  const soldPerMonth = faker.number.int({ min: 100, max: 1000 });
  return products.map((product) => {
    return {
      ...product,
      price: convertUSDtoVND(product.price),
      subPhotos: generateSubPhotoWithFakerJs(product.category, faker.number.int({ min: 4, max: 15 })),
      location: faker.location.city(),
      limit: faker.number.int({ min: 1000, max: 20000 }),
      discount: faker.number.int({ min: 0, max: 100 }),
      soldPerMonth: soldPerMonth,
      totalSold: faker.number.int({ min: soldPerMonth, max: 5000 }),
      liked: faker.datatype.boolean(),
      createdAt: faker.date.recent({ days: 30 }),
    };
  });
};
