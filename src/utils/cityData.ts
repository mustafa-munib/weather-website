// Popular cities dataset
export const popularCities = [
  'New York',
  'London',
  'Tokyo',
  'Paris',
  'Dubai',
  'Singapore',
  'Hong Kong',
  'Los Angeles',
  'Toronto',
  'Sydney',
  'Mumbai',
  'Berlin',
  'Madrid',
  'Rome',
  'Amsterdam',
  'Moscow',
  'Istanbul',
  'Bangkok',
  'Seoul',
  'Shanghai'
];

export const getSuggestions = (query: string): string[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];
  
  return popularCities.filter(city => 
    city.toLowerCase().includes(normalizedQuery)
  ).slice(0, 5);
};