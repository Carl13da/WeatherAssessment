// Card.tsx
import React from "react";
import { Period } from "../types/Period";
import { getWeatherBackground } from "../utils/getPeriodBackground";

interface CardProps {
  period: Period;
  isSelected: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ period, isSelected, onClick }) => {
  const cardBackgroundColor = isSelected ? "bg-blue-500" : "bg-white";

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${cardBackgroundColor}`}
      onClick={onClick}
      key={period.number}
    >
      <img
        className="w-full"
        src={getWeatherBackground(period)}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{period.name}</div>
        <p className="text-gray-700 text-base">
          Temperature: {period.temperature}&deg;{period.temperatureUnit}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Wind: {period.windSpeed} from {period.windDirection}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Humidity: {period.relativeHumidity.value}%
        </span>
      </div>
    </div>
  );
};

export default Card;
