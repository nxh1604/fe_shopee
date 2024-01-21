import Image from "next/image";

import { DropdownBox } from "@/components/Header/Dropdown/UI";

const DropdownDowloadContent = () => {
  return (
    <DropdownBox>
      <div className="w-[200px] space-y-2 rounded-[2px]">
        <Image src={"/img/qr_code.png"} className="rounded-t-[2px]" width={200} height={200} alt="QR code" />
        <div className="px-[12px] space-y-2 pb-2">
          <div className="flex justify-between">
            <Image className="h-4 " src={"/img/google_play.png"} width={100} height={100} alt="google play store" />
            <Image className="h-4" src={"/img/app_store.png"} width={100} height={100} alt="apple store" />
          </div>
          <Image className="h-4" src={"/img/app_gallery.png"} width={100} height={100} alt="apple gallery" />
        </div>
      </div>
    </DropdownBox>
  );
};

export default DropdownDowloadContent;
