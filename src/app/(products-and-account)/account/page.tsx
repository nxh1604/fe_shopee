import Image from "next/image";
import SidebarAccount from "./components/Sidebar";

const Page = () => {
  return (
    <div className="gridLayout">
      <div className="row-12px">
        <div className="w-1/6 col-12px">
          <SidebarAccount className={"h-[500px]"} />
        </div>
        <main className="flex-1 col-12px">
          <div className=" bg-white h-full">
            <div>
              <h1>Hồ Sơ Của Tôi</h1>
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className="flex">
              <form className="flex-1">
                <label>Ten dang nhap</label>
                <input />
                <label>Ten dang nhap</label>
                <input />
              </form>
              <div className="border-l-2 border-slate-300 w-1/3 flex items-center flex-col">
                <Image src={"/img/avatar.jpg"} height={100} width={100} alt="user image" className="w-[100px] h-[100px] object-cover rounded-full" />
                <label htmlFor="file-upload" className="border-2 border-slate-300 py-1 px-3 rounded-sm text-sm hover:bg-gray-200 cursor-pointer">
                  Chọn ảnh
                </label>
                <input className="hidden" id="file-upload" type="file" />
                <p className="text-[#888]">Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
