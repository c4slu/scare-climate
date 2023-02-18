import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/defaul";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter basename={"process.env.PUBLIC_URL"}>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
