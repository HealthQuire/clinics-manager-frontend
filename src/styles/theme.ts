import { DefaultTheme } from "styled-components";

const mainPalette = {
    light1: "#FFFFFF",
    light2: "#E7EAEC",
    light3: "#AEB9C0",
    light4: "#486070",
    dark1: "#000000",
    dark2: "#061D2B",
    dark3: "#0B2B40",
    primaryColor: "#3B8C6E",
    primaryColorDark: "#0B2B40",
    primaryColorLight: "#89D99D",
    transparent: (value: number) => `rgba(0, 0, 0, ${value})`,
};

const basicTheme: DefaultTheme = {
    colors: mainPalette,
};

export default basicTheme;
