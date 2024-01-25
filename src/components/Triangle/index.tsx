import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const triangleUpColor = {
  white: "border-[transparent_transparent_white_transparent]",
  black: "border-[transparent_transparent_black_transparent]",
};

const TriangleUp = (
  props: PropsWithChildren<{
    color?: "white" | "black";
    className?: string;
  }>
) => {
  const { className = "", color = "white" } = props;

  return (
    <div
      className={twMerge(`m-and-t:hidden absolute border-x-[16px] border-y-[8px] top-[-16px] right-[20px] ${triangleUpColor[color]} ${className}`)}
    ></div>
  );
};

export { TriangleUp };
