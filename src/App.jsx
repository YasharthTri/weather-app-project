import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { useState } from "react";
import "./App.css";

function App() {
  const[city,setCity]=useState("");
  const[unit,setUnit]=useState("C")
  const [weather,setWeather]=useState(null);
  function handleUnit(newUnit){
    setUnit(newUnit);
  }
  function handleCityChange(event){
      setCity(event.target.value);
  }
  function clickHandler(){
    if (!city) return;
      console.log("fetch weather")
      fetchWeather();
  }
  const fetchWeather=async ()=>{
      try{
          const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=366b8af1e06b457e815191634260804&q=${city}&aqi=yes`);
          const data=await response.json();
          setWeather(data);

      }
      catch(error){
        console.error(error);;
      }
  }

  return (
    <div className="main-container">
      <h1 className="title">Weather<span>Pro</span></h1>
      <p className="subtitle">
        Experience weather like never before with real-time data,
        beautiful visuals, and precise forecasts
      </p>

      <SearchBar city={city} handle={clickHandler} change={handleCityChange} unit={handleUnit}  />

      <div className="weather-section">
        <WeatherDisplay data={weather} unit={unit} />
      </div>
    </div>
  );
}

export default App;
