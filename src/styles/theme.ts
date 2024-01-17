import { DefaultTheme } from "styled-components";

const mainPalette = {
  bgPrimary: "#111111",
  bgSecondary: "#1D1D20",
  textPrimary: "#FFFFFF",
  textSecondary: "#AAAAAA",
  accentOne: "#9486FC",
  accentTwo: "#E186FC",
  accentThree: "#86C3FC",
  transparent: (value: number) => `rgba(0, 0, 0, ${ value })`
};

const basicTheme: DefaultTheme = {
  colors: mainPalette,
};
а
export default basicTheme;
