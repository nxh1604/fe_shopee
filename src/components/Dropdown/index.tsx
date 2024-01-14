const DropDown = () => {
  return (
    <div className="hidden hover:block absolute z-10 top-[90%] peer-hover:block w-[200px] space-y-2 pt-3">
      <div className="border-[1px] shadow">
        <Image src={"/img/qr_code.png"} width={200} height={200} alt="" />
        <div className="*:h-4 px-[12px] flex flex-col gap-2 pb-2">
          <div className="flex justify-between">
            <Image
              className="inline-block w-auto items-end "
              src={"/img/google_play.png"}
              width={100}
              height={100}
              alt=""
            />
            <Image
              className="inline-block w-auto"
              src={"/img/app_store.png"}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="w-auto"
              src={"/img/app_gallery.png"}
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DropDownLink = () => {
  return (
    <div key={link.title} className="relative">
      <Link className="hover:opacity-80 peer " href={link.link}>
        {link.title}
      </Link>
    </div>
  );
};
