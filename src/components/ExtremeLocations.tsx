import React from 'react';
import { Thermometer } from 'lucide-react';

interface ExtremeLocation {
  city: string;
  country: string;
  temperature: number;
  description: string;
}

export function ExtremeLocations() {
  // These would typically come from an API, but for demo purposes we'll hardcode them
  const extremeLocations: { coldest: ExtremeLocation; hottest: ExtremeLocation } = {
    coldest: {
      city: "Oymyakon",
      country: "Russia",
      temperature: -71,
      description: "The coldest permanently inhabited place on Earth"
    },
    hottest: {
      city: "Death Valley",
      country: "USA",
      temperature: 56.7,
      description: "Holds the world record for highest reliably recorded temperature"
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
      {/* Coldest Location */}
      <div className="bg-gradient-to-br from-blue-500/20 to-blue-900/20 backdrop-blur-md rounded-lg p-6 text-white border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{extremeLocations.coldest.city}</h3>
            <p className="text-sm text-white/80">{extremeLocations.coldest.country}</p>
          </div>
          <div className="flex items-center">
            <Thermometer className="h-6 w-6 text-blue-300 mr-2" />
            <span className="text-2xl font-bold text-blue-300">
              {extremeLocations.coldest.temperature}°C
            </span>
          </div>
        </div>
        <p className="text-sm text-white/70">{extremeLocations.coldest.description}</p>
      </div>

      {/* Hottest Location */}
      <div className="bg-gradient-to-br from-orange-500/20 to-red-900/20 backdrop-blur-md rounded-lg p-6 text-white border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{extremeLocations.hottest.city}</h3>
            <p className="text-sm text-white/80">{extremeLocations.hottest.country}</p>
          </div>
          <div className="flex items-center">
            <Thermometer className="h-6 w-6 text-orange-300 mr-2" />
            <span className="text-2xl font-bold text-orange-300">
              {extremeLocations.hottest.temperature}°C
            </span>
          </div>
        </div>
        <p className="text-sm text-white/70">{extremeLocations.hottest.description}</p>
      </div>
    </div>
  );
}