import Button from "./Button";

function Header() {
    return (
      <header className="header">
        <span className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </span>
        <Button>Units</Button>
      </header>
    );
  }
  export default Header;
  