import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaQuestionCircle,
  FaRegBell,
} from "react-icons/fa";

interface HeaderLink {
  title: string;
  link: string;
}

const links: HeaderLink[] = [
  {
    title: "Kênh người bán",
    link: "#",
  },
  {
    title: "Trở này Người bán Shopee",
    link: "#",
  },
  {
    title: "Tải ứng dụng",
    link: "#",
  },
];

interface NotifyItem {
  src: string;
  title: string;
  description: string;
}

const notifyItems: NotifyItem[] = [
  // {
  //   src: "/img/tree-736885_1280.jpg",
  //   title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nulla!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia illo nostrum, eum ea enim nisi minima tenetur quae incidunt?",
  // },
];

const user = false;

const DropdownWrapper = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={"relative" + ` ${className}`}>{children}</div>;
};

const DropdownHover = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={"peer" + ` ${className}`}>{children}</div>;
};

const DropdownContent = ({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        "hidden hover:block absolute peer-hover:block " + ` ${className}`
      }>
      {children}
    </div>
  );
};

const NavItem = (
  props: React.PropsWithChildren<{
    href: string;
    title: string;
    className?: string;
  }>
) => {
  const { href, title, className = "" } = props;

  return (
    <li
      className={
        "hover:opacity-80 border-l-2 pl-3 border-slate-300" + ` ${className}`
      }>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const HeaderNavbar = (): JSX.Element => {
  return (
    <nav className="*:flex *:gap-3 *:px-2  text-nowrap py-2 flex justify-between text-sm ">
      <ul className="justify-start">
        {links.map((link) => {
          if (link.title === "Tải ứng dụng")
            return (
              <DropdownWrapper key={link.title}>
                <DropdownHover>
                  <NavItem href={link.link} title={link.title} />
                </DropdownHover>
                <DropdownContent className="top-[90%] pt-3">
                  <div className="border-[1px] shadow w-[200px] space-y-2 animate-[fadeIn_0.2s] will-change-[opacity]">
                    <Image
                      src={"/img/qr_code.png"}
                      width={200}
                      height={200}
                      alt=""
                    />
                    <div className="px-[12px] flex flex-col gap-2 pb-2">
                      <div className="flex justify-between gap-2">
                        <Image
                          className="inline-block h-4 "
                          src={"/img/google_play.png"}
                          width={100}
                          height={100}
                          alt=""
                        />
                        <Image
                          className="inline-block h-4"
                          src={"/img/app_store.png"}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>
                      <Image
                        className=" h-4"
                        src={"/img/app_gallery.png"}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                  </div>
                </DropdownContent>
              </DropdownWrapper>
            );

          return (
            <NavItem
              key={link.title}
              className="hover:opacity-80 first:border-none first:pl-0"
              title={link.title}
              href={link.link}
            />
          );
        })}

        <li className="flex gap-2 border-l-2 pl-3 border-slate-300 *:self-center">
          Kết nối{" "}
          <Link href={"#"}>
            <FaFacebook className="w-4 h-4 hover:opacity-80" />
          </Link>{" "}
          <Link href={"#"}>
            <FaInstagram className="w-4 h-4 hover:opacity-80" />
          </Link>
        </li>
      </ul>

      <ul className="*:flex *:items-center justify-end">
        <DropdownWrapper>
          <DropdownHover>
            <li className="relative hover:opacity-80 cursor-pointer">
              <FaRegBell className="inline-block w-4 h-4" /> Thông báo
            </li>
          </DropdownHover>
          <DropdownContent className="right-0 top-[90%] pt-3">
            {user && (
              <div className="shadow-xl bg-white relative text-black before:triangle-up w-[404px] origin-[calc(100%-20px)_top] animate-[headerNotify_0.3s] will-change-[opacity,_scale] text-wrap text-justify">
                <header className="p-2 text-gray-500">
                  <h3>Thông báo mới nhận</h3>
                </header>
                {notifyItems[0] ? (
                  <>
                    <ul className="">
                      {notifyItems.map((notify) => {
                        return (
                          <li
                            key={notify.title}
                            className="hover:bg-slate-200 p-2">
                            <Link href="#" className="flex items-start gap-3">
                              <Image
                                className="w-12 pt-1"
                                src={notify.src}
                                alt="tree"
                                width={100}
                                height={100}
                              />
                              <div className="flex-1 gap-1">
                                <h4>{notify.title}</h4>
                                <p className="text-xs text-gray-500">
                                  {notify.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <footer>
                      <Link
                        className="text-center block p-2 hover:bg-slate-200"
                        href="#">
                        Xem tất cả
                      </Link>
                    </footer>
                  </>
                ) : (
                  <p className="w-full h-[100px] text-center leading-[100px]">
                    Không có thông báo mới
                  </p>
                )}
              </div>
            )}
            {!user && (
              <div className="origin-[calc(100%-20px)_top] animate-[headerNotify_0.3s] hover:flex w-[350px] h-[350px]">
                <div className="w-full h-full relative shadow flex flex-col text-black before:triangle-up">
                  <div className="flex-1 flex flex-col items-center justify-center bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-[100px] h-[100px] "
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png"
                      width={400}
                      height={400}
                      alt=""
                    />
                    <p>Đăng nhập để xem thông báo</p>
                  </div>
                  <div className="flex justify-between text-base bg-slate-100 ">
                    <Link
                      className="flex-1 py-3 text-center hover:bg-slate-300 hover:text-[#f53d2d]"
                      href={"#"}>
                      Đăng Ký
                    </Link>
                    <Link
                      className="flex-1 py-3 text-center  hover:bg-slate-300 hover:text-[#f53d2d]"
                      href={"#"}>
                      Đăng Nhập
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </DropdownContent>
        </DropdownWrapper>

        <li className="gap-1">
          <FaQuestionCircle className="w-4 h-4" /> Hỗ trợ
        </li>
        <li className="gap-1">
          <FaGlobe className="w-4 h-4" /> Tiếng Việt{" "}
          <FaChevronDown className="w-4 h-4" />
        </li>

        <div className="gap-3 *:border-l-2 *:pl-3 *:border-slate-300 ">
          <li className="hover:opacity-60 border-none ">
            <Link href={"#"}>Đăng nhập</Link>
          </li>
          <li className="hover:opacity-60">
            <Link href={"#"}>Đăng ký</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
