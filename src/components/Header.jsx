import { useReducer } from "react";

import Button from "./Button";
import styles from "./Header.module.css"
import { initialState, weatherReducer } from "../reducer/weatherReducer";
function Header() {`1`  
  const [state, dispatch] = useReducer(weatherReducer, initialState);    
  console.log(state.toggle)
    return (
      <header className={styles.header}>
        <span className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </span>
        <button className='units-btn'> 
        <div>
         <img src="./images/icon-units.svg" alt="unit-icon" />
        </div>                
          <span 
          onClick={() =>
           dispatch ({ 
            type: "TOGGLE_BUTTON",
            payload:{...state, toggle: false},
            })
            }
            >          
          Units
        </span>  
        <div>
          <img src="./images/icon-dropdown.svg" alt="dropdown-icon" />
          </div>
        </button>
      </header>
    );
  }
  export default Header;
  