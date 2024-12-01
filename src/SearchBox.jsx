import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import InfoBox from './InfoBox';
import InfoBox from './infoBox';
import { colors } from '@mui/material';

export default function SearchBox() {
  const [city, setCity] = useState(""); // State for city input
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [error, setError] = useState(false); // State to store error message
  const api_URL = "https://api.openweathermap.org/data/2.5/weather";
  const api_KEY = "9d3987577e41e3c6edfed8b5060f21be";

  const handleAPI = async (city) => {
    try {
        if (!city.trim()) {
            console.error("City name cannot be empty.");
            setError(true);
            return;
        }
        const response = await fetch(`${api_URL}?q=${city}&appid=${api_KEY}&units=metric`);
        if (!response.ok) {
            setError(true); // Mark error state
            throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        const weatherDetails = {
            humidity: jsonResponse.main.humidity,
            mintemp: jsonResponse.main.temp,
            maxtemp: jsonResponse.main.temp_max,
            cityName: jsonResponse.name,
            weather: jsonResponse.weather[0].description,
            feelsLike: jsonResponse.main.feels_like,
        };
        setWeatherData(weatherDetails);
        setError(false); // Clear error state
    } catch (err) {
        console.error(err);
        setError(true);
    }
};


  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
   try{
    event.preventDefault();
    handleAPI(city);
    setCity("");
   }catch(err){
    setError(true);
  }
  };

  return (
    <>
      <h1>Search Weather!</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          fullWidth
        />
        <br /><br />
        <Button
          variant="outlined"
          type="submit"
          fullWidth
        >
          Search
        </Button>
        {error && <p style={{ color: 'red' }}>There is no place in API!</p>}
      </form>

      {/* Pass weatherData as props to InfoBox */}
      <InfoBox weatherData={weatherData} />
    </>
  );
}
