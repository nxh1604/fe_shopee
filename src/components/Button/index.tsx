import clsx from "clsx";
import { PropsWithChildren } from "react";

const Button = (
  props: PropsWithChildren<
    {
      variant?: "primary" | "normal";
      className?: string;
      size?: "small" | "medium" | "large" | "full";
    } & React.ComponentPropsWithoutRef<"button">
  >
) => {
  const { children, variant = "normal", className = "", size = "medium", ...rest } = props;

  return (
    <button
      className={clsx(
        "cursor-pointer flex items-center justify-center text-sm  rounded-sm",
        {
          "bg-primary text-white": variant === "primary",
          "bg-white text-black hover:bg-gray-100": variant === "normal",
          " ": size === "small",
          "py-2": size === "medium",
          "": size === "large",
          "w-full": size === "full",
        },
        className
      )}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;