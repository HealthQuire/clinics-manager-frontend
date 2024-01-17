import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgPrimary: string;
      bgSecondary: string;
      textPrimary: string;
      textSecondary: string;
      accentOne: string;
      accentTwo: string;
      accentThree: string;
      transparent: (number) => string;
    };
  }
}
