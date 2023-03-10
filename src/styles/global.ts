import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {

   margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;

}
:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme["bg-black"]}
}
body{
  background: ${(props) => props.theme["bg-black"]};
  color: ${(props) => props.theme.white};
  -webkit-font-smoothing: antialiased;
  transition: all 0.5s linear; 
  
  
}

body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  
}
body::-webkit-scrollbar {

  width: 12px;
  transition: all 0.5s linear;                /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: none      /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: ${(props) =>
    props.theme["black"]};    /* color of the scroll thumb */
  border-radius: 20px;  
  border: 4px solid ${(props) =>
    props.theme.black};     /* roundness of the scroll thumb */
}
`;
