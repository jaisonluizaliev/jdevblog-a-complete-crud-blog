import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-menu: #3b3c3d;
    --background: #286090;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-size: 100%;
    font-family: 'Noto Sans HK', sans-serif;
    background: var(--background);
  }
  @media (min-width: 600px) {
    html, body {
    font-size: 100%;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
  .btn-save {
    border-radius: 4px;
    background: #fff;
    height: 35px;
    color: #286090;
    border: 1px solid #fff;
    width: 125px;
    margin-top: 1rem;
  }
`;
