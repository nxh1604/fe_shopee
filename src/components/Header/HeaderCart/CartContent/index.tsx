"use client";
import { DropdownBox, DropdownBoxHeader } from "@/components/Header/Dropdown/UI";
import Button from "@/components/Button";
import { TriangleUp } from "@/components/Triangle";
import user from "@/lib/data/userData";
import { IProduct } from "@/lib/definitions";
import Currency from "@/components/Currency";
import { useRouter } from "next/navigation";

const DropdownCartContent = ({ cart }: { cart: IProduct[] | null }) => {
  return (
    <DropdownBox isTriangle className="origin-[calc(100%-16px)_top]">
      <TriangleUp className="right-[16px]" />
      {user ? (
        <div className="w-[400px] text-left m-and-t:w-[644px] mobile:w-full mobile:mx-0 m-and-t:mx-[calc((100%-644px)/2)]">
          {cart && cart.length > 0 ? <CartContent cartItems={cart} /> : <EmptyCartContent />}
        </div>
      ) : (
        <EmptyCartContent />
      )}
    </DropdownBox>
  );
};

const CartContent = ({ cartItems }: { cartItems: IProduct[] }) => {
  const router = useRouter();
  const newCartItems = cartItems.length > 5 ? cartItems.slice(0, 5) : cartItems;
  const remainCartItems = -newCartItems.length + cartItems.length;

  return (
    <>
      <DropdownBoxHeader title="Sản phẩm mới thêm" />
      <ul className=" flex flex-col *:flex-grow-1">
        {newCartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
      <footer
        className={
          "flex p-2 items-center" + ` ${remainCartItems > 0 ? "justify-between" : "justify-end"}`
        }>
        {remainCartItems > 0 && (
          <p className="text-textColor ">{remainCartItems} thêm vào giỏ hàng</p>
        )}
        <Button onClick={() => router.push("/cart")} variant="primary" className="p-2">
          Xem giỏ hàng
        </Button>
      </footer>
    </>
  );
};

const CartItem = ({ item }: { item: IProduct }) => {
  return (
    <li className="flex justify-between hover:bg-slate-300 py-3 px-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img width={40} height={40} src={item.photo} className="object-fill" alt="" />
      <div className="flex-1 px-2 flex flex-col gap-2">
        <p className={`${item.liked ? "line-clamp-1" : "line-clamp-2"}`}>{item.title}</p>
        {item.liked && (
          <p className="text-red-500 border-[1px] rounded-xl border-red-500 text-xs mr-1 w-fit tracking-tighter px-1">
            {item.liked}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 items-end ">
        <span className="text-red-500 text-xs self-center flex gap-1">
          {<Currency price={item.price} />} <span className="text-textColor text-xs">x 2</span>
        </span>
        <Button className="text-xs py-0 px-2">Xóa</Button>
      </div>
    </li>
  );
};

const EmptyCartContent = () => {
  return (
    <div className="flex  flex-col p-16 items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className=" max-w-[150px]"
        alt=""
        width={200}
        height={200}
        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
      />
      <p className="text-black">Chưa có sản phẩm</p>
    </div>
  );
};
export default DropdownCartContent;
