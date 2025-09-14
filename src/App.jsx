import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import InfoCards from "./components/InfoCards";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <h2 className="title">How’s the sky looking today?</h2>
      <SearchBar />      
      <div className="info-grid">                
      <div className="left-info-grid">
      <WeatherCard />
      <InfoCards />
      <div>
        <h3>Daily forecast</h3>
      <DailyForecast />          
      </div>
      </div>      
      <div>          
          <HourlyForecast />
      </div>      
      </div>      
    </div>
  );
}

export default App;
