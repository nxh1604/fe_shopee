import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTop />
    </>
  );
}
