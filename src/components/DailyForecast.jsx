import { useContext } from "react";
import styles from "./DailyForecast.module.css"
import WeatherContext from "../context/WeatherContext";
import { formatDate } from "../utils/formDate";
function DailyForecast() {
  const {state}= useContext(WeatherContext)
  const {weather, loading} = state    
    const days = [
    { day: weather?.daily.time[0], min: weather?.daily.temperature_2m_min[0], max: weather?.daily.temperature_2m_max[0], icon: "🌧️" },
    { day: weather?.daily.time[1], min: weather?.daily.temperature_2m_min[1], max: weather?.daily.temperature_2m_max[1], icon: "🌥️" },
    { day: weather?.daily.time[2], min: weather?.daily.temperature_2m_min[2], max: weather?.daily.temperature_2m_max[2], icon: "⛅" },
    { day: weather?.daily.time[3], min: weather?.daily.temperature_2m_min[3], max: weather?.daily.temperature_2m_max[3], icon: "☀️" },
    { day: weather?.daily.time[4], min: weather?.daily.temperature_2m_min[4], max: weather?.daily.temperature_2m_max[4], icon: "☀️" },
    { day: weather?.daily.time[5], min: weather?.daily.temperature_2m_min[5], max: weather?.daily.temperature_2m_max[5], icon: "🌤️" },
    { day: weather?.daily.time[6], min: weather?.daily.temperature_2m_min[6], max: weather?.daily.temperature_2m_max[6], icon: "⛅" },
  ];

  return (
    <div className={styles.dailyForecast}>
      {days.map((d, i) => (
        <div className={`${styles.day} fade-up`} key={i} style={{ animationDelay: `${i * 0.1}s` }}>        
         {loading ? "" :        
            <>
          <h2>{formatDate(d.day).split(',')[0].slice(0,3)}</h2>
          <span>{d.icon}</span>
          <div className={styles.temperature}>          
          <span>{parseInt(d.min, 10).toString()}°</span>        
          <span> {parseInt(d.max, 10).toString()}°</span>
          </div>
          </>          }
        </div>
      ))}      
    </div>
  );
}

export default DailyForecast;
