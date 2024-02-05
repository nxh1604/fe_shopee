/* eslint-disable @next/next/no-img-element */

import ProductInfoSection from "./components/ProductInfoSection";
import ProductImageSection from "./components/ProductImageSection";
import { productsData } from "../page";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = productsData.filter((product) => product.id === id)[0];

  if (!product) return <h1 className="text-red-500">Product not found!</h1>;

  return (
    <>
      <div className="gridLayout">Bread Crums</div>
      <div className="gridLayout bg-white p-4">
        <section className="row-12px">
          <h1 className="sr-only">{product.title}</h1>
          <ProductImageSection product={product} />
          <ProductInfoSection product={product} />
        </section>
      </div>
    </>
  );
};

export default Page;
