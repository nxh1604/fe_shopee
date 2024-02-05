import { IProduct } from "@/lib/definitions";
import { faker } from "@faker-js/faker";

let productsData: IProduct[] = [];

const subPickPhotos = [
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "elephant" }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "cat" }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "dog" }),
  faker.image.urlPicsumPhotos({ width: 500, height: 500, grayscale: true }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "panda" }),
];

const categoriesList = [
  {
    id: faker.string.uuid(),
    category: "elephant",
  },
  {
    id: faker.string.uuid(),
    category: "cat",
  },
  {
    id: faker.string.uuid(),
    category: "dog",
  },
  {
    id: faker.string.uuid(),
    category: "grayscale",
  },
  {
    id: faker.string.uuid(),
    category: "panda",
  },
  {
    id: faker.string.uuid(),
    category: "all",
  },
];

for (let i = 0; i < 100; i++) {
  const randomNumber = faker.number.int({ min: 0, max: 4 });
  let subPhotos = [];
  for (let j = 0; j < faker.number.int({ min: 4, max: 10 }); j++) {
    subPhotos.push(subPickPhotos[faker.number.int({ min: 0, max: 4 })]);
  }

  productsData.push({
    id: i.toString(),
    photo: subPickPhotos[randomNumber],
    subPhotos,
    title: faker.lorem.words({ min: 3, max: 10 }),
    categories: [categoriesList[randomNumber].category],
    rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
    discount: faker.number.int({ min: 0, max: 100 }),
    price: Math.round(faker.number.int({ min: 1000, max: 50000000 }) / 1000) * 1000,
    totalSold: faker.number.int({ min: 0, max: 5000 }),
    soldPerMonth: faker.number.int({ min: 0, max: 500 }),
    shop: faker.location.state(),
    location: faker.location.city(),
    createdAt: faker.date.recent({ days: 30 }),
  });
}

export { categoriesList, productsData };
