import GlobalStyle from "./style/globalStyles";
import { theme } from "./style/theme";
import "./style/global.css";
import { ThemeProvider } from "styled-components";
import { EntryPage } from "./pages/entryPage";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  );
}

export default App;
