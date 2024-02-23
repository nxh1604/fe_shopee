import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const Input = ({ className, ...rest }: { className?: string } & ComponentPropsWithoutRef<"input">) => {
  return <input {...rest} className={clsx("flex-[3] border-black/30 border-[1px] px-3 py-2 outline-none rounded-sm", className)} />;
};

export default Input;
