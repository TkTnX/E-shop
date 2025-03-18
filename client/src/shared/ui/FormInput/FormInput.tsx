import s from "./s.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const FormInput = ({ className, ...props }: Props) => {
  return <input {...props} className={`${s.input} ${className}`} />;
};
