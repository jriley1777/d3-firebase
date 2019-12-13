import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../constants';
import Dropdown from '../Dropdown/Dropdown';

const StyledDiv = styled.div`
    width: 100vw;
    height: 60px;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
`;

const InnerDiv = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const StyledDropdown = styled(Dropdown)`
  margin-left: auto;
`;

const AppTitle = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = () => {
    return (
      <StyledDiv>
        <InnerDiv>
          <AppTitle to="/">
            <h2>D3 & React</h2>
          </AppTitle>
          <StyledDropdown title="Examples">
            {ROUTES.map(route => (
              <Link key={route.path} to={route.path}>
                {route.name}
              </Link>
            ))}
          </StyledDropdown>
        </InnerDiv>
      </StyledDiv>
    );
};

export default Header;