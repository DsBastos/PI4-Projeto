import React, { useState } from "react";
import axios from "axios";

export function WeatherCard() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=&appid=d02fd25e2c26e6e422160e087f7388d0`;

  axios.get(url).then((response) => {
    setData(response.data);
    console.log(response.data);
  });

  return (
  <div className="cardimage">
    <div className="container">
    <div className="p-5">
    <h5 className="card-title text-end">viseu</h5>
    <h3 className="card-title text-end">Neve</h3>
    <h5 className="card-text text-end">-4º</h5>
    </div>
    <div className="p-5">
    <h5 className="card-title  ">08:30H</h5>
    <h5 className="card-text">Quarta-feira,18 de novembro 2022</h5>
    </div>
  </div>
  </div>
  );
}

export default WeatherCard;
