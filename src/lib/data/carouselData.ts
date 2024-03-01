import { faker } from "@faker-js/faker";

const carouselData = [
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "elephant" }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "cat" }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "dog" }),
  faker.image.urlPicsumPhotos({ width: 500, height: 500, grayscale: true }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "panda" }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "animal" }),
  faker.image.urlLoremFlickr({ width: 500, height: 500, category: "fish" }),
];

export default carouselData;
