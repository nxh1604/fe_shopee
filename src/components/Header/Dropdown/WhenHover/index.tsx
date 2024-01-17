const DropdownWrapper = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={"relative" + ` ${className}`}>{children}</div>;
};

const DropdownHover = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={"peer" + ` ${className}`}>{children}</div>;
};

const DropdownContent = ({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        "hidden hover:block absolute peer-hover:block top-[90%] pt-3 z-10 right-0 " +
        ` ${className}`
      }>
      {children}
    </div>
  );
};

export { DropdownContent, DropdownWrapper, DropdownHover };
