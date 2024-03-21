import './Hourly.css'

const Hourly = ({extraInfo, clicked}) => {
    const hourlyData = extraInfo;

    if(hourlyData) // returns template code for the hourly info by passing the API call that grab hourly and 5 day forecast
    {
        return ( 
            //class name is dynamic to allow animations
            <div className={`hourly ${clicked ? "expanded" : ""}`}>  
                <div className="hour">
                    <p>12:00</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${hourlyData.list[0].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                    <p>{hourlyData.list[0].weather[0].description}</p>  
                </div>
                <div className="hour">
                    <p>15:00</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${hourlyData.list[1].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    /> 
                    <p>{hourlyData.list[0].weather[0].description}</p> 
                </div>
                <div className="hour">
                    <p>18:00</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${hourlyData.list[2].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />  
                    <p>{hourlyData.list[0].weather[0].description}</p> 
                </div>
                <div className="hour">
                    <p>21:00</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${hourlyData.list[3].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    /> 
                    <p>{hourlyData.list[0].weather[0].description}</p> 
                </div>
            </div>
         );
    }
}
     
export default Hourly;