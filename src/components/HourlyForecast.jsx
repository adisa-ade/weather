import styles from "./HourlyForecast.module.css";
import WeatherContext from "../context/WeatherContext";
import { useContext, useMemo, useState, useEffect } from "react";
import DayPicker from "./DayPicker";

function HourlyForecast() {
  const { state } = useContext(WeatherContext);
  const { weather, loading } = state;

  const [isOpen, setIsOpen] = useState(false);

  // track "now" so forecast updates over time
  const [now, setNow] = useState(new Date());

  // update `now` every minute
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // figure out today’s name dynamically
  const todayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const [selectedDay, setSelectedDay] = useState(todayName);

  // regroup data when weather changes
  const grouped = useMemo(() => {
    if (!weather?.hourly) return {};

    const { time, temperature_2m, precipitation } = weather.hourly;
    const groupedDays = {};

    time.forEach((t, index) => {
      const date = new Date(t);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });

      if (!groupedDays[day]) groupedDays[day] = [];

      groupedDays[day].push({
        date,
        time: date.toLocaleTimeString([], { hour: "numeric", hour12: true }),
        temp: temperature_2m[index],        
      });
    });

    return groupedDays;
  }, [weather]);
  

  // slice next 8 hours dynamically
  const slicedData = useMemo(() => {
    if (!grouped[selectedDay]) return [];

    if (selectedDay === todayName) {
      // today → slice from "now"
      return grouped[selectedDay]
        .filter((entry) => entry.date >= now)
        .slice(0, 8);
    }

    // other days → slice from 00:00
    return grouped[selectedDay].slice(0, 8);
  }, [grouped, selectedDay, todayName, now]);

  return (
    <div className={styles.hourlyForecast}>      
      <div className={styles.top}>
        <h3>Hourly Forecast</h3>
        <div>
          <button
            className="units-btn"            
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedDay}</span>
            <img src="./images/icon-dropdown.svg" alt="dropdown-icon" />
          </button>

          {isOpen && (
            <DayPicker              
              isOpen={isOpen} onClose={() => setIsOpen(false)}
              onSelectDay={(day) => {
                setSelectedDay(day);                
              }}
              days={Object.keys(grouped)}
            />
          )}
        </div>
      </div>

      {/* Forecast Data */}
      <div className="mb-6">
        {/* {slicedData.length === 0 ? (
        
          <p>No data available</p>
        ) : ( */}
          <div className={styles.hoursList}>
            {slicedData.map((h, i) => (              
              <div
                key={i}
                className={`${styles.hour} slide-in`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className={styles.time}>{loading ? "" : h.time}</span>
                <span className={styles.temp}>{`${loading ? "" : parseInt(h.temp, 10).toString()}`}°</span>
              </div>
            )
            )}
          </div>
        {/* // )} */}
      </div>
    </div>
  );
}

export default HourlyForecast;
