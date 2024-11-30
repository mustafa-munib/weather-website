import React from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';

interface HourlyForecastProps {
  hourly: WeatherData['hourly'];
  unit: TemperatureUnit;
}

export function HourlyForecast({ hourly, unit }: HourlyForecastProps) {
  const convertTemp = (temp: number) => {
    return unit === 'fahrenheit' ? (temp * 9/5) + 32 : temp;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 overflow-x-auto">
      <h3 className="text-white font-semibold mb-4">Hourly Forecast</h3>
      <div className="flex gap-6 min-w-max">
        {hourly.map((hour, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <span className="text-sm">
              {new Date(hour.time).toLocaleTimeString([], { hour: 'numeric' })}
            </span>
            <img
              src={`https://openweathermap.org/img/wn/${hour.icon}.png`}
              alt={hour.condition}
              className="w-10 h-10 my-1"
            />
            <span className="font-semibold">{Math.round(convertTemp(hour.temp))}°</span>
            <div className="flex items-center mt-1">
              <svg
                className="w-3 h-3 text-blue-300 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
              </svg>
              <span className="text-xs">{hour.precipitation}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}