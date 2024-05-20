const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=b05a662cd206445aae7130419241905";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  console.log(response.json);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
  console.log(response.json);
  return await response.json();
};
