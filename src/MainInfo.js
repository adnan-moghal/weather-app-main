import './MainInfo.css'
// import './forecast.js'

const MainInfo = ({ info }) => {
    const weatherInfo = info

    console.log(weatherInfo);


    if (weatherInfo === null) {
        return (
           <p>Please enter a valid city</p> 
        )
    } else {
        // Convert visibility from meters to kilometers
        const visibilityKm = (weatherInfo.visibility / 1000).toFixed(2); // Convert to kilometers and round to 2 decimal places
        
        // Extract and format the long date
        const longDate = new Date(weatherInfo.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        });

        return (
            <div className="weatherInfo">
                {weatherInfo ? (
                    <>
                        <div className='infoContainer'>
                        <div className='leftInfo'>
                            <h2>{weatherInfo.name}</h2>
                            <div className='tempContainer'>
                                <img className='icon' src={"https://openweathermap.org/img/wn/" + weatherInfo.weather[0].icon + "@2x.png"} alt=""/>
                                <p className='Temp'>{Math.round(weatherInfo.main.temp)}°C</p>
                            </div>
                            <h3>{weatherInfo.weather[0].description}</h3>
                        </div>
                        {/* <p>Feels like : {weatherInfo.main.feels_like}°C</p> */}
                        {/* <p>Pressure : {weatherInfo.main.pressure}</p> */}
                        <div className='rightInfo'>
                            <p><span>H:</span> {weatherInfo.main.temp_max}°C <span>L:</span> {weatherInfo.main.temp_min}°C</p>
                            <p>wind speed : {weatherInfo.wind.speed}km/ph</p>
                            <p>humidity :   {weatherInfo.main.humidity}%</p>
                            <p>visibility : {visibilityKm}km</p>
                            <p>wind speed : {weatherInfo.wind.speed}km</p>
                            {weatherInfo.pop ? (
                                <p>Precipitation : {weatherInfo.forecast.precipitation.probability}%</p>
                            ) : (
                                <p>No precipitation data available</p>
                            )}
                            </div>
                        </div>
                        <hr></hr>
                        <p className='date'>{longDate}</p>
                        <div className='bottomBox'>

                        </div>
                    </>
                ) : (
                        <p>Please enter a City</p>
                )}
            </div>
        )
    }

}
 
export default MainInfo;