const QuantityButton = () => {
  return (
    <div className="flex">
      <button className="w-[30px] border-[1px]">-</button>
      <input className="text-center border-[1px] w-[50px] py-2" defaultValue={1} />
      <button className="w-[30px] border-[1px]">+</button>
    </div>
  );
};

export default QuantityButton;
