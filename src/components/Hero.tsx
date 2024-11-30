import React from 'react';
import { CloudLightning, Umbrella, Wind } from 'lucide-react';
import { ExtremeLocations } from './ExtremeLocations';

export function Hero() {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Weather Intelligence Reimagined
      </h1>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Developed by Mustafa Hussaini - Experience weather forecasting with smart features
        and beautiful visualizations
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
          <CloudLightning className="h-8 w-8 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Smart Alerts</h3>
          <p className="text-sm text-white/80">Receive AI-powered weather alerts based on your activities</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
          <Umbrella className="h-8 w-8 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Activity Planner</h3>
          <p className="text-sm text-white/80">Get personalized outdoor activity recommendations</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
          <Wind className="h-8 w-8 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Air Quality</h3>
          <p className="text-sm text-white/80">Monitor air quality and pollution levels in real-time</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Global Temperature Extremes</h2>
        <ExtremeLocations />
      </div>
    </div>
  );
}