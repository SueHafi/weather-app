import { styled } from "styled-components";
import { format } from "date-fns";
import { weatherIcons } from "../weatherIcons";

const DayCard = styled.div`
  width: 24rem;
  padding: 1rem;
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0rem 0rem 0.4rem;
  transition: 0.2s;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${(props) => props.theme.text};

  &:hover {
    scale: 1.2;
    background-color: rgba(255, 255, 255, 0.4);
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (min-width: 768px) {
  }
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
  weatherIconNum,
  dayName,
  weatherIconDescription,
  lowestTemp,
  highestTemp,
}) {
  const weatherItem =
    weatherIconNum &&
    weatherIcons.find((element) => {
      return element.number === weatherIconNum;
    });

  return (
    <DayCard>
      <DayName>{dayName ? getDayName(dayName) : "Day: --"}</DayName>
      {weatherItem && (
        <Img
          key={weatherItem.number}
          src={weatherItem.img}
          alt={weatherIconDescription}
        />
      )}
      <Text>
        {highestTemp ? `High: ${Math.round(highestTemp)}` : "High: --"}&deg;C
      </Text>
      <Text>
        {lowestTemp ? `Low: ${Math.round(lowestTemp)}` : "Low: --"}&deg;C
      </Text>
    </DayCard>
  );
}
