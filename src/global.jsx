import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;
 
export default GlobalStyle;