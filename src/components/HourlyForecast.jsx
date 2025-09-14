function HourlyForecast() {
  const hours = [
    { time: "3 PM", temp: 20, icon: "☁️" },
    { time: "4 PM", temp: 20, icon: "🌥️" },
    { time: "5 PM", temp: 19, icon: "☁️" },
    { time: "6 PM", temp: 19, icon: "🌧️" },
    { time: "7 PM", temp: 18, icon: "🌧️" },
    { time: "8 PM", temp: 17, icon: "🌙" },
    { time: "9 PM", temp: 17, icon: "🌙" },
    { time: "10 PM", temp: 17, icon: "🌙" },
  ];

  return (
    <div className="hourly-forecast">
      <h3>Hourly forecast</h3>
      {hours.map((h, i) => (
        <div className="hour slide-in" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <span> <span>{h.icon}</span> {h.time}</span>        
          <span>{h.temp}°</span>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
