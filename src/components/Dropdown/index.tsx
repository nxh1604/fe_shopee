"use client";

import { useState, createContext, useContext, Dispatch, SetStateAction, MutableRefObject } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import clsx from "clsx";

interface IDropdown {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  divRef: MutableRefObject<HTMLDivElement | null> | null;
}

const DropdownContext = createContext<IDropdown>({
  isOpen: false,
  setIsOpen: () => {},
  divRef: null,
});

const DropdownWrapper = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useClickOutside<HTMLDivElement>(isOpen, setIsOpen);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, divRef }}>
      <div className={clsx("relative", className)}>{children}</div>
    </DropdownContext.Provider>
  );
};

const DropdownControl = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(`${className}`)}
    >
      {children}
    </div>
  );
};

const DropdownContent = ({ children, className = "" }: { className?: string; children: React.ReactNode }) => {
  const { isOpen, divRef, setIsOpen } = useContext(DropdownContext);

  return isOpen ? (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={divRef}
      className={clsx("absolute top-[100%] pt-3 z-10 right-0", className)}
    >
      {children}
    </div>
  ) : null;
};

export { DropdownContent, DropdownWrapper, DropdownControl };
