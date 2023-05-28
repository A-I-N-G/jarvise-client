import React from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";

const Screen = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Screen>
      <SideBar />
      <div>main</div>
    </Screen>
  );
}

export default App;
