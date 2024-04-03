import { styled } from "styled-components";

const DayCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayCard = styled.div`
  width: 15rem;
  outline: solid 0.1rem;
`;

export default function OverviewCard() {
  return (
    <DayCardsContainer>
      <button>Previous Day</button>
      <DayCard>
        <p>weatherData.restOfWeek[0]Day</p>
        <img alt="icon" />
        <p>High:</p>
        <p>Low:</p>
      </DayCard>
      <DayCard>
        <p>Day</p>
        <img alt="icon" />
        <p>High:</p>
        <p>Low:</p>
      </DayCard>
      <DayCard>
        <p>Day</p>
        <img alt="icon" />
        <p>High:</p>
        <p>Low:</p>
      </DayCard>
      <DayCard>
        <p>Day</p>
        <img alt="icon" />
        <p>High:</p>
        <p>Low:</p>
      </DayCard>
      <DayCard>
        <p>Day</p>
        <img alt="icon" />
        <p>High:</p>
        <p>Low:</p>
      </DayCard>
      <button>Next Day</button>
    </DayCardsContainer>
  );
}
