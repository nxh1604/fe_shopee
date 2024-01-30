import BuyProductOperation from "./components/BuyProductOperation";
import CartProducts from "./components/CartProducts";

const Page = () => {
  return (
    <>
      <div className="gridLayout">
        <div className="flex h-[55px] bg-white text-[#888888] pr-4 pl-8">
          {tableHeadCartData.map((data) => {
            return (
              <div className="first:w-1/2 my-auto text-center capitalize first:text-start w-[12.5%]" key={data.name}>
                {data.name}
              </div>
            );
          })}
        </div>
        <CartProducts />
        <BuyProductOperation />
      </div>
    </>
  );
};

export default Page;

const tableHeadCartData = [
  {
    name: "sản phẩm",
  },
  {
    name: "đơn giá",
  },
  {
    name: "số lượng",
  },
  {
    name: "số tiền",
  },
  {
    name: "thao tác",
  },
];
