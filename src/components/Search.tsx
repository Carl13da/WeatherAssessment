import React, { useState } from "react";
import useWeatherStore from "../store/weatherStore";
import { getSevenDayForecast } from "../services/weatherService";
import { getWeatherBackground } from "../utils/getPeriodBackground";
import { getCoordinatesFromAddress } from "../services/geocodingService";

const SearchComponent: React.FC = () => {
  const [address, setAddress] = useState("");
  const weatherStore = useWeatherStore();

  const handleSearch = async () => {
    try {
      weatherStore.setLoading(true);
      // TODO check CORS error
      // const { latitude, longitude } = await getCoordinatesFromAddress(address);
      // const data = await getSevenDayForecast(latitude, longitude);
      const data = await getSevenDayForecast(38.845985, -76.92744);
      weatherStore.setWeatherData(data);
      useWeatherStore.setState({
        backgroundUrl: getWeatherBackground(data[0]),
      });
      weatherStore.setLoading(false);
      weatherStore.setError(null);
    } catch (error) {
      weatherStore.setLoading(false);
      weatherStore.setError(
        "Failed to fetch weather data. Please try again later."
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter an address"
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
      />
      <button
        className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSearch}
      >
        {weatherStore.loading ? "Loading..." : "Search"}
      </button>
      {weatherStore.error && (
        <p className="text-red-500 mt-2">{weatherStore.error}</p>
      )}
    </div>
  );
};

export default SearchComponent;
