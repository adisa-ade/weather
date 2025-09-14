function DailyForecast() {
  const days = [
    { day: "Tue", min: 14, max: 20, icon: "🌧️" },
    { day: "Wed", min: 15, max: 22, icon: "🌥️" },
    { day: "Thu", min: 18, max: 27, icon: "⛅" },
    { day: "Fri", min: 21, max: 31, icon: "☀️" },
    { day: "Sat", min: 17, max: 25, icon: "☀️" },
    { day: "Sun", min: 19, max: 28, icon: "🌤️" },
    { day: "Mon", min: 20, max: 26, icon: "⛅" },
  ];

  return (
    <div className="daily-forecast">
      {days.map((d, i) => (
        <div className="day fade-up" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <h2>{d.day}</h2>
          <span>{d.icon}</span>
          <div>
          <span>{d.min}°</span>
          <span> {d.max}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;
