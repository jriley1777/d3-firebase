import React from 'react';
import styled from 'styled-components';
import './App.css';
import Card from '../../Card/Card';
import { ROUTES } from '../../../constants/index';

const AppWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  > * {
    margin: 2px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <h2>
          Data Visualizations with React, D3, and Firebase.{" "}
          <span role="img">🔥</span>
        </h2>
        <p style={{ width: "60vw" }}>
          This application is to showcase various data visualizations with a live db
          backend from Firebase and a wrapper application written in React with hooks, 
          motion, and material ui.
        </p>
        <CardGrid>
          {ROUTES.map(x => (
            <Card 
            to={x.path} 
            description={x.description} 
            title={x.name}></Card>
          ))}
        </CardGrid>
      </header>
    </AppWrapper>
  );
}

export default App;
