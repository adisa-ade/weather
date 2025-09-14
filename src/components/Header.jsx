import Button from "./Button";
import styles from "./Header.module.css"
function Header() {
    return (
      <header className={styles.header}>
        <span className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </span>
        <Button>Units</Button>
      </header>
    );
  }
  export default Header;
  