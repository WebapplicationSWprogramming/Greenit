import GlobalStyle from "./style/globalStyles";
import { theme } from "./style/theme";
import "./style/global.css";
import { ThemeProvider } from "styled-components";
import { Router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
