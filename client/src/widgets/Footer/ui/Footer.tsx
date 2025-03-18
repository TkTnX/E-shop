import { Link } from "react-router";
import s from "./s.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.item}>
          <Link className={s.logo} to={"/"}>
            Exclusive
          </Link>
        </div>
        <div className={s.item}>
          <h4 className={s.itemTitle}>Support</h4>
          <ul className={s.itemList}>
            <li>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="tel:88015888889999">+88015-88888-9999</a>
            </li>
          </ul>
        </div>
        <div className={s.item}>
          <h4 className={s.itemTitle}>Account</h4>
          <ul className={s.itemList}>
            <li>
              <Link to={"/profile"}>My Account</Link>
            </li>
            <li>
              <Link to={"/sign-up"}>Login / Register</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/favorites"}>Wishlist</Link>
            </li>
            <li>
              <Link to={"/catalog"}>Shop</Link>
            </li>
          </ul>
        </div>
        <div className={s.item}>
          <h4 className={s.itemTitle}>Quick Link</h4>
          <ul className={s.itemList}>
            <li>
              <Link to={"#"}>Quick Link</Link>
            </li>
            <li>
              <Link to={"#"}>Terms Of Use</Link>
            </li>
            <li>
              <Link to={"#"}>FAQ</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={s.item}>
          <h4 className={s.itemTitle}>Download App</h4>
          <p className={s.saveText}>Save $3 with App New User Only</p>
          <div className={s.saveLinks}>
            <img src="/images/general/qrcode.svg" alt="Qr" />
            <div className={s.stores}>
              <a href="https://play.google.com/">
                <img src="/images/general/gp.svg" alt="Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img src="/images/general/as.svg" alt="Apple Store" />
              </a>
            </div>
          </div>
          <div className={s.socials}>
            <a href="#!">
              <img src="/images/general/socials/facebook.svg" alt="Facebook" />
            </a>
            <a href="#!">
              <img src="/images/general/socials/twitter.svg" alt="twitter" />
            </a>
            <a href="#!">
              <img
                src="/images/general/socials/instagram.svg"
                alt="instagram"
              />
            </a>
            <a href="#!">
              <img src="/images/general/socials/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <p className={s.copyright}>
        © Copyright E-store 2025. All right reserved
      </p>
    </footer>
  );
};
