import React, { useState, useEffect } from "react";
import { usePosition } from "../hooks/usePosition";

import axios from "axios";

export function WeatherCard() {
  const [data, setData] = useState({});
  const watch = true;
  const { latitude, longitude } = usePosition(watch);
  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d02fd25e2c26e6e422160e087f7388d0`;
    axios.get(url, { timeout: 0 }).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  });
  return (
    <div className="location">
      <h1>{data.name}</h1>
    </div>
  );
}

export default WeatherCard;
