import SidebarAccount from "./components/Sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="gridLayout">
      <div className="row-12px">
        <div className="w-1/6 col-12px">
          <SidebarAccount className={"h-[500px]"} />
        </div>
        <main className="flex-1 col-12px">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
