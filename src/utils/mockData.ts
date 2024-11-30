import { WeatherData } from '../types/weather';

const weatherConditions = ['Sunny', 'Rain', 'Snow', 'Cloudy', 'Partly Cloudy'];
const icons = {
  'Sunny': '01d',
  'Rain': '10d',
  'Snow': '13d',
  'Cloudy': '04d',
  'Partly Cloudy': '02d'
};

export const getMockWeatherData = (city: string): Promise<WeatherData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      
      // Generate hourly data
      const hourly = Array.from({ length: 24 }, (_, i) => {
        const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        return {
          time: new Date(Date.now() + i * 60 * 60 * 1000).toISOString(),
          temp: Math.floor(Math.random() * 35) - 5,
          condition,
          icon: icons[condition as keyof typeof icons],
          precipitation: Math.floor(Math.random() * 100),
        };
      });

      resolve({
        city,
        current: {
          temp: Math.floor(Math.random() * 35) - 5,
          condition: currentCondition,
          icon: icons[currentCondition as keyof typeof icons],
          humidity: Math.floor(Math.random() * 60) + 40,
          windSpeed: Math.floor(Math.random() * 30) + 5,
          feelsLike: Math.floor(Math.random() * 35) - 5,
          visibility: Math.floor(Math.random() * 10) + 5,
        },
        hourly,
        forecast: Array.from({ length: 5 }, (_, i) => {
          const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
          const baseTemp = Math.floor(Math.random() * 30) - 5;
          return {
            date: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            minTemp: baseTemp,
            maxTemp: baseTemp + Math.floor(Math.random() * 10) + 5,
            condition,
            icon: icons[condition as keyof typeof icons],
          };
        }),
      });
    }, 1000);
  });
};