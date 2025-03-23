import s from "./s.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const FormInput = ({ className, label, ...props }: Props) => {
  return (
    <label className={s.wrapper}>
      {label && (
        <p className={s.label}>
          {label} <span>{props.required && "*"}</span>
        </p>
      )}
      <input {...props} className={`${s.input} ${className}`} />
    </label>
  );
};
