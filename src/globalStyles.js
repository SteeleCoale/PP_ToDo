import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(216, 235, 235);
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
