import React, { createContext, useReducer, useEffect } from "react";
import { weatherReducer, initialState } from "../reducer/weatherReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  async function fetchWeatherByCoords(lat, lon) {
    dispatch({ type: "FETCH_START" });

    try {
      
      // const geoRes = await fetch(
      //   // `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&count=1`
      // );
      // const geoData = await geoRes.json();

      // let cityName = "Unknown location";
      // if (geoData.results && geoData.results.length > 0) {
      //   cityName = `${geoData.results[0].name}, ${geoData.results[0].country}`;
      // }

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const weatherData = await weatherRes.json();        
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { ...weatherData.current_weather,  city: `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`,},
      });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  }

  async function fetchWeather(cityName) {
    dispatch({ type: "FETCH_START" });

    try {
      // 1️⃣ Get coordinates from city name
      const geoRes = await fetch(        
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2️⃣ Fetch weather using coordinates
      const weatherRes = await fetch(        
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: { ...weatherData.current_weather, city: `${name}, ${country}`,  coords: { lat: latitude, lon: longitude }, },
      });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  }

 // 🌍 Run once on mount → try to detect user location
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        // ✅ Direct weather fetch (no reverse geocode)
        dispatch({ type: "FETCH_START" });

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        )
          .then((res) => res.json())
          .then((weatherData) => {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: {
                ...weatherData.current_weather,
                city: `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`,
                coords: { lat: latitude, lon: longitude },
              },
            });
          })
          .catch((err) =>
            dispatch({ type: "FETCH_ERROR", payload: err.message })
          );
      },
      (err) => {
        console.warn("Geolocation denied:", err.message);
        // fallback: default city
        fetchWeather("Lagos");
      }
    );
  } else {
    // fallback if geolocation not supported
    fetchWeather("Lagos");
  }
}, []);

  return (
    <WeatherContext.Provider value={{ state, dispatch, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
