"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ComponentPropsWithRef, Dispatch, FormEventHandler, SetStateAction, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface IErrorMese {
  incompatible: string;
  wrongPassword: string;
}

const intialState = {
  incompatible: "",
  wrongPassword: "",
};

export default function Page() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const [errorMes, setErrorMes] = useState<IErrorMese>(intialState);

  const handleInput = (value: string, setFunction: Dispatch<SetStateAction<string>>) => {
    setErrorMes(intialState);
    setFunction(value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    // Check if password is correst
    // Compare new password and reinput pasword
    if (input2 !== input3) {
      setErrorMes((prev) => {
        return { ...prev, incompatible: "Mật khẩu không tương thích" };
      });
      return;
    }
  };
  return (
    <div className=" bg-white h-full px-8 py-4">
      <h1 className="text-lg font-500">Đổi Mật Khẩu</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-10 mx-auto w-[600px]">
        <PassWordInput
          autoComplete="current-password"
          input={input1}
          label="Mật khẩu cũ"
          value={input1}
          autoFocus
          onChange={(e) => handleInput(e.target.value, setInput1)}
        ></PassWordInput>
        <PassWordInput
          autoComplete="new-password"
          input={input2}
          label="Mật Khẩu Mới"
          value={input2}
          onChange={(e) => handleInput(e.target.value, setInput2)}
        ></PassWordInput>
        <PassWordInput
          autoComplete="new-password"
          input={input3}
          label="Nhập Lại Mật Khẩu Mới"
          value={input3}
          onChange={(e) => handleInput(e.target.value, setInput3)}
        >
          {errorMes.incompatible && <p className="text-red-500">{errorMes.incompatible}</p>}
        </PassWordInput>
        <Button type="submit" variant="primary" className="p-2 ml-auto capitalize">
          xác nhận
        </Button>
      </form>
    </div>
  );
}

const PassWordInput = ({ label, input, children, ...rest }: { input: string; label: string } & ComponentPropsWithRef<"input">) => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={label} className="flex-1 capitalize text-[#888] text-start">
        {label}
      </label>
      <div className="relative flex-3">
        <Input id={label} type={isShowPass ? "text" : "password"} {...rest} className="w-full" />
        <div onClick={() => setIsShowPass(!isShowPass)} className="cursor-pointer absolute right-[10px] top-[50%] -translate-y-[50%]">
          {input ? isShowPass ? <BsEyeSlash /> : <BsEye /> : null}
        </div>
      </div>
      {children}
    </div>
  );
};
