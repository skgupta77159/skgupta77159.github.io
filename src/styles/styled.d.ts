import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gradient: string;
      textBlue: string;
      textLight: string;
      textDark: string;
      textDarkest: string;
      borderMain: string;
      cardHoverBg: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      large: string;
      medium: string;
      small: string;
    };
  }
}
