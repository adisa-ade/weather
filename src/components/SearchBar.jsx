import styles from "./SearchBar.module.css"
import WeatherContext from "../context/WeatherContext";
import { useContext, useState } from "react";

function SearchBar() {
  const { state, fetchWeather, dispatch } = useContext(WeatherContext);
  const { city } = state;
  const [searchCity, setSearchCity] = useState(city)  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || city.length < 4) return
    if (city.trim()) {
      fetchWeather(city);      
    }
    setSearchCity("")
  };
    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
        <div className={styles.input}>
        <img src="./images/icon-search.svg" alt="Search Icon" />
        <input
          type="text" 
          placeholder="Search for a place..."   
          value={city}
          onChange={(e) =>
            dispatch({ type: "SET_CITY", payload: e.target.value }) 
          }
          />        
        </div>        
        <button>Search</button>        
          </form>      
    );
  }
  export default SearchBar;
  