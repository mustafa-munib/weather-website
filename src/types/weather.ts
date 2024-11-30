export interface WeatherData {
  city: string;
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    feelsLike?: number;
    visibility?: number;
  };
  hourly: Array<{
    time: string;
    temp: number;
    condition: string;
    icon: string;
    precipitation: number;
  }>;
  forecast: Array<{
    date: string;
    minTemp: number;
    maxTemp: number;
    condition: string;
    icon: string;
  }>;
}

export type TemperatureUnit = 'celsius' | 'fahrenheit';

export interface ClothingRecommendation {
  type: string;
  items: string[];
  icon: string;
}