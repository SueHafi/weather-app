function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

export const startingWeatherData = {
  currentDay: null,
  restOfWeek: [null, null, null, null, null],
};

export function mapToState(recievedWeatherData) {
  const updatedWeatherData = {
    currentDay: {
      location: recievedWeatherData.locationData[0].EnglishName,
      currentTemp:
        recievedWeatherData.currentConditionData[0].Temperature.Metric.Value,
      lowestTemp: fahrenheitToCelsius(
        recievedWeatherData.forecastData.DailyForecasts[0].Temperature.Minimum
          .Value
      ),
      highestTemp: fahrenheitToCelsius(
        recievedWeatherData.forecastData.DailyForecasts[0].Temperature.Maximum
          .Value
      ),
      currentWeatherCondition:
        recievedWeatherData.currentConditionData[0].WeatherText,
      weatherIcon: recievedWeatherData.currentConditionData[0].WeatherIcon,
    },
    restOfWeek: recievedWeatherData.forecastData.DailyForecasts.map((item) => {
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
