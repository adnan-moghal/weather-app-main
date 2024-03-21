import './Weekly.css'

const Weekly = ({extraInfo}) => {

    function getDate(timestamp) { // This returns the day of the week by passing in a timestamp that is returned by the API call
        const data = extraInfo;

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
    
        const date = new Date(timestamp*1000); // The timestamp is returned as a UNIX timestamp. 
                                               // Multiply by 1000 to get current date
        const dayOfWeek = daysOfWeek[date.getDay()];
    
        return dayOfWeek;
      }
      if(extraInfo){
        return ( 
            <div className="weekly">
                <div className="day">
                    <p>{getDate(extraInfo.list[8].dt)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${extraInfo.list[8].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                    <p>{extraInfo.list[8].main.temp}°C</p>
                </div>
                <div className="day">
                    <p>{getDate(extraInfo.list[16].dt)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${extraInfo.list[16].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                    <p>{extraInfo.list[16].main.temp}°C</p>
                </div>
                <div className="day">
                    <p>{getDate(extraInfo.list[24].dt)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${extraInfo.list[24].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                    <p>{extraInfo.list[24].main.temp}°C</p>
                </div>
                <div className="day">
                    <p>{getDate(extraInfo.list[32].dt)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${extraInfo.list[32].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                    <p>{extraInfo.list[32].main.temp}°C</p>
                </div>
                <div className="day">
                    <p>{getDate(extraInfo.list[39].dt)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${extraInfo.list[39].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                    <p>{extraInfo.list[39].main.temp}°C</p>
                </div>
            </div>   
         );
      }
    
}
 
export default Weekly;