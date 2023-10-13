import { createGlobalStyle } from 'styled-components'

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
            background:lightgray;
        }
        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.colors.primary};
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: ${({ theme }) => theme.colors.secondary};
        } 
    }
`
export const lightTheme = {
    colors: {
        primary: "#FCFCFC",
        secondary: "#EBECED",
        gradient: "#B8797D",
        textBlue: "#4e44f5",
        textLight: "#07080A",
        textDark: "#3D4047",
        textDarkest: "#5C5F66",
        borderMain: "#4E5569",
        cardHoverBg: "#F9F9F9",
    },
    fonts: {
        primary: 'IBM Plex Sans',
        secondary: 'Just Me Again Down Here',
    },
    fontSizes: {
        large: "38px",
        medium: "34px",
        small: "20px",
    },
}

export const darkTheme = {
    colors: {
        primary: "#0E1525",
        secondary: "#1C2333",
        gradient: "#B8797D",
        textBlue: "#57ABFF",
        textLight: "#F5F9FC",
        textDark: "#C2C8CC",
        textDarkest: "#9DA2A6",
        borderMain: "#4E5569",
        cardHoverBg: "#55198b",
    },
    fonts: {
        primary: 'IBM Plex Sans',
        secondary: 'Just Me Again Down Here',
    },
    fontSizes: {
        large: "38px",
        medium: "34px",
        small: "20px",
    },
}