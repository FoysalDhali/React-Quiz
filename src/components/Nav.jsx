import logo from "../assets/images/logo-bg.png";
import Account from "./Account";
import classes from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with foysal Logo" />
            <h3>Learn with Foysal</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
