import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

import App from '../App/App';

const StyledMissingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <AnimatedRoutes />
      <Route
        path="/"
        render={() => {
          return <StyledMissingDiv>Missing Route.</StyledMissingDiv>;
        }}
      />
    </Switch>
  );
};

export default AppRoutes;