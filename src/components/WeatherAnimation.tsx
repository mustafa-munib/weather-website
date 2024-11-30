import React from 'react';

interface WeatherAnimationProps {
  condition: string;
}

export function WeatherAnimation({ condition }: WeatherAnimationProps) {
  const renderAnimation = () => {
    switch (condition.toLowerCase()) {
      case 'rain':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="animate-rain absolute w-0.5 bg-blue-200/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 100}%`,
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 1 + 0.5}s`,
                  filter: 'blur(1px)',
                }}
              />
            ))}
          </div>
        );
      case 'snow':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="animate-snow absolute rounded-full bg-white/90"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 100}%`,
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}
          </div>
        );
      case 'sunny':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-sun-pulse shadow-lg shadow-yellow-500/50" />
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-1 bg-gradient-to-r from-yellow-200/80 to-transparent origin-left"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 30}deg)`,
                    animationDelay: `${i * 0.1}s`,
                    filter: 'blur(1px)',
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-500/10" />
          </div>
        );
      case 'windy':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="relative">
                <div
                  className="animate-wind absolute h-1 bg-gradient-to-r from-white/40 to-transparent"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    top: `${(i * 10) + Math.random() * 5}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    filter: 'blur(1px)',
                  }}
                />
                {i % 2 === 0 && (
                  <div
                    className="animate-leaf absolute w-2 h-2 bg-gradient-to-br from-green-200/40 to-green-300/40"
                    style={{
                      top: `${(i * 10) + Math.random() * 5}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      filter: 'blur(0.5px)',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return renderAnimation();
}