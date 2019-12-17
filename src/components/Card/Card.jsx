import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled(Link)`
  display: block;
  border: 1px solid black;
  min-width: 20vw;
  min-height: 25vh;
  background: white;
  text-decoration: none;
  color: black;
`;

const CardContent = styled.div`
    border: 1px solid black;
    background: lightgrey;
    margin: 10px 10px 10px 10px;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

const Description = styled.div`
    font-size: 1rem;
`;

const Title = styled.div`
  font-style: bold;
  font-size: 1.5rem;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Card = ({ to, title, description }) => {
    return (
      <CardWrapper
        to={ to }>
        <CardContent>
          <Description>{ description }</Description>
        </CardContent>
        <Title>{ title }</Title>
      </CardWrapper>
    );
}

export default Card;