// import React, { useState, useEffect } from "react";
// import { usePosition } from "../hooks/usePosition";

// import axios from "axios";

// export function WeatherCard() {
//   const [data, setData] = useState({});
//   const watch = true;
//   const { latitude, longitude } = usePosition(watch);
//   useEffect(() => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc4fa74b48e12da08bfc8ae0ed6a653b`;
//     axios.get(url).then((response) => {
//       setData(response.data);
//       console.log(response.data);
//     });
//   }, []);
//   return (
//     <div className="cardimage img-fluid">
//       <div className="p-5">
//         <h1 className="card-text text-end">Viseu</h1>
//         <h3 className="card-text text-end">Neve</h3>
//         <h1 className="card-text text-end">-4º</h1>
//       </div>
//       <div className="p-5">
//         <h2 className="card-title">08:30H</h2>
//         <h5 className="card-text">Quarta-feira,18 de novembro 2022</h5>
//       </div>
//     </div>
//   );
// }

// export default WeatherCard;
