import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(isOpen: boolean, action: Dispatch<SetStateAction<boolean>>) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleCloseSearch = (e: MouseEvent) => {
      if (!ref.current || ref.current?.contains(e.target as Node)) return;
      action(false);
    };
    if (isOpen) {
      document.addEventListener("click", handleCloseSearch);
    }

    return () => {
      document.removeEventListener("click", handleCloseSearch);
    };
  }, [isOpen, action]);

  return ref;
};

export default useClickOutside;
