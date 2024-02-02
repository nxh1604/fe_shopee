"use client";

/* eslint-disable @next/next/no-img-element */
import Currency from "@/components/Currency";
import ImageModal from "@/components/Modal/ImageModal";
import RatingStar from "@/components/RatingStar";
import ImageContext from "@/context/ImageModalContext";
import productsData from "@/lib/data/productsData";
import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaHeart,
  FaPinterest,
  FaRegHeart,
  FaTruck,
  FaTwitter,
} from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const index = parseInt(id) - 1;
  const product = productsData[index];
  const { handleOpen } = useContext(ImageContext);

  if (!product) return <h1 className="text-red-500">Product not found!</h1>;

  const src = product.src.startsWith("https") ? product.src : `/${product.src}`;

  const sold =
    product.sold > 1000
      ? product.sold % 1000 === 0
        ? product.sold / 1000 + "k"
        : (product.sold / 1000).toFixed(1).replace(".", ",") + "k"
      : product.sold;

  return (
    <>
      <ImageModal />
      <div className="gridLayout">Bread Crums</div>
      <div className="gridLayout bg-white p-4">
        <section className="row-12px">
          <h1 className="sr-only">{product.title}</h1>
          <section className="col-12px w-5/12">
            <h2 className="sr-only">Product Image Section</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              onClick={handleOpen}
              className="w-[500px] h-[500px] border-2 hover:cursor-pointer border-primary rounded-sm object-contain object-center"
              width={400}
              height={400}
              src={src}
              alt=""></img>
            <div className="relative mt-4">
              <button
                aria-label="previous image"
                className="text-white absolute left-0 top-[50%] hover:bg-black/50 translate-y-[-50%] bg-black/5 py-2">
                <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
              </button>
              <ul className="flex gap-2 *:w-1/5">
                <li className="border-red-500 border-2">
                  <img
                    src={product.src}
                    alt=""
                    width={150}
                    height={150}
                    className="h-[80px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src="https://placewaifu.com/image/300"
                    alt=""
                    width={150}
                    height={150}
                    className="h-[80px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src="https://placewaifu.com/image/300"
                    alt=""
                    width={150}
                    height={150}
                    className="h-[80px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src="https://placewaifu.com/image/300"
                    alt=""
                    width={150}
                    height={150}
                    className="h-[80px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src="https://placewaifu.com/image/300"
                    alt=""
                    width={150}
                    height={150}
                    className="h-[80px] object-contain"
                  />
                </li>
              </ul>
              <button
                aria-label="next image"
                className="text-white absolute  hover:bg-black/50 right-0 top-[50%] translate-y-[-50%] bg-black/5 py-2">
                <MdOutlineKeyboardArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex *:flex-1 mt-6">
              <div className="flex justify-center gap-1 items-center">
                <span>Chia sẻ:</span>
                <div className="flex *:w-6 *:h-6 gap-1">
                  <FaFacebookMessenger className="text-blue-500" />
                  <FaFacebook className="text-blue-800" />
                  <FaPinterest className="text-red-800" />
                  <div className="rounded-full bg-cyan-400 p-1 text-white">
                    <FaTwitter className="w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 border-l-[2px]">
                <button className="*:w-6 *:h-6 flex text-red-500">
                  {/* <FaRegHeart /> */}
                  <FaHeart />
                </button>
                <span>Đã thích (100)</span>
              </div>
            </div>
          </section>
          <section className="col-12px flex-1 flex flex-col justify-start gap-8">
            <h2 className="sr-only">Product Information Section</h2>
            <div>
              <div className="font-[500] pb-2 mt-[3px]">
                <span className="mr-3 bg-primary text-white p-1 rounded-sm text-xs relative -top-[3px] capitalize">
                  yêu thích
                </span>
                <div className="inline text-xl leading-[0.75rem]">{product.title}</div>
              </div>
              <div className="flex gap-8 pb-4 mt-[10px]">
                <div className="flex gap-1 items-center">
                  <span className="text-primary border-b-2 border-b-primary tracking-wider">
                    {product.rating}
                  </span>
                  <RatingStar
                    starSize={16}
                    starGap={4}
                    numOfStars={5}
                    ratingStar={product.rating}
                    className="relative -top-[1px]"
                  />
                </div>
                <div className="capitalize flex gap-1 items-center">
                  <span className="tracking-wider border-b-2 border-black">1,1k</span>{" "}
                  <span className="text-black/70">Đánh Giá</span>
                </div>
                <div className="capitalize flex gap-1 items-center">
                  <span className="tracking-wider">{sold}</span>
                  <span className="text-black/70">Đã bán</span>
                </div>
                <div className="ml-auto text-black/70 capitalize">Tố cáo</div>
              </div>
              <div className="bg-primaryBgColor p-3 flex gap-4 items-center rounded-sm">
                {product.discount && (
                  <del className="text-black/70">
                    <Currency price={product.price} />
                  </del>
                )}
                <span className="text-3xl text-primary">
                  <Currency price={product.price - (product.price * product.discount) / 100} />
                </span>
                <div className="uppercase bg-red-500 text-white px-1 rounded-sm text-xs font-bold">
                  {product.discount}% giảm
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "pl-3 flex-1 flex flex-col pb-[30px] text-sm",
                sections.length < 3 ? "justify-around" : "justify-between"
              )}>
              {sections.map((section) => (
                <section
                  className={clsx(
                    "flex",
                    section.section.toLowerCase() !== "vận chuyển" && "items-center"
                  )}
                  key={section.section}>
                  <h3 className="w-[110px] capitalize leading-tight text-[#757575]">
                    {section.section}
                  </h3>
                  {section.section.toLowerCase() === "vận chuyển" && (
                    <div className="space-y-2">
                      <div className="flex gap-2 items-center">
                        <Image
                          className="w-[30px] h-[30px] object-contain"
                          width={50}
                          height={50}
                          alt=""
                          src="/img/freeship.png"
                        />
                        <p>Miễn phí vận chuyển</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <FaTruck className="w-5 h-5" />
                        <span>Vận chuyển tới</span>
                        <button>Vị trí</button>
                      </div>
                      <div className="flex gap-2">
                        <span>Phí vận chuyển</span>
                        <span>Giá vận chuyển</span>
                      </div>
                    </div>
                  )}

                  {section.section.toLowerCase() === "số lượng" && (
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        <button className="w-[30px] border-[1px]">-</button>
                        <input
                          className="text-center border-[1px] w-[50px] py-2"
                          defaultValue={1}
                        />
                        <button className="w-[30px] border-[1px]">+</button>
                      </div>
                      <span>X sản phẩm có sẵn</span>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="pl-3 flex gap-4 text-sm justify-center">
              <button className="bg-red-100 capitalize w-[200px] hover:opacity-90 text-red-600 border-[1px] px-4 py-3 flex gap-2 items-center border-red-600">
                <GiShoppingCart className="w-6 h-6" />
                Thêm vào giỏ hàng
              </button>
              <button className="text-white w-[200px] bg-red-700 hover:opacity-90 px-4 py-3">
                Mua ngay
              </button>
            </div>
            <div className="pl-3 mt-[30px] capitalize text-sm">
              Shopee đảm bảo{" "}
              <span className="capitalize ml-4 text-[#888]"># ngày hoàn trả hàng / Hoàn tiền</span>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Page;

const sections = [
  // { section: "Mã giảm giá của shop" },
  // { section: "Combo Khuyến Mãi" },
  { section: "Vận Chuyển" },
  // { section: "Màu Sắc" },
  { section: "Số Lượng" },
];
