import Button from "./Button";
import styles from "./Header.module.css"
function Header() {
    return (
      <header className={styles.header}>
        <span className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </span>
        <Button><div><img src="./images/icon-units.svg" alt="unit-icon" /></div>Units</Button>
      </header>
    );
  }
  export default Header;
  