import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { HourlyForecast } from './components/HourlyForecast';
import { Forecast } from './components/Forecast';
import { WeatherFeatures } from './components/WeatherFeatures';
import { ClothingRecommendations } from './components/ClothingRecommendations';
import { WeatherData, TemperatureUnit } from './types/weather';
import { getMockWeatherData } from './utils/mockData';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getMockWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  const isDay = new Date().getHours() > 6 && new Date().getHours() < 18;
  const gradientClass = isDay
    ? 'bg-gradient-to-br from-blue-400 to-blue-600'
    : 'bg-gradient-to-br from-purple-900 to-purple-700';

  return (
    <div className={`min-h-screen ${gradientClass}`}>
      <Navbar />
      <Hero />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col items-center gap-4 mb-8">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          
          <button
            onClick={toggleUnit}
            className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            Switch to {unit === 'celsius' ? '°F' : '°C'}
          </button>
        </div>

        {isLoading && (
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
            <p className="mt-2">Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-white p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {weatherData && !isLoading && (
          <div className="space-y-6">
            <CurrentWeather data={weatherData} unit={unit} />
            <HourlyForecast hourly={weatherData.hourly} unit={unit} />
            <WeatherFeatures data={weatherData} />
            <ClothingRecommendations data={weatherData} />
            <Forecast forecast={weatherData.forecast} unit={unit} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;