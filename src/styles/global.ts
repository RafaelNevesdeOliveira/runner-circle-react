import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray-600);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased;
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
