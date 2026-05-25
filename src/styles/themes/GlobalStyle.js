import { createGlobalStyle, css } from "styled-components";
import { mediaQuery } from "../constants/mediaQuery";
import { darken } from "polished";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.dark} !important;
  }
`;

const antd = {
  modals: css`
    .ant-modal {
      background: ${({ theme }) => darken(0.02, theme.colors.primary)};
      padding: 0;
      .ant-modal-content {
        border: ${({ theme }) => `1px solid ${theme.colors.dark}`};
        border-radius: 1em;
        background: inherit;
        .ant-modal-close {
          color: ${({ theme }) => theme.colors.dark};
        }
        .ant-modal-body {
          color: ${({ theme }) => theme.colors.font1};
          .ant-modal-confirm-body-wrapper {
            .ant-modal-confirm-title,
            .ant-modal-confirm-content {
              color: inherit;
            }
          }
        }
      }
    }
  `,
};

const scroll = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: darkgrey;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${global}
    ${Object.values(antd).map((antdComponent) => antdComponent)}
    ${mediaQuery.minTablet}{    
        ${scroll}
    }
`;
