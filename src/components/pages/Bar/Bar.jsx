import React from "react";
import SinglePlotLayout from "../../layout/SinglePlotLayout/SinglePlotLayout";
import * as d3 from 'd3';

const Bar = () => {
  const title = "Bar";
  const description = "Look at me I'm a bar graph";
  const data = [];
  for(let i=0;i<25;i++){
      data.push(Math.floor(Math.random()*255));
  }
  const renderPlot = () => {
        let svg = d3
          .select("#canvas-bar")
          .append("svg")
          .attr("height", "100%")
          .attr("width", "100%");

        let svgHeight = svg.style("height").replace("px", "");
        let svgWidth = svg.style("width").replace("px", "");
        let rects = svg.selectAll("rect").data(data);
        const barWidth = Math.floor(svgWidth / data.length);

        rects
          .attr("x", (d, i) => i * barWidth)
          .attr("width", barWidth - 1)
          .attr("height", d => svgHeight - d)
          .attr("fill", d => `rgb(${d}, 0, ${d})`)
          .attr("y", d => svgHeight - d);

        rects
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * barWidth)
          .attr("y", svgHeight)
          .attr("height", 0)
          .attr("width", barWidth - 1)
          .attr("fill", d => `rgb(${d}, 0, ${d})`)
          .transition().duration(500)
            .attr("y", d => svgHeight - d)
            .attr("height", d => svgHeight - d);
    };
  return <SinglePlotLayout 
    title={title} 
    id='canvas-bar'
    description={description} 
    renderPlot={ renderPlot }
    />;
};

export default Bar;
