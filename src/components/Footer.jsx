import { styled } from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.8rem;
  margin-top: auto;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; 2023 Sue Hafizoglu | See code at{" "}
        <a href="https://github.com/SueHafi/weather-app" target="_blank">
          GitHub
        </a>
      </p>
    </StyledFooter>
  );
}
