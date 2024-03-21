import React, { useState } from "react";
import Hourly from "./Hourly";
import Weekly from "./Weekly";
import './index.css';
import './Weather.css';

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
    return <p className="valid-city">Please enter a valid city</p>;
  } else {
    return (
      <>
        <div className={`weatherInfo ${clicked ? "expanded" : ""}`}>
          {/* <h2>{weatherInfo.name}</h2> */}
          <div className={`container ${clicked ? "expanded" : ""}`}>
            <div className="primary">
              <img className="primary-weather-icon"
                src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
              <div className="item-container">
                <h2>{weatherInfo.name}</h2>
                <p className="tempItem">Temperature: {weatherInfo.main.temp}°C</p>
                <p className="descItem">Description: {weatherInfo.weather[0].description}</p>
              </div>
            </div>
            <div className={`secondary ${clicked ? "expanded" : ""}`}>
              <p className="expanded-info">Feels like: {weatherInfo.main.feels_like}°C</p>
              <p className="expanded-info">Humidity: {weatherInfo.main.humidity}%</p>
              <p className="expanded-info">Pressure: {weatherInfo.main.pressure}</p>
              <p className="expanded-info">Wind Speed: {weatherInfo.wind.speed}m/s</p>
            </div>
          </div>
          <Hourly extraInfo = {extraInfo} clicked ={clicked}/>
          <button className="view-button" onClick={() => setClicked(!clicked)}> {/* This button toggles the state */}
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
