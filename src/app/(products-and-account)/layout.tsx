import Header from "@/components/Header";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="m-and-t:[margin-top:calc(var(--header-mobile-height)_+_var(--products-mobile-sort-bar))] w-full overflow-hidden flex-1 bg-primaryBgColor ">
        <main id="products-page" className="py-8 m-and-t:p-0 h-full w-full scroll-smooth">
          {children}
        </main>
      </div>
    </>
  );
}
