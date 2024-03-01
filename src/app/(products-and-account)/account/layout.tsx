import SidebarAccount from "./components/Sidebar";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-and-t:[margin-top:calc(var(--header-mobile-height))] w-full overflow-hidden flex-1 bg-primaryBgColor ">
      <main id="products-page" className="py-8 m-and-t:p-0 h-full w-full">
        <div className="gridLayout flex gap-3">
          <div className="flex-1">
            <SidebarAccount className="h-[500px] flex flex-col text-sm" />
          </div>
          <main className="flex-[5]">{children}</main>
        </div>
      </main>
    </div>
  );
};

export default Layout;
