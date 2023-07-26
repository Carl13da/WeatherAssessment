import React, { useState } from "react";
import { Period } from "../types/Period";
import Card from "./Card";
import useWeatherStore from "../store/weatherStore";
import { getWeatherBackground } from "../utils/getPeriodBackground";

interface ForecastDisplayProps {
  weatherData: Period[] | null;
}

const ForecastDisplayComponent: React.FC<ForecastDisplayProps> = ({
  weatherData,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>();

  if (!weatherData) {
    return null;
  }

  const handleCardClick = (period: Period) => {
    setSelectedPeriod(period);
    useWeatherStore.setState({
      backgroundUrl: getWeatherBackground(period),
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
      {weatherData.map((period) => (
        <Card
          key={period.number}
          period={period}
          isSelected={period.number === selectedPeriod?.number}
          onClick={() => handleCardClick(period)}
        />
      ))}
    </div>
  );
};

export default ForecastDisplayComponent;
