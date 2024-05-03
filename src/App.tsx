import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from './Router';
import { defaultTheme } from './styles/themes/default'

// const App: React.FC = () => {
//   return (
//     <>
//       <CssBaseline />
//       <div className={styles.mainCard}>
//         <LoginForm />
//       </div>
//     </>
//   );
// };


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App;
