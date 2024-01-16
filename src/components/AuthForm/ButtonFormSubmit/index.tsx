import Button from "@/components/Button";
import Link from "next/link";

const ButtonFormSubmit = ({ title }: { title: "Đăng ký" | "Đăng nhập" }) => {
  return (
    <div>
      <Button type="button" className="uppercase py-[10px]" variant="primary" size="full">
        {title === "Đăng ký" ? "Đăng ký" : "Đăng nhập"}
      </Button>
      {title === "Đăng nhập" && (
        <Link href={"#"} className="block mt-2 text-end text-xs text-[#05a]">
          Quên mật khẩu
        </Link>
      )}
    </div>
  );
};

export default ButtonFormSubmit;
