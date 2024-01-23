"use client";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { FaCheck, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import CardProduct from "./components/CardProduct";
import productsData from "@/lib/data/productsData";
import PaginationFooter from "./components/PaginationFooter";
import Image from "next/image";
import Link from "next/link";

const sortOptions = [
  {
    option: "Giá: thấp đến cao",
  },
  {
    option: "Giá: cao đến thấp",
  },
];

const page = 9;

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const [isOpenSortOption, setIsOpenSortOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const handleClickOutSide = () => {
      setIsOpenSortOption(false);
      console.log("document clicked");
    };

    if (isOpenSortOption) {
      document.addEventListener("click", handleClickOutSide);
    }

    return () => document.removeEventListener("click", handleClickOutSide);
  }, [isOpenSortOption]);

  return (
    <>
      <main className="bg-primaryBgColor py-8">
        <div className="max-w-[1200px] mx-auto flex">
          <Sidebar className="self-start" />
          <div className="flex-1">
            <div className="flex justify-between px-5 py-3 rounded items-center text-sm bg-secondaryBgColor">
              <div className="flex gap-1 items-center ">
                <h1 className=" mr-1 text-[#555]"> Sắp xếp theo</h1>
                <Button aria-label="Phổ biến" onClick={() => setIsActive(true)} variant={isActive ? "primary" : "normal-no-hover"} size="small">
                  Phổ biến
                </Button>
                <Button aria-label="Mới nhất" variant="normal-no-hover" size="small">
                  Mới nhất
                </Button>
                <Button aria-label="Bán chạy" variant="normal-no-hover" size="small">
                  Bán chạy
                </Button>
                <div className="relative self-stretch bg-white items-center rounded-sm flex justify-between">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpenSortOption((prev) => !prev);
                    }}
                    className="cursor-pointer w-[200px] h-full items-center flex justify-between pr-1 pl-3"
                  >
                    <span className="capitalize">{selectedOption ? selectedOption : "Giá"}</span>
                    <IoIosArrowDown />
                  </div>
                  <ul
                    className={
                      `absolute bg-white top-[calc(100%+4px)] w-full z-[1] left-0 shadow-md fade-in-animation rounded-sm overflow-hidden` +
                      ` ${isOpenSortOption ? "block" : "hidden"}`
                    }
                  >
                    {sortOptions.map((option) => {
                      return (
                        <li
                          className="hover:text-primary flex items-center cursor-pointer pl-3 pb-2 capitalize justify-between pr-2 first:pt-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOption(option.option);
                            setIsOpenSortOption((prev) => !prev);
                          }}
                          key={option.option}
                        >
                          {option.option}
                          {selectedOption === option.option && <FaCheck className="w-2 h-2 fill-primary" />}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 self-stretch">
                <div className="self-center">
                  <span className="text-primary">{page < 2 ? 1 : page}</span>/<span>9</span>
                </div>
                <div className="flex">
                  <Button
                    aria-label="Lùi về trang trước"
                    className={twMerge(`border-[2px] border-[#e6e6e6]`, "disabled:cursor-default disabled:bg-primaryBgColor")}
                    disabled={page < 2}
                    size="Xsmall"
                  >
                    <MdOutlineKeyboardArrowLeft />
                  </Button>
                  <Button
                    aria-label="Tới trang tiếp theo"
                    size="Xsmall"
                    className="disabled:cursor-default disabled:bg-primaryBgColor border-[2px] border-l-0 border-[#e6e6e6]"
                    disabled={page >= 9}
                  >
                    <MdKeyboardArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <ul className="pt-2 flex flex-wrap gap-[10px]">
              {productsData.map((product) => {
                return <CardProduct key={product.id} {...product} />;
              })}
            </ul>
            <PaginationFooter />
          </div>
        </div>
      </main>
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
                            <FaFacebook className="w-4 h-4" /> <span className="hover:text-primary ">{i}</span>
                          </Link>
                        ) : i === "instagram" ? (
                          <Link className="flex items-center gap-2" href={"#"}>
                            <FaInstagram className="w-4 h-4" /> <span className="hover:text-primary ">{i}</span>
                          </Link>
                        ) : (
                          <Link className="flex items-center gap-2" href={"#"}>
                            <FaLinkedin className="w-4 h-4" /> <span className="hover:text-primary ">{i}</span>
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
                        <li className="text-[#939393] hover:text-primary cursor-pointer capitalize" key={i}>
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
        <p className="text-[#939393] text-center text-sm pb-2">&copy; 2022 Shopee. Tất cả các quyền đã được bảo lưu</p>
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
    list: ["/img/qr_code.png", "/img/app_store.png", "/img/google_play.png", "/img/app_gallery.png"],
  },
];
