import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Router from "./Routes/index.routes";
import Header from "./components/Header";

import { GlobalStyle } from "./styles/global";
import theme from "./design";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
