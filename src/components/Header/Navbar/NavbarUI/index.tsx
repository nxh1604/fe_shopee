import Link from "next/link";

const NavItem = (
  props: React.PropsWithChildren<{
    href: string;
    className?: string;
  }>
) => {
  const { href, className = "", children } = props;

  return (
    <li className={"hover:opacity-80 cursor-pointer" + ` ${className}`}>
      <Link className="text-nowrap" href={href}>
        {children}
      </Link>
    </li>
  );
};

const NavItemWithIcon = (
  props: React.PropsWithChildren<{
    href: string;
    className?: string;
  }>
) => {
  const { href, className = "", children } = props;

  return (
    <li className={"hover:opacity-80 cursor-pointer" + ` ${className}`}>
      <Link className="flex items-center gap-1" href={href}>
        {children}
      </Link>
    </li>
  );
};

export { NavItem, NavItemWithIcon };
