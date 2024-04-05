import { styled } from "styled-components";
import { format } from "date-fns";
import { weatherIcons } from "../weatherIcons";

const DayCard = styled.div`
  width: 24rem;
  padding: 1rem;
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0rem 0rem 0.4rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
`;

const DayName = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

const Img = styled.img`
  height: 6rem;
  width: 6rem;
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
      <DayName>{getDayName(dayName)}</DayName>
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
      <Text>{`High: ${Math.round(highestTemp)}`}</Text>
      <Text>{`Low: ${Math.round(lowestTemp)}`}</Text>
    </DayCard>
  );
}
