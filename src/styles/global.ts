import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  /* overflow-y: hidden; */
 }
:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme["green-light"]};
}

 body{
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;

 }
`;
