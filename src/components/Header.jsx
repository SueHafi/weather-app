import { styled } from "styled-components";

const HeaderContainer = styled.header`
  padding-top: 4rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 2rem;
  position: relative;
  color: ${(props)=> props.theme.text}
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 200px;
  top: 26.8px;
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 0.5rem;
`;

const LightButton = styled(Button)`
  background-color: white;
  text: black;
`;

const DarkButton = styled(Button)`
  background-color: black;
  color: white;
`;

export default function Header({ changeTheme }) {
  return (
    <HeaderContainer>
      <Title>React Weather Report</Title>
      <ButtonsContainer>
        <LightButton onClick={() => changeTheme("light")}>Light</LightButton>
        <DarkButton onClick={() => changeTheme("dark")}>Dark</DarkButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
