import Image from "next/image";

const ProductInfo = () => {
  return (
    <div className="w-1/2 flex items-center gap-2 break-all">
      <div className="flex gap-2 w-2/3 items-start">
        <Image className="w-[80px] h-[80px] bg-black object-contain" src={"/img/avatar.jpg"} height={80} width={80} alt="" />
        <div className="line-clamp-2 capitalize break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, impedit.</div>
      </div>
      <div className="line-clamp-2 w-1/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptatum animi deleniti labore esse perspiciatis facere laborum odio a
        necessitatibus!
      </div>
    </div>
  );
};

export default ProductInfo;
