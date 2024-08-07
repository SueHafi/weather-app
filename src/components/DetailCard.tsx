import { styled } from "styled-components";
import { weatherIcons } from "../weatherIcons";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-right: 10px;
  margin-left: 10px;
`;

const CurrentDayCard = styled.div`
  display: flex;
  gap: 0;
  outline: solid 0.1rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0rem 0.7rem;
  padding: 8px;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundCardColor};
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    padding: 20px;
    gap: 3rem;
  }
`;

const TextContainer = styled.div`
  @media (min-width: 768px) {
    padding: 10px;
  }
`;

const DayText = styled.p`
  font-size: 2rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CardText = styled.p`
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Img = styled.img`
  height: 13rem;
  width: 13rem;

  @media (min-width: 768px) {
    height: 22rem;
    width: 22rem;
  }
`;

type DetailCardProps = {
  weatherIconNum: number | undefined;
  location: string | undefined;
  currentTemp: number | undefined;
  lowestTemp: number | undefined;
  highestTemp: number | undefined;
  currentWeatherCondition: string | undefined;
};
export default function DetailCard({
  weatherIconNum,
  location,
  currentTemp,
  lowestTemp,
  highestTemp,
  currentWeatherCondition,
}: DetailCardProps) {
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
          <DayText>Current Weather Condition:</DayText>
          <CardText>{location ? location : "Location: --"}</CardText>
          <CardText>
            {currentTemp ? Math.round(currentTemp) : "Temperature: --"}&deg;C
          </CardText>
          <CardText>
            High: {highestTemp ? Math.round(highestTemp) : "--"}&deg;C | Low:{" "}
            {lowestTemp ? Math.round(lowestTemp) : "--"}&deg;C
          </CardText>
          <CardText>
            {currentWeatherCondition
              ? currentWeatherCondition
              : "Weather Icon: --"}
          </CardText>
        </TextContainer>
      </CurrentDayCard>
    </CardContainer>
  );
}
