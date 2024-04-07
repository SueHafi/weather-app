import { useState, useEffect } from "react";
import { styled, ThemeProvider } from "styled-components";
import DetailCard from "./components/DetailCard";
import OverviewCard from "./components/OverviewCard";
import Header from "./components/Header";
import searchIcon from "./../public/search.svg";
import cloudOverLay from "./../public/weatherBackgroundOverlay/cloudOverLay.png"
import { locationData, currentConditionData, forecast } from "./recievedData";
import { startingWeatherData, updatedWeatherData } from "./initialWeatherData";
import "./App.css";
import "./index.css";

const themes = {
  light: {
    primary: "#bee4f7",
    text: "#0c0d0d",
    backgroundImg: `${cloudOverLay}`,
    backgroundCardColor: 'rgba(255, 255, 255, 0.3)',
  },
  dark: {
    primary: "#020745",
    text: "#ffffff",
    backgroundImg: "",
    backgroundCardColor: 'rgba(255, 255, 255, 0.3)',
  },
};
const ContentContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-image: url(${(props)=>props.theme.backgroundImg});
  background-color: ${(props)=> props.theme.primary};
  color: ${(props)=> props.text};
`;

const DayCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchBox = styled.input`
  font-size: 2rem;
`;

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
  const [weatherData, setWeatherData] = useState(startingWeatherData);
  const [currentTheme, setCurrentTheme] = useState("light");

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    weatherApi(userInput);
    // handle this line of code later
    setWeatherData(updatedWeatherData);
  }

  // useEffect(() => {
  //   const location = 'London';
  //   weatherApi(location);
  // }, []);

  function handleOnClick(buttonClicked) {
    if (buttonClicked === "light") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  }

  return (
    <>
      <ThemeProvider
        theme={currentTheme === 'light' ? themes.light : themes.dark}
      >
        <ContentContainer>
          <Header changeTheme={handleOnClick} />
          <Form onSubmit={handleSubmit}>
            <SearchBox
              type="search"
              placeholder="London"
              value={userInput}
              onChange={handleChange}
            />
            <button>
              <img src={searchIcon} alt="search icon" />
            </button>
          </Form>
          <DetailCard
            weatherIconNum={weatherData.currentDay?.weatherIcon}
            location={weatherData.currentDay?.location}
            currentTemp={weatherData.currentDay?.currentTemp}
            lowestTemp={weatherData.currentDay?.lowestTemp}
            highestTemp={weatherData.currentDay?.highestTemp}
            currentWeatherCondition={
              weatherData.currentDay?.currentWeatherCondition
            }
          />
          <DayCardsContainer>
            {weatherData.restOfWeek.map((day, index) => (
              <OverviewCard
                key={index}
                lowestTemp={day?.lowestTemp}
                highestTemp={day?.highestTemp}
                weatherIconNum={day?.weatherIcon}
                weatherIconDescription={day?.currentWeatherCondition}
                dayName={day?.currentDay}
              />
            ))}
          </DayCardsContainer>
        </ContentContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
