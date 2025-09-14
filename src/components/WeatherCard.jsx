import { useContext } from "react";
import styles from "./WeatherCard.module.css"
import WeatherContext from "../context/WeatherContext";

function WeatherCard() {
    const { state, fetchWeather, dispatch } = useContext(WeatherContext);
    const { loading, error, weather, theme, city } = state;
    return (
      <div className={styles.weatherCard}>
        <div className={styles.location}>        
        <h1>{weather?.city}</h1>
        <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className={styles.temperature}>
        <img src="./images/icon-sunny.webp" alt="" />
        <h1>20°</h1>
        </div>
      </div>
    );
  }
  export default WeatherCard;
  