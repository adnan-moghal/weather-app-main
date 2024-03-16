import { useState } from "react"

const MainInfo = ({info}) => {
    const weatherInfo = info;

    const [clicked, setClicked] = useState(true);
    
    const click = (clicked) => {
        setClicked(clicked => !clicked)
        console.log(clicked);
    }

    function getDate() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = months[currentDate.getMonth()];
        
        return `${dayOfWeek}, ${date} ${month}`;
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
                        <div className="container">
                            <div className="primary">
                                    <h2>{weatherInfo.name}</h2>
                                    <p>Temperature: {weatherInfo.main.temp}°C</p>
                                    <p>Description: {weatherInfo.weather[0].description}</p>
                                    <img src={"https://openweathermap.org/img/wn/" + weatherInfo.weather[0].icon + "@2x.png"} alt=""/>
                                </div>
                                <div className={"secondary" + (clicked ? "" : " expanded")}>
                                    <p>Feels like : {weatherInfo.main.feels_like}°C</p>
                                    <p>Humidity : {weatherInfo.main.humidity}%</p>
                                    <p>Pressure : {weatherInfo.main.pressure}</p>
                                    <p>Wind Speed : {weatherInfo.wind.speed}m/s</p>
                            </div>
                        </div>
                        <button onClick={() => {click(clicked)}}>{
                            clicked ? (
                                "View more"
                            ) : (
                                "View less"
                            )
                        }</button>
                        <p className="date">{getDate()}</p>
                    </>
                ) : (
                        <p>Please enter a City</p>
                )}
            </div>
        )
    }

}
 
export default MainInfo;