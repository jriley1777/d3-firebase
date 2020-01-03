import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as d3 from 'd3';

const PageWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  position: absolute;
`;

const ContentWrapper = styled.div`
  height: 80%;
  width: auto;
  margin: 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
    display: flex;
    width: 100%;
    font-size: 10rem;
    margin: 0;
    padding: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const Canvas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  margin: 20px 20px 20px 60px;
  padding: 10px;
  border: 1px solid black;
  width: 60vw;
`;

const SinglePlotLayout = ({ title, id, description, renderPlot, children, ...rest }) => {
  
  const cleanUp = () => {
      return d3
        .select(`#${id}`)
        .select("svg")
        .remove();
  }
  useEffect(() => {
    renderPlot();
    return cleanUp;
  }, []);
  return (
    <PageWrapper {...rest}>
      <ContentWrapper>
        <Row>
          <div>
            <Title>{title}</Title>
            <p>{description}</p>
            { children }
          </div>
          <Canvas id={`${id}`} />
        </Row>
      </ContentWrapper>
    </PageWrapper>
  );
};

SinglePlotLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  renderPlot: PropTypes.func.isRequired,
};

export default SinglePlotLayout;