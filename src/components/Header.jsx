import { styled } from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 20px;
`;
export default function Header() {
  return (
    <header>
      <Title>React Weather Report</Title>
    </header>
  );
}
