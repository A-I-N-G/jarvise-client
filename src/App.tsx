import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Router from "./Router";

const Screen = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Screen>
        <SideBar />
        <Router />
      </Screen>
    </BrowserRouter>
  );
}

export default App;
