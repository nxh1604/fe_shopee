import ShopeeLogo from "@/components/ShopeeLogo";
import ShopeeLogoForPath from "@/components/ShopeeLogoForPath";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <ShopeeLogoForPath type="auth" />
        </nav>
      </header>
      <main className="gradient-shopee-b flex-1">{children}</main>
    </>
  );
}
