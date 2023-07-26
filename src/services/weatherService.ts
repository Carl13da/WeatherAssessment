import { Period } from "../types/Period";

const WEATHER_API_URL = "https://api.weather.gov/points";

async function getSevenDayForecast(
  latitude: number,
  longitude: number
): Promise<Period[]> {
  const response = await fetch(`${WEATHER_API_URL}/${latitude},${longitude}`);
  const data = await response.json();

  if (data?.properties) {
    const urlToGetWeather = data?.properties.forecast;

    const forecastResponse = await fetch(urlToGetWeather);
    const forecastData = await forecastResponse.json();

    return forecastData?.properties?.periods || [];
  }

  return [];
}

export { getSevenDayForecast };
