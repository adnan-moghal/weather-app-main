import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainInfo from './MainInfo';
import './Weather.css'
import searchIcon from './assets/Search Icon.png'
// import Forecast from './forecast';



const Weather = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1fd2c72d87d58f1770496dbef0ecff87`
            );
            setWeatherData(response.data);
            console.log(response.data); //You can see all the weather data in console log
        } catch (error) {
            setWeatherData(null)
            console.error(error);
        }
    };
    

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    const handleSearchClick = () => {
        fetchData();
    };
    
    return (
        
        <div className="main" style={{ backgroundImage: 'linear-gradient(180deg, #00A3FF 59%, #0063BF 100%)' }}>
            <div className='Search'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search for location/university"
                        value={city}
                        onChange={handleInputChange}
                    />
                    {/* <button type="submit">Get Weather</button> */}
                    <img
                        src={searchIcon} // Use the imported search icon image
                        alt="Search"
                        onClick={handleSearchClick} // Handle click event
                        style={{ cursor: 'pointer' }} // Change cursor to indicate clickable
                    />
                </form>
            </div>
            <div className='mainbox'>
                <MainInfo info={weatherData} />
            </div>
        </div>
    );
};
export default Weather;