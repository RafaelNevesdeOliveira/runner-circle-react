import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* background-image: url('../assets/loginForm/Círcular.svg');
  background-size:cover; */

}

body,
input,
textarea,
button {
  font-family: "Work", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`;
