import { useContext } from "react";
import styles from "./DailyForecast.module.css"
import WeatherContext from "../context/WeatherContext";
import { formatDate } from "../utils/formDate";
function DailyForecast() {
  const {state}= useContext(WeatherContext)
  const {weather, loading} = state    

  const checkWeatherCondition = (temp) => {
    if (temp === 0) {
        return "images/icon-sunny.webp"
    }    
    else if (temp === 1 || temp === 2 ){
      return "/images/icon-partly-cloudy.webp"
    }   
    else if (temp === 3){
      return "/images/icon-overcast.webp"
    }   
    else if (temp === 45 || temp === 48){
      return "/images/icon-fog.webp"
    }
    else if (temp >= 51 && temp <= 57){
      return "/images/icon-drizzle.webp"
    }
    else if (temp >= 61 && temp <= 67){
      return "/images/icon-rain.webp"
    }
    else if (temp >= 71 && temp <= 77){
      return "/images/icon-snow.webp"
    }
    else if (temp >= 80 && temp <= 82){
      return "/images/icon-rain.webp"
    }
    else if (temp === 85 || temp === 86){
      return "/images/icon-snow.webp"
    }
    else {
      return "/images/icon-storm.webp"
    }
  }
  
    const days = [
    { day: weather?.daily.time[0], min: weather?.daily.temperature_2m_min[0],
       max: weather?.daily.temperature_2m_max[0],
       weatherCode:weather?.daily.weather_code[0]}, 
    { day: weather?.daily.time[1], min: weather?.daily.temperature_2m_min[1],
       max: weather?.daily.temperature_2m_max[1],
       weatherCode:weather?.daily.weather_code[1]}, 
    { day: weather?.daily.time[2], min: weather?.daily.temperature_2m_min[2],
       max: weather?.daily.temperature_2m_max[2],
       weatherCode:weather?.daily.weather_code[2]}, 
    { day: weather?.daily.time[3], min: weather?.daily.temperature_2m_min[3],
       max: weather?.daily.temperature_2m_max[3],
       weatherCode:weather?.daily.weather_code[3]}, 
    { day: weather?.daily.time[4], min: weather?.daily.temperature_2m_min[4],
       max: weather?.daily.temperature_2m_max[4],
       weatherCode:weather?.daily.weather_code[4]}, 
    { day: weather?.daily.time[5], min: weather?.daily.temperature_2m_min[5],
       max: weather?.daily.temperature_2m_max[5],
       weatherCode:weather?.daily.weather_code[5]}, 
    { day: weather?.daily.time[6], min: weather?.daily.temperature_2m_min[6],
       max: weather?.daily.temperature_2m_max[6],
       weatherCode:weather?.daily.weather_code[6]}, 
  ];
  return (

    <div className={styles.dailyForecast}>
      {days.map((d, i) => (
        <div className={`${styles.day} fade-up`} key={i} style={{ animationDelay: `${i * 0.1}s` }}>        
         {loading ? "" :        
            <>               
          <h2>{formatDate(d.day).split(',')[0].slice(0,3)}</h2>                        
          <img src={checkWeatherCondition(d.weatherCode)}  alt="weather code"/>                  
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
