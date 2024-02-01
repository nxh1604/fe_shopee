import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
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
                      <Image className="w-[88px] h-auto" src={item.list[0]} width={100} height={100} alt="" />
                    </Link>
                    <div className="flex flex-col justify-between">
                      <Link className="shadow p-1" href={"#"}>
                        <Image className="w-[70px] h-auto" src={item.list[2]} width={100} height={100} alt="" />
                      </Link>
                      <Link className="shadow p-1" href={"#"}>
                        <Image className="w-[70px] h-auto" src={item.list[1]} width={100} height={100} alt="" />
                      </Link>
                      <Link className="shadow p-1" href={"#"}>
                        <Image className="w-[70px] h-auto" src={item.list[3]} width={100} height={100} alt="" />
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
  );
};

export default Footer;

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
