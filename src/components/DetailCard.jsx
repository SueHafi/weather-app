import { styled } from "styled-components";
import { weatherIcons } from "../weatherIcons";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const CurrentDayCard = styled.div`
  display: flex;
  gap: 3rem;
  outline: solid 0.1rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0rem 0.7rem;
  padding: 20px;
  align-items: center;
  background-color: ${(props)=> props.theme.backgroundCardColor};
  color: ${(props)=> props.theme.text};
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const DayText = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
`;

const CardText = styled.p`
  font-size: 2.2rem;
`;

const Img = styled.img`
  height: 22rem;
  width: 22rem;
`;

export default function DetailCard({
  weatherIconNum,
  location,
  currentTemp,
  lowestTemp,
  highestTemp,
  currentWeatherCondition,
}) {
  const weatherItem =
    weatherIconNum &&
    weatherIcons.find((element) => {
      return element.number === weatherIconNum;
    });

  return (
    <CardContainer>
      <CurrentDayCard>
        {weatherItem && (
          <Img
            key={weatherItem.number}
            src={weatherItem.img}
            alt={weatherItem.weatherText}
          />
        )}
        <TextContainer>
          <DayText>Today</DayText>
          <CardText>{location ? location : "Location: --"}</CardText>
          <CardText>{currentTemp ? Math.round(currentTemp) : "Temperature: --"}</CardText>
          <CardText>
            High: {highestTemp ? Math.round(highestTemp) : "--"} | Low:{" "}
            {lowestTemp ? Math.round(lowestTemp) : "--"}
          </CardText>
          <CardText>
            {currentWeatherCondition ? currentWeatherCondition : "Weather Icon: --"}
          </CardText>
        </TextContainer>
      </CurrentDayCard>
    </CardContainer>
  );
}
