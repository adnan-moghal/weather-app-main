import { useEffect, useState } from "react"

const MainInfo = ({info}) => {
    const weatherInfo = info;

    const [clicked, setClicked] = useState(false);
    
    const click = (bool) => {
        setClicked(!bool)
        console.log(bool)
    }

    if (weatherInfo === null) {
        return (
           <p>Please enter a valid city</p> 
        )
    } else {
        return (
            <div className="weatherInfo">
                {weatherInfo ? (
                    <>
                        <h2>{weatherInfo.name}</h2>
                        <p>Temperature: {weatherInfo.main.temp}°C</p>
                        <p>Description: {weatherInfo.weather[0].description}</p>
                        <img src={"https://openweathermap.org/img/wn/" + weatherInfo.weather[0].icon + "@2x.png"} alt=""/>
                        <p>Feels like : {weatherInfo.main.feels_like}°C</p>
                        <p>Humidity : {weatherInfo.main.humidity}%</p>
                        <p>Pressure : {weatherInfo.main.pressure}</p>
                        <p>Wind Speed : {weatherInfo.wind.speed}m/s</p>
                        <button onClick={() => {click(clicked)}}>test clickers</button>
                        {clicked ? (
                            <p>clicked is true</p>
                        ): (
                            <p>clicked is flse</p>
                        )}
                    </>
                ) : (
                        <p>Please enter a City</p>
                )}
            </div>
        )
    }

}
 
export default MainInfo;