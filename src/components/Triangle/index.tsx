import { PropsWithChildren } from "react";

const Triangle = (
  props: PropsWithChildren<{
    width: number;
    height: number;
    color?: string;
    className?: string;
    direction?: "down" | "left" | "up" | "right";
  }>
) => {
  const { direction = "up", className, color, height, width } = props;

  const a = new Array(4).fill("transparent");
  switch (direction) {
    case "down":
      a[0] = color;
      break;
    case "left":
      a[1] = color;
      break;
    case "up":
      a[2] = color;
      break;
    case "right":
      a[3] = color;
      break;
  }

  const triangleDirection = a.join("_");

  return (
    <div
      className={`absolute border-[${triangleDirection}] border-x-[${width}px] border-y-[${height}px] ${className}`}></div>
  );
};

export default Triangle;
