import { styled } from "styled-components";
import { weatherIcons } from "../weatherIcons";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const CurrentDayCard = styled.div`
  display: flex;
  gap: 3rem;
  outline: solid 0.1rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0rem 0.7rem;
  padding: 20px;
  align-items: center;
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const CardText = styled.p`
  font-size: 2.2rem;
`;

const Img = styled.img`
  height: 20rem;
  width: 20rem;
`;

export default function DetailCard({
  weatherData,
  location,
  currentTemp,
  lowestTemp,
  highestTemp,
  currentWeatherCondition,
}) {
  return (
    <CardContainer>
      <CurrentDayCard>
        {weatherIcons.map((weatherItem) =>
          weatherItem.number === weatherData.currentDay.weatherIcon ? (
            <Img
              key={weatherItem.number}
              src={weatherItem.img}
              alt={weatherItem.weatherText}
            />
          ) : (
            ""
          )
        )}
        <TextContainer>
          <CardText>Today</CardText>
          <CardText>{location}</CardText>
          <CardText>{Math.round(currentTemp)}</CardText>
          <CardText>
            High: {Math.round(highestTemp)} | Low: {Math.round(lowestTemp)}
          </CardText>
          <CardText>{currentWeatherCondition}</CardText>
        </TextContainer>
      </CurrentDayCard>
    </CardContainer>
  );
}
