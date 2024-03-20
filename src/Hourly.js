import './Hourly.css'

const Hourly = ({extraInfo, clicked}) => {
    const hourlyData = extraInfo;

    function getDate(timestamp) {
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
    
        const currentDate = new Date(timestamp);
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
    
        return `${dayOfWeek}`;
      }

    if(hourlyData)
    {
        return ( 
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