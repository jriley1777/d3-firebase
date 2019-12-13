import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 2rem;
    position: fixed;
    bottom: 0;
    color: black;
    background: white;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

const Footer = props => {
    return (
      <StyledDiv>
        made with{" "}
        <span style={{ color: "red", margin: "0 5px 0 5px" }}>{`<3`}</span> by
        Joe Riley
      </StyledDiv>
    );
};

export default Footer;