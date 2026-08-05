function WeatherDisplay({ data,unit }) {
    if (!data) return <p>No data yet</p>;
    if (data.error) return <p>{data.error.message}</p>;
  
    return (
      <div className="weather-card">
        <h3>{data.location.name},{data.location.country}</h3>
        <h1>{unit==="C"?data.current.temp_c +"°C":data.current.temp_f+ "°F"}</h1>
        <p>{data.current.condition.text}</p>
  
        <div className="details">
          <div>Visibility: {data.current.vis_km} km</div>
          <div>Wind: {data.current.wind_kph} kph</div>
          <div>Humidity: {data.current.humidity}%</div>
          <div>Pressure: {data.current.pressure_mb} mb</div>
          <div>
          Feels Like:{" "}
          {unit === "C"
            ? data.current.feelslike_c + "°C"
            : data.current.feelslike_f + "°F"}
        </div>
        </div>
      </div>
    );
  }
  
  export default WeatherDisplay;