import { locationData, currentConditionData, forecast } from "./recievedData";

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

export const startingWeatherData = {
  currentDay: null,
  restOfWeek: [null, null, null, null, null],
};

export const updatedWeatherData = {
  currentDay: {
    location: locationData[0].EnglishName,
    currentTemp: currentConditionData[0].Temperature.Metric.Value,
    lowestTemp: fahrenheitToCelsius(
      forecast.DailyForecasts[0].Temperature.Minimum.Value
    ),
    highestTemp: fahrenheitToCelsius(
      forecast.DailyForecasts[0].Temperature.Maximum.Value
    ),
    currentWeatherCondition: currentConditionData[0].WeatherText,
    weatherIcon: currentConditionData[0].WeatherIcon,
  },
  restOfWeek: forecast.DailyForecasts.map((item) => {
    return {
      currentDay: item.Date,
      weatherIcon: item.Day.Icon,
      currentWeatherCondition: item.Day.IconPhrase,
      highestTemp: fahrenheitToCelsius(item.Temperature.Maximum.Value),
      lowestTemp: fahrenheitToCelsius(item.Temperature.Minimum.Value),
    };
  }),
};
