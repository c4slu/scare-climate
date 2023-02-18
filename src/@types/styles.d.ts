import "styled-components";
import { DefaultTheme } from "../styles/themes/defaul";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
