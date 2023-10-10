const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '8f67556bbd4da9e75252e2c0763dac79';
const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
const fetchWithRetry = async (url, options) => {
  let retries = 3;
  while (retries > 0) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
    retries--;
  }
  throw new Error('Failed to fetch data');
};

export const fetchWeatherData = async (lat, lon) => {
  const weatherUrl = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  const forecastUrl = `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetchWithRetry(weatherUrl),
      fetchWithRetry(forecastUrl),
    ]);

    return [weatherResponse, forecastResponse];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCities = async (input) => {
  const namePrefix = input.trim() || 'surat';
  const citiesUrl = `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${namePrefix}`;
  try {
    const data = await fetchWithRetry(citiesUrl, GEO_API_OPTIONS);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
