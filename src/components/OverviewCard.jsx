import { styled } from "styled-components";
import { format } from "date-fns";

const DayCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayCard = styled.div`
  width: 15rem;
  outline: solid 0.1rem;
`;

function getDayName(isoStringDate) {
  const day = format(new Date(isoStringDate), "EEEE");
  return day;
}

export default function OverviewCard({ weatherData }) {
  return (
    <DayCardsContainer>
      <button>Previous Day</button>
      <DayCard>
        <p>{getDayName(weatherData.restOfWeek[0].currentDay)}</p>
        {/*{weatherData.restOfWeek[0].weatherIcon}*/}
        <img alt="icon" />
        <p>High: {Math.round(weatherData.restOfWeek[0].highestTemp)}</p>
        <p>Low: {Math.round(weatherData.restOfWeek[0].lowestTemp)}</p>
      </DayCard>
      <DayCard>
        <p>{getDayName(weatherData.restOfWeek[1].currentDay)}</p>
        {/*{weatherData.restOfWeek[1].weatherIcon}*/}
        <img alt="icon" />
        <p>High: {Math.round(weatherData.restOfWeek[1].highestTemp)}</p>
        <p>Low: {Math.round(weatherData.restOfWeek[1].lowestTemp)}</p>
      </DayCard>
      <DayCard>
        <p>{getDayName(weatherData.restOfWeek[2].currentDay)}</p>
        {/*{weatherData.restOfWeek[2].weatherIcon}*/}
        <img alt="icon" />
        <p>High: {Math.round(weatherData.restOfWeek[2].highestTemp)}</p>
        <p>Low: {Math.round(weatherData.restOfWeek[2].lowestTemp)}</p>
      </DayCard>
      <DayCard>
        <p>{getDayName(weatherData.restOfWeek[3].currentDay)}</p>
        {/*{weatherData.restOfWeek[3].weatherIcon}*/}
        <img alt="icon" />
        <p>High: {Math.round(weatherData.restOfWeek[3].highestTemp)}</p>
        <p>Low: {Math.round(weatherData.restOfWeek[3].lowestTemp)}</p>
      </DayCard>
      <DayCard>
        <p>{getDayName(weatherData.restOfWeek[4].currentDay)}</p>
        {/*{weatherData.restOfWeek[4].weatherIcon}*/}
        <img alt="icon" />
        <p>High: {Math.round(weatherData.restOfWeek[4].highestTemp)}</p>
        <p>Low: {Math.round(weatherData.restOfWeek[4].lowestTemp)}</p>
      </DayCard>
      <button>Next Day</button>
    </DayCardsContainer>
  );
}
