import React from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const App: React.FC = () => {
  return (
    <AppContainer className="App">
      <AppHeader className="App-header">
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          React app now works with <i>styled components!</i>
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
