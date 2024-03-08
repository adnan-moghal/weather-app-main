const MainInfo = ({info}) => {
    const weatherInfo = info

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
                    </>
                ) : (
                        <p>Please enter a City</p>
                )}
            </div>
        )
    }

}
 
export default MainInfo;