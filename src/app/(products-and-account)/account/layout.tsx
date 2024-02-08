import SidebarAccount from "./components/Sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-and-t:[margin-top:calc(var(--header-mobile-height))] w-full overflow-hidden flex-1 bg-primaryBgColor ">
      <main id="products-page" className="py-8 m-and-t:p-0 h-full w-full">
        <div className="gridLayout">
          <div className="row-12px">
            <div className="w-1/6 col-12px">
              <SidebarAccount className={"h-[500px]"} />
            </div>
            <main className="flex-1 col-12px">{children}</main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
