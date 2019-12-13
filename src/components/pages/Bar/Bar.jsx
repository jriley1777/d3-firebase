import React from "react";
import SinglePlotLayout from "../../layout/SinglePlotLayout/SinglePlotLayout";
import * as d3 from 'd3';

const Bar = () => {
  const title = "Bar";
  const description = "Look at me I'm a bar graph";
  const data = [];
  for(let i=0;i<250;i++){
      data.push(Math.floor(Math.random()*255));
  }
  console.log(data);
  const renderPlot = () => {
        let svg = d3.select('#canvas')
            .append('svg')
            .attr('height', '100%')
            .attr('width', '100%');

        let svgHeight = svg.style("height").replace("px","");
        let svgWidth = svg.style("width").replace("px", "");    

        let rects = svg.selectAll('rect')
            .data(data);

        rects
          .attr("x", (d, i) => i * 11)
          .attr("width", 10)
          .attr("height", d => svgHeight - d)
          .attr("fill", d => `rgb(${d}, ${d}, ${d})`)
          .attr("y", d => svgHeight - d);

        rects
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 11)
          .attr("width", 10)
          .attr("height", d => svgHeight - d)
          .attr("fill", d => `rgb(${d}, ${d}, ${d})`)
          .attr("y", d => svgHeight - d)
          ;
    };
  return <SinglePlotLayout 
    title={title} 
    description={description} 
    renderPlot={ renderPlot }
    />;
};

export default Bar;