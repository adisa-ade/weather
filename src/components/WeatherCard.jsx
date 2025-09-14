function WeatherCard() {
    return (
      <div className="weather-card">
        <div className="location">
        <h1>Berlin, Germany</h1>
        <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className="temperature">
        <img src="./images/icon-sunny.webp" alt="" />
        <h1>20°</h1>
        </div>
      </div>
    );
  }
  export default WeatherCard;
  