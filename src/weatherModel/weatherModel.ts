import { WeatherApiData } from "../api/weatherApi";

function fahrenheitToCelsius(fahrenheit: number): number {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

export const startingWeatherData = {
  currentDay: null,
  restOfWeek: [null, null, null, null, null],
};

export type WeatherData = {
  currentDay: {
    location: string;
    currentTemp: number;
    lowestTemp: number;
    highestTemp: number;
    currentWeatherCondition: string;
    weatherIcon: number;
  } | null;
  restOfWeek: ({
    currentDay: string;
    weatherIcon: number;
    currentWeatherCondition: string;
    highestTemp: number;
    lowestTemp: number;
  } | null)[];
};

export function mapToState(receivedWeatherData: WeatherApiData): WeatherData {
  const updatedWeatherData = {
    currentDay: {
      location: receivedWeatherData.locationData[0].EnglishName,
      currentTemp:
        receivedWeatherData.currentConditionData[0].Temperature.Metric.Value,
      lowestTemp: fahrenheitToCelsius(
        receivedWeatherData.forecastData.DailyForecasts[0].Temperature.Minimum
          .Value
      ),
      highestTemp: fahrenheitToCelsius(
        receivedWeatherData.forecastData.DailyForecasts[0].Temperature.Maximum
          .Value
      ),
      currentWeatherCondition:
        receivedWeatherData.currentConditionData[0].WeatherText,
      weatherIcon: receivedWeatherData.currentConditionData[0].WeatherIcon,
    },
    restOfWeek: receivedWeatherData.forecastData.DailyForecasts.map((item) => {
      return {
        currentDay: item.Date,
        weatherIcon: item.Day.Icon,
        currentWeatherCondition: item.Day.IconPhrase,
        highestTemp: fahrenheitToCelsius(item.Temperature.Maximum.Value),
        lowestTemp: fahrenheitToCelsius(item.Temperature.Minimum.Value),
      };
    }),
  };
  return updatedWeatherData;
}
