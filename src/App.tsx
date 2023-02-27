import { ThemeProvider } from "styled-components";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Router } from "./Router";
import { MdBrightness4 } from "react-icons/md";

import { GlobalStyle } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/themes/defaul";

import { useState } from "react";
import { HeaderContainer } from "./pages/home/styles";
import logo from "../src/assets/logo.png";

export function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <HeaderContainer>
          <img src={logo} alt="" />

          <NavLink to="/" onClick={toggleTheme}>
            <MdBrightness4
              size={24}
              onClick={toggleTheme}
              color={theme == "light" ? "white" : "black"}
              style={{ cursor: "pointer" }}
            />
          </NavLink>
        </HeaderContainer>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
