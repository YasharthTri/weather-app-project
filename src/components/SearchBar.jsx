import { useState } from "react";

function SearchBar(props) {
    const city=props.city;
    const handleCityChange=props.change;
    const clickHandler=props.handle;
    const handleUnit = props.unit;

    return (
      <div className="search-bar">
        <input type="text" placeholder="Search for any city worldwide..." value={city} onChange={handleCityChange} />
        <button onClick={clickHandler}>Search The Weather</button>
        <button onClick={() => handleUnit("C")}>°C</button>
        <button onClick={() => handleUnit("F")}>°F</button>
      </div>
    );
  }
  
  export default SearchBar;
