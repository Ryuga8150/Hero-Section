import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {

    --color-transparent:transparent;

    // Grey
    --color-grey-50:#f9fafb;
    --color-grey-700: #374151;

    // Red
    --color-red-700: #b91c1c;

    // Slate
    --color-slate-700:#334155;

  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  button {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyles;
