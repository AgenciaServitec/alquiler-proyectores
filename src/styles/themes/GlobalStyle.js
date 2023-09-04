import { css, createGlobalStyle } from "styled-components";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.font1} !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.dark} !important;
  }
`;

export const GlobalStyle = createGlobalStyle(global);
