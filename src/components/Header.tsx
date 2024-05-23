import { styled } from "styled-components";

const HeaderContainer = styled.header`
  padding-top: 8rem;

  @media (min-width: 768px) {
    padding-top: 10rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.3rem;
  margin-top: 0;
  margin-bottom: 2rem;
  position: relative;
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 18px;
  top: 20px;

  @media (min-width: 768px) {
    right: 20px;
    top: 26.8px;
  }
`;

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const LightButton = styled(Button)`
  background-color: white;
  color: black;
`;

const DarkButton = styled(Button)`
  background-color: black;
  color: white;
`;

type HeaderProps = {
  onChangeTheme: (x:string)=> void;
}

export default function Header({ onChangeTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>React Weather Report</Title>
      <ButtonsContainer>
        <LightButton onClick={() => onChangeTheme("light")}>Light</LightButton>
        <DarkButton onClick={() => onChangeTheme("dark")}>Dark</DarkButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
