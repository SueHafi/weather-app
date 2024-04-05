import { styled } from "styled-components";
import { format } from "date-fns";
import { weatherIcons } from "../weatherIcons";

const DayCard = styled.div`
  width: 15rem;
  outline: solid 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;

function getDayName(isoStringDate) {
  const day = format(new Date(isoStringDate), "EEEE");
  return day;
}

export default function OverviewCard({
  weatherIcon,
  dayName,
  weatherIconDescription,
  lowestTemp,
  highestTemp,
}) {
  return (
    <DayCard>
      <p>{getDayName(dayName)}</p>
      {weatherIcons.map((weatherItem) =>
        weatherItem.number === weatherIcon ? (
          <Img
            key={weatherItem.number}
            src={weatherItem.img}
            alt={weatherIconDescription}
          />
        ) : (
          ""
        )
      )}
      <p>{`High: ${Math.round(highestTemp)}`}</p>
      <p>{`Low: ${Math.round(lowestTemp)}`}</p>
    </DayCard>
  );
}
