import s from "./s.module.scss"
export const Badge = ({quantity}: {quantity: number}) => {
  return (
    <div className={s.badge}>{quantity}</div>
  )
}
