import React, { useState } from "react";
import styled from 'styled-components';
import SinglePlotLayout from "../../layout/SinglePlotLayout/SinglePlotLayout";
import * as d3 from 'd3';
import firebase from '../../../firebase';

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: lightgrey;
  border-radius: 5px;
  padding: 10px;
  align-items: flex-end;
  justify-content: center;
  max-width: 70%;
  > button, input {
      margin: 2px;
      margin-left: 10px;
      width: 15vw;
      border-radius: 5px;
      line-height: 1.25rem;
  }
`;

const StyledInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
`;

const FireBar = () => {
  const title = "FireBar";
  const description = "This is a connected bar graph to a firestore db.";
  const [name, setName] = useState('');
  const [orders, setOrders] = useState(null);
  const [errors, setErrors] = useState('');

  const addOrder = async e => {
      e.preventDefault();
      if(name && orders) {
        await firebase.post('dishes', name, {
          name,
          orders
        });
        renderPlot();
        setName('');
        setOrders(null);
      } else {
        setErrors('Please provide both name and order value.');
      }
  }

  const resetErrors = () => setErrors('');

  const getData = () => {
    const data = firebase.getCollection('dishes').then(res => {
      return res.docs.map(x => x.data());
    });
    return data;
  };

  const renderPlot = async () => {
    let data = await getData();
    d3.select("#canvas-FireBar").select("svg").remove();
    let svg = d3
      .select("#canvas-FireBar")
      .append("svg")
      .attr("height", "100%")
      .attr("width", "100%");

    let svgHeight = svg.style("height").replace("px", "");
    let svgWidth = svg.style("width").replace("px", "");
    const margin = { left: 80, right: 20, top: 20, bottom: 80 };
    const graphWidth = svgWidth - margin.left - margin.right;
    const graphHeight = svgHeight - margin.top - margin.bottom;

    const graph = svg.append('g')
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    let y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.orders) + 1000])
      .range([graphHeight, 0]);

    let x = d3.scaleBand()
      .domain(data.map(x => x.name))
      .range([0, graphWidth])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const yAxisGroup = graph.append('g');
    const xAxisGroup = graph.append('g')
      .attr('transform', `translate(0, ${graphHeight})`);
    const yAxis = d3.axisLeft(y)
      .ticks(5)
      .tickFormat(d => d + ' orders');
    const xAxis = d3.axisBottom(x); 

    const formatXTicks = () => {
      xAxisGroup.selectAll("text")
      .attr("transform", "rotate(-45)")
      .attr("text-anchor", 'end'); 
    }
      
    const initial = (data) => {

      let rects = graph.selectAll("rect").data(data);

      //5
      rects
        .enter()
        .append("rect")
        .attr("x", d => x(d.name))
        .attr("y", graphHeight)
        .attr("height", 0)
        .attr("width", x.bandwidth)
        .attr("fill", `purple`)
        .transition().duration(500)
        .attr("y", d => y(d.orders))
        .attr("height", d => graphHeight - y(d.orders));

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);
      formatXTicks();
    }
      
    const update = async () => {
      data = await getData();
      //1
      y.domain([0, d3.max(data, d => d.orders) + 1000]);
      x.domain(data.map(x => x.name));

      //2  
      let rects = graph.selectAll("rect").data(data);

      //3
      rects.exit().remove();

      //4
      rects.attr("x", d => x(d.name))
        .attr("width", x.bandwidth)
        .attr("fill", `purple`)
        .transition().duration(500)
        .attr("y", d => y(d.orders))
        .attr("height", d => graphHeight - y(d.orders));
        ;

      //5
      rects
        .enter()
        .append("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.orders))
        .attr("height", d => graphHeight - y(d.orders))
        .attr("width", x.bandwidth)
        .attr("fill", `purple`);

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);
      formatXTicks();
    };  
    d3.interval(() => {
      update(data);
    }, 5000)
    initial(data);
  };

  return (
    <SinglePlotLayout
      title={title}
      id="canvas-FireBar"
      description={description}
      renderPlot={renderPlot}
    >
      <InputWrapper 
          onSubmit={addOrder}>
        <div>Add an order:</div>
        <StyledInput>
          Name
          <input 
            type="text" 
            value={name} 
            onChange={e => {
              resetErrors();
              setName(e.target.value)
            }} />
        </StyledInput>
        <StyledInput>
          Orders
          <input 
            type="number" 
            value={orders} 
            onChange={e => {
              resetErrors();
              setOrders(e.target.value)
            }} />
        </StyledInput>
        <button
          style={{
            background: "green",
            color: "white"
          }}
        >
          Submit
        </button>
        <span style={{ color:"red", marginTop:'5px' }}>{errors}</span>
      </InputWrapper>
    </SinglePlotLayout>
  );
};

export default FireBar;
