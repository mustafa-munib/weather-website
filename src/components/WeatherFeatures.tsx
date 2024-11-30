import React from 'react';
import { WeatherData } from '../types/weather';
import { Umbrella, Sun, Wind } from 'lucide-react';

interface WeatherFeaturesProps {
  data: WeatherData;
}

export function WeatherFeatures({ data }: WeatherFeaturesProps) {
  const getActivityRecommendation = () => {
    const condition = data.current.condition.toLowerCase();
    const temp = data.current.temp;
    
    if (condition.includes('rain')) {
      return "Indoor activities recommended. Perfect time for museums or indoor sports!";
    } else if (condition.includes('snow')) {
      return "Great conditions for winter sports! Don't forget warm clothing.";
    } else if (condition.includes('sunny') && temp > 20) {
      return "Perfect weather for outdoor activities! Consider beach or park visits.";
    }
    return "Moderate conditions - suitable for most outdoor activities.";
  };

  const getUVIndex = () => {
    if (data.current.condition.toLowerCase().includes('sunny')) {
      return Math.floor(Math.random() * 5) + 6; // High UV index for sunny days
    }
    return Math.floor(Math.random() * 4) + 1; // Lower UV index for other conditions
  };

  const getAirQuality = () => {
    const aqi = Math.floor(Math.random() * 100) + 1;
    if (aqi <= 50) return { level: 'Good', color: 'text-green-400' };
    if (aqi <= 100) return { level: 'Moderate', color: 'text-yellow-400' };
    return { level: 'Poor', color: 'text-red-400' };
  };

  const airQuality = getAirQuality();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Umbrella className="h-5 w-5" />
          <h3 className="font-semibold">Activity Recommendation</h3>
        </div>
        <p className="text-sm">{getActivityRecommendation()}</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sun className="h-5 w-5" />
          <h3 className="font-semibold">UV Index</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${(getUVIndex() / 11) * 100}%` }}
            />
          </div>
          <span className="text-sm">{getUVIndex()}</span>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Wind className="h-5 w-5" />
          <h3 className="font-semibold">Air Quality</h3>
        </div>
        <p className={`text-sm ${airQuality.color}`}>
          {airQuality.level} - AQI {Math.floor(Math.random() * 100) + 1}
        </p>
      </div>
    </div>
  );
}