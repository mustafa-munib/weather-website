import React from 'react';
import { WeatherData } from '../types/weather';
import { Shirt, Umbrella, Sun } from 'lucide-react';

interface ClothingRecommendationsProps {
  data: WeatherData;
}

export function ClothingRecommendations({ data }: ClothingRecommendationsProps) {
  const getRecommendations = () => {
    const temp = data.current.temp;
    const condition = data.current.condition.toLowerCase();
    
    let recommendations = [];
    
    // Base layer recommendations
    if (temp < 10) {
      recommendations.push({
        type: 'Cold Weather',
        items: ['Thermal underwear', 'Heavy sweater', 'Winter coat', 'Warm hat', 'Gloves'],
        icon: 'jacket'
      });
    } else if (temp < 20) {
      recommendations.push({
        type: 'Cool Weather',
        items: ['Light sweater', 'Long sleeve shirt', 'Light jacket'],
        icon: 'sweater'
      });
    } else {
      recommendations.push({
        type: 'Warm Weather',
        items: ['T-shirt', 'Short sleeve shirt', 'Light clothing'],
        icon: 'tshirt'
      });
    }
    
    // Weather-specific recommendations
    if (condition.includes('rain')) {
      recommendations.push({
        type: 'Rain Protection',
        items: ['Rain jacket', 'Waterproof shoes', 'Umbrella'],
        icon: 'umbrella'
      });
    } else if (condition.includes('sun')) {
      recommendations.push({
        type: 'Sun Protection',
        items: ['Sunhat', 'Sunglasses', 'Sunscreen'],
        icon: 'sun'
      });
    }
    
    return recommendations;
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'umbrella':
        return <Umbrella className="w-6 h-6" />;
      case 'sun':
        return <Sun className="w-6 h-6" />;
      default:
        return <Shirt className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
      <h3 className="font-semibold mb-4">What to Wear</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {getRecommendations().map((rec, index) => (
          <div key={index} className="border border-white/10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              {getIcon(rec.icon)}
              <span className="font-medium">{rec.type}</span>
            </div>
            <ul className="text-sm space-y-1">
              {rec.items.map((item, i) => (
                <li key={i} className="text-white/80">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}