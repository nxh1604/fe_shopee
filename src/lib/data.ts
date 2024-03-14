"use server";

import { generateMissingProductProperties } from "./utilies";

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${process.env.FAKESTORE_API_URL}/products`);
    if (!res.ok) {
      throw new Error("failed to fetch products");
    }
    const data = await res.json();
    return generateMissingProductProperties(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [];
    }
    console.log("Something went wrong with the fakestore api get products by limit");
    return [];
  }
};

export const getProductsByLimit = async (limit: number) => {
  try {
    const res = await fetch(`${process.env.FAKESTORE_API_URL}/products?limit=${limit}`);
    if (!res.ok) {
      throw new Error("failed to fetch products");
    }
    const data = await res.json();

    return generateMissingProductProperties(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [];
    }
    console.log("Something went wrong with the fakestore api get products by limit");
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.FAKESTORE_API_URL}/products/categories`);
    if (!res.ok) throw new Error("Can't fetch categories");
    const data = await res.json();
    return ["all", ...data] as Array<string>;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [];
    }
    console.log("Something went wrong with the fakestore api get all categories");
    return [];
  }
};
