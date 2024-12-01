import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ weatherData }) {
  const Default_Img =
    "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"; // Default image
  const Cold_Img =
    "https://plus.unsplash.com/premium_photo-1663099753562-4afbb1b613e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGR8ZW58MHx8MHx8fDA%3D";
  const Hot_Img =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
  const Rainy_Img =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW55fGVufDB8fDB8fHww";

  const getWeatherImage = () => {
    if (!weatherData) return Default_Img; // Default image for no data
    if (weatherData.maxtemp > 30) return Hot_Img;
    if (weatherData.maxtemp < 20) return Cold_Img;
    return Rainy_Img;
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={getWeatherImage()} // Dynamically set the image
        title="Weather Image"
      />
      <CardContent>
        {weatherData ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.cityName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Humidity: {weatherData.humidity}%
              <br />
              Weather: {weatherData.weather}
              <br />
              Min Temp: {weatherData.mintemp}°C
              <br />
              Max Temp: {weatherData.maxtemp}°C
              <br />
              Feels Like: {weatherData.feelsLike}°C
            </Typography>
          </>
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Enter a city name to view weather information.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
