/*MainInfo.js*/

import React, { useState } from "react";
import Hourly from "./Hourly";
import Weekly from "./Weekly";
import './index.css';
import './Weather.css';

const MainInfo = ({ info, extraInfo }) => {
  const weatherInfo = info;
  
  const [clicked, setClicked] = useState(false); //using states to track button value, so we can have animated divs

  function getDate() { //this function returns the date in Day, date, month by using JS Date function
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
    return (
    <p className="valid-location">Please enter a valid location</p>
    );
  } else {
    return (
      <>
        <div className={`weatherInfo ${clicked ? "expanded" : ""}`}> {/*using states to track weather button is clicked*/}
          <div className={`container ${clicked ? "expanded" : ""}`}> {/*to toggle expanding the divs*/}
            <div className="primary">
              <img className="primary-weather-icon"
                src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} //this uses the icon code returned from the api to get an icon automatically
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
          <Hourly extraInfo = {extraInfo} clicked ={clicked}/> {/*passing props to another component*/}
          <button className="view-button" onClick={() => setClicked(!clicked)}> {/*this button toggles the state*/}
            {clicked ? "View less" : "View more"}
          </button>
          <p className="date">{getDate()}</p>
        </div>
        <Weekly extraInfo = {extraInfo}/> {/*passing props to another component*/}
      </>
    );
  }
};

export default MainInfo;
