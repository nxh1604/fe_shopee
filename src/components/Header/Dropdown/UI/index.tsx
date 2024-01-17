import { TriangleUp } from "@/components/Triangle";
import { ReactNode } from "react";

const DropdownBox = ({
  isTriangle = false,
  children,
  className,
}: {
  isTriangle?: boolean;
  title?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={
        "shadow-xl bg-white relative text-black text-wrap text-justify rounded" +
        ` ${isTriangle ? "header-notify-animation" : "fade-in-animation"}`
      }>
      {isTriangle && <TriangleUp className={className} />}

      {children}
    </div>
  );
};

const DropdownBoxHeader = ({ title }: { title: string }) => {
  return (
    <header className="p-2 text-gray-500">
      <h3>{title}</h3>
    </header>
  );
};

export { DropdownBox, DropdownBoxHeader };
