import GlobalStyle from "./style/globalStyles";
import { theme } from "./style/theme";
import "./style/global.css";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
