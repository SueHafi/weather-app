import { useState, useEffect } from "react";
import { styled } from "styled-components";
import DetailCard from "./components/DetailCard";
import OverviewCard from "./components/OverviewCard";
import Header from "./components/Header";
import searchIcon from "./../public/search.svg";
import { locationData, currentConditionData, forecast } from "./recievedData";
import "./App.css";
import "./index.css";
import { weatherIcons } from "./weatherIcons";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function weatherApi(locationText) {
  async function locationApiCall() {
    // const userText = "mk10 9fr";
    // const response = await fetch(
    //   `http://dataservice.accuweather.com/locations/v1/search?apikey=KAW7NgDznyiDtyKI0zRKDai7UNnTAha8&q=${locationText}`
    // );
    // const data = await response.json();
    const data = locationData;
    const locationKey = locationData[0].Key;
    // console.log(data);
    currentConditionApiCall();
    forecast();
    async function currentConditionApiCall() {
      // const locationKey = "49299_PC";
      // const response = await fetch(
      //   `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=KAW7NgDznyiDtyKI0zRKDai7UNnTAha8`
      // );
      // const data = await response.json();
      const data = currentConditionData;
    }

    async function forecast() {
      // const locationKey = "49299_PC";
      // const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=KAW7NgDznyiDtyKI0zRKDai7UNnTAha8`);
      // const data = await response.json();
      const data = forecast;
    }
  }
}

function App() {
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState({ 
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
    restOfWeek: [
      {
        currentDay: forecast.DailyForecasts[0].Date,
        weatherIcon: forecast.DailyForecasts[0].Day.Icon,
        highestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[0].Temperature.Maximum.Value
        ),
        lowestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[0].Temperature.Minimum.Value
        ),
      },
      {
        currentDay: forecast.DailyForecasts[1].Date,
        weatherIcon: forecast.DailyForecasts[1].Day.Icon,
        highestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[1].Temperature.Maximum.Value
        ),
        lowestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[1].Temperature.Minimum.Value
        ),
      },
      {
        currentDay: forecast.DailyForecasts[2].Date,
        weatherIcon: forecast.DailyForecasts[2].Day.Icon,
        highestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[2].Temperature.Maximum.Value
        ),
        lowestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[2].Temperature.Minimum.Value
        ),
      },
      {
        currentDay: forecast.DailyForecasts[3].Date,
        weatherIcon: forecast.DailyForecasts[3].Day.Icon,
        highestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[3].Temperature.Maximum.Value
        ),
        lowestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[3].Temperature.Minimum.Value
        ),
      },
      {
        currentDay: forecast.DailyForecasts[4].Date,
        weatherIcon: forecast.DailyForecasts[4].Day.Icon,
        highestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[4].Temperature.Maximum.Value
        ),
        lowestTemp: fahrenheitToCelsius(
          forecast.DailyForecasts[4].Temperature.Minimum.Value
        ),
      },
    ],
  });
  useEffect(() => {
    weatherApi(weatherData.currentDay.location);
  }, []);

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    locationApiCall();
  }
  return (
    <>
      <ContentContainer>
        <Header />
        <Form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="London"
            value={userInput}
            onChange={handleChange}
          />
          <button>
            <img src={searchIcon} alt="search icon" />
          </button>
        </Form>
        <DetailCard weatherData={weatherData} />
        <OverviewCard weatherData={weatherData} />
      </ContentContainer>
    </>
  );
}

export default App;
