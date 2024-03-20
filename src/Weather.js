import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainInfo from './MainInfo';
import './Weather.css';
import searchIcon from './Search Icon.png'

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [extraWeatherData, setExtraWeatherData] = useState(null);

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

    const fetchExtraData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=1fd2c72d87d58f1770496dbef0ecff87`
            );
            setExtraWeatherData(response.data);
            console.log(response.data); //You can see all the weather data in console log
        } catch (error) {
            setExtraWeatherData(null)
            console.error(error);
        }
    };
    

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
        fetchExtraData();
    };

    const handleSearchClick = () => {
    fetchData();
    };
    
    return (
        <>
            <div className='search-container'>
                <form onSubmit={handleSubmit} className="search-form">
                    {/* <button type="submit" className="search-button">Get Weather</button> */}
                    <img className='search-button'
                        src={searchIcon} // Use the imported search icon image
                        alt="Search"
                        onClick={handleSearchClick} // Handle click event
                        style={{ cursor: 'pointer' }} // Change cursor to indicate clickable
                    />
                    <input
                        type="text"
                        placeholder="Searh for a location/university"
                        value={city}
                        onChange={handleInputChange}
                        className="search-input"
                    />
                </form>
            </div>
            <MainInfo info={weatherData} extraInfo={extraWeatherData}/>
        </>
    );
};
export default Weather;