import React from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';
import { Wind, Droplets, Thermometer } from 'lucide-react';
import { WeatherAnimation } from './WeatherAnimation';

interface CurrentWeatherProps {
  data: WeatherData;
  unit: TemperatureUnit;
}

export function CurrentWeather({ data, unit }: CurrentWeatherProps) {
  const temp = unit === 'fahrenheit' ? (data.current.temp * 9/5) + 32 : data.current.temp;
  
  const getWeatherColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'rain':
        return 'from-blue-500 to-gray-700';
      case 'snow':
        return 'from-blue-100 to-blue-300';
      case 'sunny':
        return 'from-yellow-400 via-orange-500 to-red-500';
      case 'partly cloudy':
        return 'from-blue-300 via-purple-400 to-blue-500';
      case 'cloudy':
        return 'from-gray-400 to-gray-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className={`relative bg-gradient-to-br ${getWeatherColor(data.current.condition)} rounded-xl p-6 shadow-lg overflow-hidden transition-colors duration-500`}>
      <WeatherAnimation condition={data.current.condition} />
      <div className="relative flex flex-col items-center text-white z-10">
        <h2 className="text-3xl font-bold">{data.city}</h2>
        <div className="mt-4 text-6xl font-bold flex items-center gap-2">
          <Thermometer className="w-8 h-8" />
          {Math.round(temp)}°{unit === 'celsius' ? 'C' : 'F'}
        </div>
        <p className="mt-2 text-xl">{data.current.condition}</p>
        
        <div className="mt-6 flex gap-6">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Wind className="w-5 h-5" />
            <span>{data.current.windSpeed} km/h</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Droplets className="w-5 h-5" />
            <span>{data.current.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}