/* eslint-disable @next/next/no-img-element */

import ProductInfoSection from "./components/ProductInfoSection";
import ProductImageSection from "./components/ProductImageSection";
import { productsData } from "../page";
import BreadCrums from "@/components/BreadCrums";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = productsData.filter((product) => product.id === id)[0];

  if (!product) return <h1 className="text-red-500">Product not found!</h1>;

  return (
    <div className="m-and-t:[margin-top:calc(var(--header-mobile-height))] w-full overflow-hidden flex-1 bg-primaryBgColor ">
      <main id="products-page" className="py-8 m-and-t:p-0 h-full w-full">
        <div className="lg:gridLayout pb-2 m-and-t:pt-2 mobile:hidden lg:relative xl:-left-10 tablet:ml-10 lg:left-0 ">
          <BreadCrums productTitle={product.title} />
        </div>
        <div className="gridLayout bg-white lg:p-4">
          <section className="lg:row-12px">
            <h1 className="sr-only">{product.title}</h1>
            <ProductImageSection product={product} />
            <ProductInfoSection product={product} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
