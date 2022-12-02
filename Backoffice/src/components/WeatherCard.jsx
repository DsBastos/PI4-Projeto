import React, { useState } from "react";
import axios from "axios";

export function WeatherCard() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=viseu&appid=d02fd25e2c26e6e422160e087f7388d0`;

  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="location">
      <p>{data.name}</p>
    </div>
  );
}

export default WeatherCard;
