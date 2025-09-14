import styles from "./SearchBar.module.css"
import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";

function SearchBar() {
  const { state, fetchWeather, dispatch } = useContext(WeatherContext);
  const { loading, error, weather, theme, city } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };
    return (
      <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
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
      </div>
    );
  }
  export default SearchBar;
  