import ButtonFormSubmit from "@/components/AuthForm/ButtonFormSubmit";
import InputForm from "@/components/AuthForm/InputForm";

const SigninFormCotent = () => {
  return (
    <form className=" text-sm flex flex-col gap-9">
      <InputForm label="name" placeholder="Email/Tên đăng nhập" />
      <InputForm label="password" type="text" placeholder="Nhập mật khẩu" />
      <ButtonFormSubmit title="Đăng nhập" />
    </form>
  );
};

export default SigninFormCotent;
