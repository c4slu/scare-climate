import "styled-components";
import { lightTheme, darkTheme } from "../styles/themes/defaul";

type ThemeType = typeof darkTheme;
type ThemeType = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
