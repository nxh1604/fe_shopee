import Link from "next/link";
import { DropdownBoxHeader, DropdownBox } from "../DropdownUI";
import Image from "next/image";

const DropdownNotifyContent = () => {
  return <DropdownBox isTriangle>{user ? <NotifyContent notifyList={notifyItems} /> : <NotifyNoUser />}</DropdownBox>;
};

export default DropdownNotifyContent;

const NotifyContent = ({ notifyList }: { notifyList: IHeaderNotifyItem[] | undefined }) => {
  if (!notifyList || !notifyList[0]) return <EmptyNotify />;

  return (
    <>
      <DropdownBoxHeader title="Thông báo mới nhận" />
      <NotifyList notifyList={notifyList} />
      <NotifyFooter />
    </>
  );
};

const EmptyNotify = () => {
  return <p className="w-full h-[100px] text-center leading-[100px]">Không có thông báo mới</p>;
};

const NotifyList = ({ notifyList }: { notifyList: IHeaderNotifyItem[] }) => {
  return (
    <ul>
      {notifyList.map((notify) => {
        return <NotifyItem key={notify.title} src={notify.src} title={notify.title} isRead={notify.isRead} description={notify.description} />;
      })}
    </ul>
  );
};

const NotifyItem = ({ src, title, description, isRead }: IHeaderNotifyItem) => {
  return (
    <li className={"hover:bg-slate-200 p-2" + ` ${!isRead && "bg-primary/5"}`}>
      <Link href="#" className="flex items-start gap-3">
        <Image className="w-12 pt-1" src={src} alt="tree" width={100} height={100} />
        <div className="flex-1 gap-1">
          <h4>{title}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </Link>
    </li>
  );
};

const NotifyFooter = () => {
  return (
    <footer>
      <Link className="text-center block p-2 hover:bg-slate-200" href="#">
        Xem tất cả
      </Link>
    </footer>
  );
};

const NotifyNoUser = () => {
  return (
    <div className="w-full h-full relative shadow flex flex-col text-black">
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
        <Link className="flex-1 py-3 text-center hover:bg-slate-300 hover:text-[#f53d2d]" href={"#"}>
          Đăng Ký
        </Link>
        <Link className="flex-1 py-3 text-center hover:bg-slate-300 hover:text-[#f53d2d]" href={"#"}>
          Đăng Nhập
        </Link>
      </div>
    </div>
  );
};

interface IHeaderNotifyItem {
  src: string;
  title: string;
  description: string;
  isRead: boolean;
}

const notifyItems: IHeaderNotifyItem[] = [
  {
    src: "/img/tree-736885_1280.jpg",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nulla!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia illo nostrum, eum ea enim nisi minima tenetur quae incidunt?",
    isRead: false,
  },
  {
    src: "/img/tree-736885_1280.jpg",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nulla!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia illo nostrum, eum ea enim nisi minima tenetur quae incidunt?",
    isRead: true,
  },
  {
    src: "/img/tree-736885_1280.jpg",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nulla!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia illo nostrum, eum ea enim nisi minima tenetur quae incidunt?",
    isRead: true,
  },
  {
    src: "/img/tree-736885_1280.jpg",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nulla!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia illo nostrum, eum ea enim nisi minima tenetur quae incidunt?",
    isRead: false,
  },
];

const user = true;