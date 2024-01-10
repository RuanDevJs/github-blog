import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, ul, li, a, img {
    display: block;
    max-width: 100%;
  }

  ul, li, a {
    list-style: none;
    text-decoration: none;
  }

  body, label, input, text-area {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }

  body {
    background-color: #071422;
  }
`;
