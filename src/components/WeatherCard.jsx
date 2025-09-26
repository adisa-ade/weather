import { useContext } from "react";
import styles from "./WeatherCard.module.css"
import WeatherContext from "../context/WeatherContext";

function WeatherCard() {
    const { state} = useContext(WeatherContext);
    const { loading, error, weather } = state;   
    
    return (                 
      <div className={`${loading ? 'isLoading' : styles.weatherCard }`}>                           
        {!loading ?
        <>        
        <div className={styles.location}>        
        <h1>{weather?.city}</h1>
        <p>{weather?.formattedDate}</p>
        </div>
        <div className={styles.temperature}>
        <img src="./images/icon-sunny.webp" alt="" />
        <h1>{weather?.current.temperature_2m}°</h1>
        </div>
        </>
        :
        <div className="ld-content bounce">
          <div>
          <img src="./images/loadingdots.png" alt="loading dots" />
          </div>
          <h1>Loading...</h1>
        </div>
        }
      </div>
    );
  }
  export default WeatherCard;
  