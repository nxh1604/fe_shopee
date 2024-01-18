import { formatCurrency } from "@/lib/utilies";
import { DropdownBox, DropdownBoxHeader } from "../../Dropdown/UI";
import Button from "@/components/Button";
import cartData from "../cartData";
import { ICartItem } from "../definitions";

const DropdownCartContent = () => {
  return (
    <DropdownBox isTriangle className="right-[16px]">
      <div className="w-[400px]">{cartData.length > 0 ? <CartContent cartItems={cartData} /> : <EmptyCartContent />}</div>
    </DropdownBox>
  );
};

const CartContent = ({ cartItems }: { cartItems: ICartItem[] }) => {
  const newCartItems = cartItems.length > 5 ? cartItems.slice(0, 5) : cartItems;
  const remainCartItems = -newCartItems.length + cartItems.length;

  return (
    <>
      <DropdownBoxHeader title="Sản phẩm mới thêm" />
      <ul className=" flex flex-col *:flex-grow-1">
        {newCartItems.map((item) => (
          <CartItem key={item.title} item={item} />
        ))}
      </ul>
      <footer className={"flex p-2 items-center" + ` ${remainCartItems > 0 ? "justify-between" : "justify-end"}`}>
        {remainCartItems > 0 && <p className="text-gray-500 ">{remainCartItems} thêm vào giỏ hàng</p>}
        <Button variant="primary" className="p-2">
          Xem giỏ hàng
        </Button>
      </footer>
    </>
  );
};

const CartItem = ({ item }: { item: ICartItem }) => {
  return (
    <li className="flex justify-between cursor-pointer hover:bg-slate-300 py-3 px-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img width={40} height={40} src={item.imgSrc} className="h-auto self-center" alt="" />
      <p className="flex-1 px-2 ">
        {item.combo && <span className="text-red-500 border-[1px] rounded-xl border-red-500 text-xs mr-1 tracking-tighter px-1">{item.combo}</span>}
        {item.title.length + item.combo?.length > 30 ? `${item.title.slice(0, 30 - item.combo.length)}...` : item.title}
      </p>
      <span className="text-red-500 text-xs self-center">{formatCurrency(item.price)}</span>
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
