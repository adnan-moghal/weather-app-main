import React, { useState } from "react";
import Hourly from "./Hourly";
import Weekly from "./Weekly";

const MainInfo = ({ info, extraInfo }) => {
  const weatherInfo = info;
  const extraWeatherInfo = extraInfo;

  const [clicked, setClicked] = useState(false);

  function getDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];

    return `${dayOfWeek}, ${date} ${month}`;
  }

  if (!weatherInfo) {
    return <p>Please enter a valid city</p>;
  } else {
    return (
      <>
        <div className={`weatherInfo ${clicked ? "expanded" : ""}`}>
          <h2>{weatherInfo.name}</h2>
          <div className={`container ${clicked ? "expanded" : ""}`}>
            <div className="primary">
              <p>Temperature: {weatherInfo.main.temp}°C</p>
              <p>Description: {weatherInfo.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
            </div>
            <div className={`secondary ${clicked ? "expanded" : ""}`}>
              <p>Feels like: {weatherInfo.main.feels_like}°C</p>
              <p>Humidity: {weatherInfo.main.humidity}%</p>
              <p>Pressure: {weatherInfo.main.pressure}</p>
              <p>Wind Speed: {weatherInfo.wind.speed}m/s</p>
            </div>
          </div>
          <Hourly extraInfo = {extraInfo} clicked ={clicked}/>
          <button onClick={() => setClicked(!clicked)}> {/* This button toggles the state */}
            {clicked ? "View less" : "View more"}
          </button>
          <p className="date">{getDate()}</p>
        </div>
        <Weekly extraInfo = {extraInfo}/>
      </>
    );
  }
};

export default MainInfo;
