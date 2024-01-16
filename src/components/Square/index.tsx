interface SquareProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "10" | "20" | "30" | "40";
  rotate?: "45" | "90" | "135" | "180" | "225" | "270" | "315";
  className?: string;
}

const TailwindRotate = {
  "45": "rotate-45",
  "90": "rotate-90",
  "135": "rotate-135",
  "180": "rotate-180",
  "225": "rotate-225",
  "270": "rotate-270",
  "315": "rotate-315",
};

const TailwindWidth = {
  "10": "w-[10px] h-[10px]",
  "20": "w-[20px] h-[20px]",
  "30": "w-[30px] h-[30px]",
  "40": "w-[40px] h-[40px]",
};

const Square = (props: SquareProps) => {
  const { width = 20, rotate = 45, className = "", ...rest } = props;

  return (
    <div
      className={`${TailwindWidth[width]} ${TailwindRotate[rotate]} ${className}`}
      {...rest}></div>
  );
};

export default Square;
