import { PropsWithChildren } from "react";

import AuthFormHeader from "./AuthFormHeader";
import SigninFormCotent from "@/components/AuthForm/SigninFormContent";
import SignupFormCotent from "@/components/AuthForm/SIgnupFormContent";
import AuthFormFooter from "./AuthFormFooter";

const AuthForm = ({ title }: { title: "Đăng nhập" | "Đăng ký" }) => {
  return (
    <AuthFormWrapper>
      <AuthFormHeader title={title} />
      {title === "Đăng nhập" && <SigninFormCotent />}
      {title === "Đăng ký" && <SignupFormCotent />}
      <AuthFormFooter title={title} />
    </AuthFormWrapper>
  );
};

export default AuthForm;

const AuthFormWrapper = ({ children }: PropsWithChildren) => {
  return <div className="bg-white py-6 px-8 flex flex-col gap-6 rounded-sm justify-between w-[400px]">{children}</div>;
};
