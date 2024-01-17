import Image from "next/image";
import { DropdownContent, DropdownHover, DropdownWrapper } from "../../DropdownWhenHover";
import { NavItem } from "../NavbarUI";

const DowloadAppItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <DropdownWrapper>
      <DropdownHover>
        <NavItem className="border-l-2 pl-3 border-slate-300" href={href}>
          {title}
        </NavItem>
      </DropdownHover>
      <DropdownContent>
        <div className="shadow w-[200px] space-y-2 fade-in-animation">
          <Image src={"/img/qr_code.png"} width={200} height={200} alt="QR code" />
          <div className="px-[12px] space-y-2 pb-2">
            <div className="flex justify-between">
              <Image className="h-4 " src={"/img/google_play.png"} width={100} height={100} alt="google play store" />
              <Image className="h-4" src={"/img/app_store.png"} width={100} height={100} alt="apple store" />
            </div>
            <Image className=" h-4" src={"/img/app_gallery.png"} width={100} height={100} alt="apple gallery" />
          </div>
        </div>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default DowloadAppItem;
