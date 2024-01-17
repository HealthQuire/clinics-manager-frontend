import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            light1: string;
            light2: string;
            light3: string;
            light4: string;
            dark1: string;
            dark2: string;
            dark3: string;
            primaryColor: string;
            primaryColorDark: string;
            primaryColorLight: string;
            transparent: (number) => string;
        };
    }
}
