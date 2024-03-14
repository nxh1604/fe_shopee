/* eslint-disable @next/next/no-img-element */

import ProductInfoSection from "./components/ProductInfoSection";
import ProductImageSection from "./components/ProductImageSection";
import BreadCrums from "@/components/BreadCrums";
import RatingStar from "@/components/RatingStar";
import Image from "next/image";
import PaginationFooter from "../components/PaginationFooter";
import { getAllProducts } from "@/lib/data";
import translateToVietnamese from "@/lib/open-ai";

const Page = async ({ params, searchParams }: { params: { id: string }; searchParams: { [key: string]: string } }) => {
  const { id } = params;
  const { page } = searchParams;
  const currentPage = page && Number(page) > 0 ? Number(page) : 1;
  const productsData = await getAllProducts();
  const product = productsData.filter((product) => product.id === Number(id))[0];
  const translatedDescription = await translateToVietnamese(product.description);
  const keys = Object.keys(keyPair[0]);
  const values = Object.values(keyPair[0]);
  if (!product) return <h1 className="text-red-500">Product not found!</h1>;

  return (
    <div className="m-and-t:[margin-top:calc(var(--header-mobile-height))] w-full overflow-hidden flex-1 bg-primaryBgColor ">
      <main id="products-page" className="pt-8 pb-4 m-and-t:p-2 h-full w-full space-y-4">
        <div className="gridLayout pb-4 m-and-t:pb-2 m-and-t:pt-2 mobile:hidden lg:relative mx-auto">
          <BreadCrums productTitle={product.title} />
        </div>
        <div className="gridLayout bg-white p-4 rounded-md">
          <section className="lg:gap-4 lg:flex">
            <h1 className="sr-only">{product.title}</h1>
            <ProductImageSection className="xl:w-[500px] lg:w-[450px] tablet:w-[550px] w-full mx-auto" product={product} />
            <ProductInfoSection className="flex-1 flex flex-col justify-start gap-8" product={product} />
          </section>
        </div>
        <div className="gridLayout bg-white lg:p-4  rounded-md">
          {!product.detail ? null : (
            <section className="p-2">
              <h2 className="text-lg py-2 px-4 uppercase bg-primaryBgColor">CHI TIẾT SẢN PHẨM</h2>
              <ul className="px-4 mt-6 space-y-2">
                {keys.map((key, index) => (
                  <li className="flex gap-4" key={key}>
                    <label className="w-[180px] line-clamp-1 text-[#888]">{key}</label>
                    <div className="flex-1">{values[index]}</div>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {product.description ? (
            <section className="p-2">
              <h2 className="text-lg py-2 px-4 uppercase bg-primaryBgColor">MÔ TẢ SẢN PHẨM</h2>
              <p className="px-4 mt-6 leading-7">{translatedDescription}</p>
            </section>
          ) : null}
        </div>
        <div id="comments-section" className="gridLayout bg-white lg:p-4  rounded-md">
          <section className="p-2">
            <h2 className="text-lg py-2 px-4 uppercase ">ĐÁNH GIÁ SẢN PHẨM</h2>
            <div className="flex bg-primary/5 px-6 py-8 gap-11">
              <div className="text-lg text-primary text-center font-[500] space-y-2">
                <span className="text-3xl">{product.rating.rate}</span> trên 5
                <RatingStar ratingStar={product.rating.rate} starSize={24} />
              </div>
              <div className="flex-1 flex gap-2 flex-wrap *:border-2 *:border-primary items-start">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem ipsum, dolor sit amet consectetur.</p>
              </div>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <PaginationFooter scrollToElementId="comments-section" className="pt-4 pb-01" maxPage={10} currentPage={currentPage} />
          </section>
        </div>
      </main>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="flex gap-3 pb-4 border-b-2 border-b-black/10 mt-4">
      <Image className="rounded-full w-[50px] h-[50px] object-cover" src={"/img/avatar.jpg"} height={100} width={100} alt="" />
      <div className="space-y-4">
        <div className="space-y-1 ">
          <p>Account Name</p>
          <RatingStar ratingStar={5} />
          <p>{Date()}</p>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, rerum!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <p>Lorem ipsum, dolor sit amet consectetur.</p>
        <p>Content</p>
        <ul className="flex gap-2">
          <li>Image1</li>
          <li>Image2</li>
          <li>Image3</li>
        </ul>
        <button className="mt-5">Like</button>
      </div>
      <button className="ml-auto self-end">Bao cao</button>
    </div>
  );
};

const keyPair = [
  {
    "Danh Mục": " ",
    "Chiều rộng phù hợp": "Có",
    "Loại Khóa": "Khóa dây",
    "Loại da": "Da lộn",
    "Tên tổ chức chịu trách nhiệm": "avishop",
    "Địa chỉ tổ chức chịu trách nhiệm": "Số 165C đường ngũ nhạc, HN",
  },
];

export default Page;
