import ButtonFormSubmit from "../ButtonFormSubmit";
import InputForm from "../InputForm";

const SignupFormCotent = () => {
  return (
    <form className=" text-sm flex flex-col gap-9">
      <InputForm type="text" placeholder="Email/Tên đăng nhập/số điện thoại" label="name" />
      <InputForm type="password" placeholder="Mật khẩu" label="password" />
      <InputForm type="password" placeholder="Nhập lai mật khẩu" label="Confirm password" />
      <ButtonFormSubmit title="Đăng ký" />
    </form>
  );
};

export default SignupFormCotent;
