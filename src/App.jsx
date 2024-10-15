import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { createGlobalStyle } from "styled-components";
import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Bellefair', serif; */
  /* font-family: 'Barlow Condensed', sans-serif; */
  font-family: 'Barlow', sans-serif;
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
