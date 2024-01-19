import { twMerge } from "tailwind-merge";

const DropdownWrapper = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  return <div className={twMerge("relative" + ` ${className}`)}>{children}</div>;
};

const DropdownControl = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  return <div className={twMerge("peer" + ` ${className}`)}>{children}</div>;
};

const DropdownContent = ({ children, className = "" }: { className?: string; children: React.ReactNode }) => {
  return <div className={twMerge("hidden absolute top-[90%] pt-3 z-10 right-0 hover:block peer-hover:block shadow-md", className)}>{children}</div>;
};

export { DropdownContent, DropdownWrapper, DropdownControl };
