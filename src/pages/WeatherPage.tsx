import React from "react";
import SearchComponent from "../components/Search";
import useWeatherStore from "../store/weatherStore";
import ForecastDisplayComponent from "../components/ForecastDisplay";

const WeatherPage: React.FC = () => {
  const weatherStore = useWeatherStore();

  return (
    <div
      className="flex flex-col items-center min-h-screen"
      style={{
        backgroundImage: `url(${weatherStore.backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 className="text-3xl mb-4">7-Day Weather Forecast</h1>
        <SearchComponent />
        <ForecastDisplayComponent weatherData={weatherStore.weatherData} />
      </div>
    </div>
  );
};

export default WeatherPage;
