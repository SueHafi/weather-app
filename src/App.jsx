import { useState, useEffect } from "react";
import { styled, ThemeProvider } from "styled-components";
import DetailCard from "./components/DetailCard";
import OverviewCard from "./components/OverviewCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import searchIcon from "./../public/search.svg";
import cloudOverLay from "./../public/weatherBackgroundOverlay/cloudOverLay.png";
import { startingWeatherData, mapToState } from "./initialWeatherData";
import { weatherApi } from "./weatherApi";
import GlobalStyle from "./global";

const themes = {
  light: {
    primary: "#bee4f7",
    text: "#0c0d0d",
    backgroundImg: `${cloudOverLay}`,
    backgroundCardColor: "rgba(255, 255, 255, 0.3)",
  },
  dark: {
    primary: "#020745",
    text: "#ffffff",
    backgroundImg: "",
    backgroundCardColor: "rgba(255, 255, 255, 0.3)",
  },
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-image: url(${(props) => props.theme.backgroundImg});
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.text};
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

function App() {
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState(startingWeatherData);
  const [currentTheme, setCurrentTheme] = useState("light");

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const recievedWeatherData = await weatherApi(userInput);
    const updatedWeatherData = mapToState(recievedWeatherData);
    setWeatherData(updatedWeatherData);
  }

  useEffect(() => {
    async function apiCallWithLondon() {
      const location = "London";
      const recievedWeatherData = await weatherApi(location);
      const updatedWeatherData = mapToState(recievedWeatherData);
      setWeatherData(updatedWeatherData);
    }
    apiCallWithLondon();
  }, []);

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
        theme={currentTheme === "light" ? themes.light : themes.dark}
      >
        <GlobalStyle />
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
          <Footer />
        </ContentContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
