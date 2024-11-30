import React from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';

interface ForecastProps {
  forecast: WeatherData['forecast'];
  unit: TemperatureUnit;
}

export function Forecast({ forecast, unit }: ForecastProps) {
  const convertTemp = (temp: number) => {
    return unit === 'fahrenheit' ? (temp * 9/5) + 32 : temp;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {forecast.map((day) => (
        <div
          key={day.date}
          className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-center">
            <p className="font-semibold text-gray-600">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
            <div className="my-2">
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.condition}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <p className="text-sm font-medium text-gray-900">
              {Math.round(convertTemp(day.maxTemp))}°
              <span className="text-gray-500 ml-2">
                {Math.round(convertTemp(day.minTemp))}°
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">{day.condition}</p>
          </div>
        </div>
      ))}
    </div>
  );
}