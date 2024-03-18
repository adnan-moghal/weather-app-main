
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forecast = () => {
    const [city, setCity] = useState('');
    const [forecastData, setForecastData] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    const fetchCoordinates = async () => {
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=15532ebe5a24029af4cb4b59954ba640`
            );
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setCoordinates({ lat, lon });
            } else {
                throw new Error('City not found');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const fetchForecast = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=15532ebe5a24029af4cb4b59954ba640`
            );
            setForecastData(response.data);
            console.log(response.data); //You can see all the weather data in console log
        } catch (error) {
            setForecastData(null)
            console.error(error);
        }
    };

    useEffect(() => {
        if (coordinates) {
            fetchForecast();
        }
    }, [coordinates]);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCoordinates();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={handleInputChange} />
                <button type="submit">Get Forecast</button>
            </form>
            {forecastData ? (
                <>
                <h2>{forecastData.dt}</h2>
                {/* Display other forecast data here */}
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
            <p>its supposed to return something</p>
        </div>
    );
};

export default Forecast;
