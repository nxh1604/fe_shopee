export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  srOnly?: boolean;
}

const InputForm = ({ srOnly = true, label, className = "", ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className={`${srOnly && "sr-only"}`} htmlFor={label}>
        {label}
      </label>
      <input className={"p-3 border-2 rounded-sm" + ` ${className}`} id={label} {...rest} />
    </div>
  );
};

export default InputForm;
