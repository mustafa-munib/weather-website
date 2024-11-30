import React from 'react';
import { Cloud } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-white" />
            <span className="ml-2 text-white font-semibold text-lg">WeatherScope</span>
          </div>
        </div>
      </div>
    </nav>
  );
}