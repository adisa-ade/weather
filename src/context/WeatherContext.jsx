import React, { createContext, useReducer, useEffect, useState } from "react";
import { weatherReducer, initialState } from "../reducer/weatherReducer";
import { formatDate } from "../utils/formDate";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {  
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  
  const unitSystem = state.unitSystem
  // const temperatureUnit = state.temperatureUnit
  // const windSpeedUnit = state.windSpeedUnit
  // const precipitationUnit = state.precipitationUnit

  const params =
  unitSystem === "metric"
    ?
    ""    
    : "temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch";

// Search for a city weather
  async function fetchWeather(cityName) {    
    dispatch({ type: "FETCH_START" });
    try {
      // Get coordinates from city name
      const geoRes = await fetch(                      
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=4`        
      );
      const geoData = await geoRes.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      // console.log(geoData.results)
      const { latitude, longitude, name, country } = geoData.results[0];      

      // Fetch weather using coordinates
      const weatherRes = await fetch(                                
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,&daily=weather_code,temperature_2m_max,temperature_2m_min,&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m&timezone=auto&${params}`        
      );
      const weatherData = await weatherRes.json();      
      const formattedDate = formatDate(weatherData.current.time);         
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { ...weatherData, city: `${name}, ${country}`,  coords: { lat: latitude, lon: longitude }, formattedDate, unitSystem},
      });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  }
  
   useEffect(() => {        
        if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;                      
          dispatch({ type: "FETCH_START" });
  
          try {
            // Fetch weather from Open-Meteo
            const weatherRes = await fetch(                                                                                            
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,&daily=weather_code,temperature_2m_max,temperature_2m_min,&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m&timezone=auto&${params}`        
            );            
            const weatherData = await weatherRes.json();             
            // Fetch city name from BigDataCloud (reverse geocoding)            
            const geoRes = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const geoData = await geoRes.json();            
  
            const cityName =
              `${geoData.city}, ${geoData.countryName}`  ||            
              "Unknown location";  
              const formattedDate = formatDate(weatherData.current.time);            
            dispatch({
              type: "FETCH_SUCCESS",
              payload: {
                ...weatherData,
                city: cityName,
                unitSystem,                  
                formattedDate
              },
            });
          } catch (err) {
            dispatch({ type: "FETCH_ERROR", payload: err.message });
          }
        },
        (err) => {
          // console.warn("Geolocation denied:", err.message);  
          fetchWeather("Canada");
        }
      );
    } else {
      // fallback if geolocation not supported
      fetchWeather("Canada");
    }
  }, [unitSystem]);
  

  return (
    <WeatherContext.Provider value={{ state, dispatch, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContext