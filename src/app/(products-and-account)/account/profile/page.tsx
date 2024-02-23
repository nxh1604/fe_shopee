import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

const Page = () => {
  return (
    <div className=" bg-white h-full px-8 py-4">
      <div className="pb-4 border-b-[2px] border-b-primaryBgColor">
        <h1 className="text-lg font-[500]">Hồ Sơ Của Tôi</h1>
        <p className="text-sm">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="flex mt-8 ">
        <form className="flex-1 pr-12 text-sm flex flex-col gap-8">
          <FormLabelInput autoFocus label="Tên Đăng Nhập" type="text" />
          <FormLabelInput label="Tên Đăng Nhập" type="text" />
          <FormLabelInput label="Tên Đăng Nhập" type="text" />
          <FormLabelInput label="Tên Đăng Nhập" type="text" />
          <Button variant="primary" size="medium" className="px-3 self-end">
            Save
          </Button>
        </form>
        <div className="border-l-2 border-primaryBgColor w-1/3 flex items-center flex-col justify-center gap-2">
          <Image src={"/img/avatar.jpg"} height={100} width={100} alt="user image" className="w-[100px] h-[100px] object-cover rounded-full" />
          <label htmlFor="file-upload" className="border-2 border-slate-300 py-1 px-3 rounded-sm text-sm hover:bg-gray-200 cursor-pointer">
            Chọn ảnh
          </label>
          <input className="hidden" id="file-upload" type="file" />
          <p className="text-[#888] text-center">Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
        </div>
      </div>
    </div>
  );
};

const FormLabelInput = ({ label, ...rest }: { label: string } & ComponentPropsWithoutRef<"input">) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor={label} className="flex-1 text-end capitalize text-[#888]">
        {label}
      </label>
      <Input id={label} {...rest} />
    </div>
  );
};

export default Page;
