import Image from "next/image";
import { FaTruck } from "react-icons/fa";

const Delivery = () => {
  return (
    <section className="flex items-center">
      <h3 className="w-[110px] capitalize leading-tight text-[#757575]">Vẫn chuyển</h3>
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <Image className="w-[30px] h-[30px] object-contain" width={50} height={50} alt="" src="/img/freeship.png" />
          <p>Miễn phí vận chuyển</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaTruck className="w-5 h-5" />
          <span>Vận chuyển tới</span>
          <button>Vị trí</button>
        </div>
        <div className="flex gap-2">
          <span>Phí vận chuyển</span>
          <span>Giá vận chuyển</span>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
