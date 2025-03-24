import s from "./s.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: Props) => {
  return <button {...props} className={`${s.button} ${className}`}>{children}</button>;
};
