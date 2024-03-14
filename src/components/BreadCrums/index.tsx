"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrums = ({ productCategory, productTitle }: { productCategory?: string; productTitle: string }) => {
  const pathName = usePathname();

  const crums = pathName.split("/").reduce((a, b) => {
    return [...a, { crum: b === "" ? "home" : b, href: a.length ? `${a[a.length - 1].href}/${b}` : "" }];
  }, [] as { crum: string; href: string }[]);
  crums[crums.length - 1].crum = productTitle;

  return (
    <ul className="flex gap-4">
      {crums.map((crum, index) => {
        return (
          <li className="capitalize text-blue-500 flex gap-4" key={crum.crum}>
            <Link className={clsx(index === crums.length - 1 && "text-slate-500")} href={`${crum.href === "" ? "/" : crum.href}`}>
              {crum.crum}
            </Link>
            {index !== crums.length - 1 && <span>/</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrums;
