import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import Sidebar from "@/components/Sidebar";
import CardProduct from "@/app/products/components/CardProduct";
import productsData from "@/lib/data/productsData";
import PaginationFooter from "@/app/products/components/PaginationFooter";
import ProductsSortBar from "./components/ProductsSortBar";

const page = 9;

export default function Page() {
  return (
    <>
      <div className="gridLayout mx-auto">
        <div className="row-12px">
          <Sidebar className="self-start col-12px m-and-t:hidden" />
          <div className="flex-1 col-12px">
            <div className="flex justify-between px-5 py-3 rounded items-center text-sm bg-secondaryBgColor m-and-t:hidden">
              <ProductsSortBar />
              <div className="flex gap-4 self-stretch">
                <div className="self-center">
                  <span className="text-primary">{page < 2 ? 1 : page}</span>/<span>9</span>
                </div>
                <div className="flex">
                  <Button
                    aria-label="Lùi về trang trước"
                    className={twMerge(
                      `border-[2px] border-[#e6e6e6]`,
                      "disabled:cursor-default disabled:bg-primaryBgColor"
                    )}
                    disabled={page < 2}
                    size="Xsmall">
                    <MdOutlineKeyboardArrowLeft />
                  </Button>
                  <Button
                    aria-label="Tới trang tiếp theo"
                    size="Xsmall"
                    className="disabled:cursor-default disabled:bg-primaryBgColor border-[2px] border-l-0 border-[#e6e6e6]"
                    disabled={page >= 9}>
                    <MdKeyboardArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <ul className="row-5px">
              {productsData.map((product) => {
                return <CardProduct key={product.id} {...product} />;
              })}
            </ul>
            <PaginationFooter />
          </div>
        </div>
      </div>
      <footer className="border-t-4 border-t-primary h-[200px]">
        <div className="flex gap-10 max-w-[1200px] justify-between mx-auto pt-10 pb-20">
          {footer.map((item) => {
            return (
              <div key={item.title} className="text-xs space-y-5">
                <h3 className="uppercase font-semibold">{item.title}</h3>
                <ul className="space-y-3">
                  {item.title === "Theo dõi" ? (
                    item.list.map((i) => (
                      <li className="text-[#939393] capitalize  cursor-pointer" key={i}>
                        {i === "Facebook" ? (
                          <Link className="flex items-center gap-2" href={"#"}>
                            <FaFacebook className="w-4 h-4" />{" "}
                            <span className="hover:text-primary ">{i}</span>
                          </Link>
                        ) : i === "instagram" ? (
                          <Link className="flex items-center gap-2" href={"#"}>
                            <FaInstagram className="w-4 h-4" />{" "}
                            <span className="hover:text-primary ">{i}</span>
                          </Link>
                        ) : (
                          <Link className="flex items-center gap-2" href={"#"}>
                            <FaLinkedin className="w-4 h-4" />{" "}
                            <span className="hover:text-primary ">{i}</span>
                          </Link>
                        )}
                      </li>
                    ))
                  ) : item.title === "Vào cửa hàng trên ứng dụng" ? (
                    <div className="flex gap-2">
                      <Link className="shadow p-1" href={"#"}>
                        <Image src={item.list[0]} width={88} height={88} alt="" />
                      </Link>
                      <div className="flex flex-col justify-between">
                        <Link className="shadow p-1" href={"#"}>
                          <Image src={item.list[2]} width={70} height={70} alt="" />
                        </Link>
                        <Link className="shadow p-1" href={"#"}>
                          <Image src={item.list[1]} width={70} height={70} alt="" />
                        </Link>
                        <Link className="shadow p-1" href={"#"}>
                          <Image src={item.list[3]} width={70} height={70} alt="" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    item.list.map((i) => {
                      return (
                        <li
                          className="text-[#939393] hover:text-primary cursor-pointer capitalize"
                          key={i}>
                          <Link href={"#"}>{i}</Link>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="text-[#939393] text-center text-sm pb-2">
          &copy; 2022 Shopee. Tất cả các quyền đã được bảo lưu
        </p>
      </footer>
    </>
  );
}

const footer = [
  {
    title: "Chăm sóc khách hàng",
    list: ["Trung tâm trợ giúp", "f8-shop mall", "hướng dẫn mua hàng"],
  },
  {
    title: "Giới thiệu",
    list: ["Giới thiệu", "Tuyển dụng", "Điều khoản"],
  },
  {
    title: "Danh mục",
    list: ["trang điểm mặt", "trang điểm môi", "trang điểm mắt"],
  },
  {
    title: "Theo dõi",
    list: ["Facebook", "instagram", "Linkedin"],
  },
  {
    title: "Vào cửa hàng trên ứng dụng",
    list: [
      "/img/qr_code.png",
      "/img/app_store.png",
      "/img/google_play.png",
      "/img/app_gallery.png",
    ],
  },
];
