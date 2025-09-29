import { useContext } from "react";
import styles from "./InfoCards.module.css"
import WeatherContext from "../context/WeatherContext";

function InfoCards() {
  const { state} = useContext(WeatherContext);
  const { loading, weather } = state;       
  const info = [
    { label: "Feels Like", value: weather?.current.temperature_2m, unit: '°'},
    { label: "Humidity", value: weather?.current.relative_humidity_2m, unit: weather?.current_units.relative_humidity_2m},
    { label: "Wind", value: weather?.current.wind_speed_10m, unit: weather?.current_units.wind_speed_10m},
    { label: "Precipitation", value: weather?.current.precipitation, unit: weather?.current_units.precipitation},
  ];

  return (
    <div className={styles.infoCards}>
      {info.map((item, i) => (
        <div className={`${styles.infoCard} fade-up`} key={i}>          
          <p>{item.label}</p>          
          {loading? "---" :<h4>{item.value} {item.unit}</h4>}
        </div>        
      ))}      
    </div>
  );
}

export default InfoCards;
