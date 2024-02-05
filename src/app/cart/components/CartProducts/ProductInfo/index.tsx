import { IProduct } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

const ProductInfo = ({
  photo,
  id,
  title,
}: {
  title: IProduct["title"];
  photo: IProduct["photo"];
  id: IProduct["id"];
}) => {
  return (
    <div className="w-1/2 flex items-center gap-2 break-all">
      <Link className="w-2/3" href={`/products/${id}`}>
        <div className="flex gap-2 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[80px] h-[80px] bg-black object-contain shrink-0"
            src={photo}
            height={80}
            width={80}
            alt=""
          />
          <div className="line-clamp-2 capitalize break-all">{title}</div>
        </div>
      </Link>
      <div className="line-clamp-2 w-1/3">Category</div>
    </div>
  );
};

export default ProductInfo;
