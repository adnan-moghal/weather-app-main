// ClothingRecommendation.js

const ClothingRecommendation = ({ weatherData }) => {
  const getRecommendations = () => {
    if (!weatherData) return null;
    const temp = weatherData.main.temp; // current temp
    const weatherCondition = weatherData.weather[0].main; // weather description

    let recommendations = '';
    //Setting the recomendations based on the weather condition
    if (weatherCondition === 'Clear') {
      recommendations = 'It’s clear sky. Wear sunglasses!';
    } else if (weatherCondition === 'Clouds') {
      recommendations = 'It’s cloudy. Light layers are recommended.';
    } else if (weatherCondition === 'Snow') {
      recommendations = 'It’s snowing. Bundle up warmly!';
    } else if (weatherCondition === 'Rain' || weatherCondition === 'Drizzle') {
      recommendations = 'It’s rainy. Don’t forget an umbrella and a waterproof jacket!';
    } else if (weatherCondition === 'Thunderstorm') {
      recommendations = 'There’s a thunderstorm. Stay indoors if possible!';
    } else if (weatherCondition === 'Mist') {
      recommendations = 'It’s misty. Wear bright clothes to be visible.';
    }

    // Add more specific recommendations based on temperature
    if (temp < 0) {
      recommendations += ' Also, put on a coat, gloves, and a warm hat.';
    } else if (temp >= 0 && temp < 15) {
      recommendations += ' Also, you might need long sleeves and a jacket.';
    } else if (temp >= 15 && temp < 25) {
      recommendations += ' A T-shirt and jeans will be comfortable.';
    } else if (temp >= 25) {
      recommendations += ' It’s quite warm. Shorts and a T-shirt are a good choice.';
    }

    return recommendations;
  };

  if(weatherData) {
    return (
      <div className="clothing-recommendation">
        <h2>Clothing Recommendations:</h2>
        <p>{getRecommendations()}</p>
      </div>
    );
  }
};

export default ClothingRecommendation;
