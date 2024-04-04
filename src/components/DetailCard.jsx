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
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const CardText = styled.p`
  font-size: 2.2rem;
`;

export default function DetailCard({ weatherData }) {
  return (
    <CardContainer>
      <CurrentDayCard>
        {weatherIcons.map((weatherItem) =>
          weatherItem.number === weatherData.currentDay.weatherIcon ? (
            <img key={weatherItem.number} src={weatherItem.img} alt={weatherItem.weatherText} />
          ) : (
            ""
          )
        )}
        <TextContainer>
          <CardText>Today</CardText>
          <CardText>{weatherData.currentDay.location}</CardText>
          <CardText>{Math.round(weatherData.currentDay.currentTemp)}</CardText>
          <CardText>
            Low: {Math.round(weatherData.currentDay.lowestTemp)} | High:
            {Math.round(weatherData.currentDay.highestTemp)}
          </CardText>
          <CardText>{weatherData.currentDay.currentWeatherCondition}</CardText>
        </TextContainer>
      </CurrentDayCard>
    </CardContainer>
  );
}
