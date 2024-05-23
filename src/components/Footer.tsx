import { styled } from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.5rem;
  margin-top: auto;
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }`;

const StyledLink = styled.a`
  color: blue;

  &:visited {
    color: purple;
    text-decoration: underline;
  }

  &:hover {
    color: white;
    text-decoration: underline;
  }

  &:active {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; 2023 Sue Hafizoglu | See code at{" "}
        <StyledLink
          href="https://github.com/SueHafi/weather-app"
          target="_blank"
        >
          GitHub
        </StyledLink>
      </p>
    </StyledFooter>
  );
}
