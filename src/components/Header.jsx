import { useState } from "react";
import styles from "./Header.module.css"
import Settings from "./Settings"


function Header() {  
  
  const [isOpen, setIsOpen] = useState(false)  
    return (
      <header className={styles.header}>
        <span className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </span>
        <div>
        <button className='units-btn' onClick={() => setIsOpen(!isOpen)}>           
        <div>
         <img src="./images/icon-units.svg" alt="unit-icon" />
        </div>                
          <span>          
          Units
        </span>  
        <div>
          <img src="./images/icon-dropdown.svg" alt="dropdown-icon" />
          </div>
        </button>        
        {isOpen && <div className="day-picker">
          <Settings />
        </div>
           }
        </div >
      </header>
    );
  }
  export default Header;
  