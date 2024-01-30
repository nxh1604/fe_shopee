import clsx from "clsx";
import { PropsWithChildren } from "react";

const Button = (
  props: PropsWithChildren<
    {
      variant?: "primary" | "normal" | "normal-no-hover" | "unset";
      className?: string;
      size?: "icon" | "small" | "medium" | "large" | "full" | "Xsmall";
    } & React.ComponentPropsWithoutRef<"button">
  >
) => {
  const { children, variant = "normal", className = "", size = "medium", ...rest } = props;

  return (
    <button
      className={clsx(
        "cursor-pointer flex items-center justify-center text-sm m-and-t:text-base rounded-sm",
        {
          "bg-primary text-white": variant === "primary",
          "bg-white text-black": variant === "normal-no-hover",
          "bg-white text-black hover:bg-primaryBgColor": variant === "normal",
          "": variant === "unset",
          "": size === "icon",
          "px-[10px]": size === "Xsmall",
          "px-4 py-2 text-sm": size === "small",
          "py-2": size === "medium",
          "": size === "large",
          "w-full": size === "full",
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
