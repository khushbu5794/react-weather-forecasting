export function groupBy(key) {
    return function group(array) {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        const { date, ...rest } = obj;
        acc[property] = acc[property] || [];
        acc[property].push(rest);
        return acc;
      }, {});
    };
  }
  
  export function getAverage(array, isRound = true) {
    let average = 0;
    if (isRound) {
      average = Math.round(array.reduce((a, b) => a + b, 0) / array.length);
      if (average === 0) {
        average = 0;
      }
    } else average = (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2);
  
    return average;
  }
  
  export function getMostFrequentWeather(arr) {
    const hashmap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b
    );
  }
  
  export const descriptionToIconName = (desc, descriptions_list) => {
    let iconName = descriptions_list.find((item) => item.description === desc);
    return iconName.icon || 'unknown';
  };
  
  export const getWeekForecastWeather = (response, descriptions_list) => {
      if (!response || Object.keys(response).length === 0 || response.cod === '404') {
      return [];
    } else {
      const groupedData = {};
  
      response?.list.forEach((item) => {
        const date = item.dt_txt.substring(0, 10);
  
        if (!groupedData[date]) {
          groupedData[date] = {
            tempSum: 0,
            humiditySum: 0,
            windSum: 0,
            cloudsSum: 0,
            descriptions: [],
          };
        }
  
        groupedData[date].tempSum += item.main.temp;
        groupedData[date].humiditySum += item.main.humidity;
        groupedData[date].windSum += item.wind.speed;
        groupedData[date].cloudsSum += item.clouds.all;
        groupedData[date].descriptions.push(item.weather[0].description);
      });
  
      const dayAvgsList = Object.entries(groupedData).map(([date, data]) => ({
        date,
        temp: Math.round(data.tempSum / data.descriptions.length),
        humidity: Math.round(data.humiditySum / data.descriptions.length),
        wind: (data.windSum / data.descriptions.length).toFixed(2),
        clouds: (data.cloudsSum / data.descriptions.length).toFixed(2),
        description: getMostFrequentWeather(data.descriptions),
        icon: descriptionToIconName(getMostFrequentWeather(data.descriptions), descriptions_list),
      }));
  
      return dayAvgsList;
    }
  };
  
  
  export const getTodayForecastWeather = (
    response,
    current_date,
    current_datetime
  ) => {
    let all_today_forecasts = [];
  
    if (!response || Object.keys(response).length === 0 || response.cod === '404')
      return [];
    else
      response?.list.slice().map((item) => {
        if (item.dt_txt.startsWith(current_date.substring(0, 10))) {
          if (item.dt > current_datetime) {
            all_today_forecasts.push({
              time: item.dt_txt.split(' ')[1].substring(0, 5),
              icon: item.weather[0].icon,
              temperature: Math.round(item.main.temp) + ' °C',
            });
          }
        }
        return all_today_forecasts;
      });
  
    if (all_today_forecasts.length < 7) {
      return [...all_today_forecasts];
    } else {
      return all_today_forecasts.slice(-6);
    }
  };