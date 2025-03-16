import s from "./s.module.scss";
type Props = {
    title: string;
    className?: string
};

export const Hint = ({ title, className }: Props) => {
  return (
    <div className={`${s.hint} ${className}`}>
      <div className={s.block} />
      <p className={s.text}>{title}</p>
    </div>
  );
};
