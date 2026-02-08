import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    transition: background-color 0.2s ease-in, color 0.2s ease-in;

    * {
      color: ${({ theme }) => theme.colors.textLight};
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background: lightgray;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.primary};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
