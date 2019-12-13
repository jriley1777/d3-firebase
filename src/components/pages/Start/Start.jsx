import React from 'react';
import SinglePlotLayout from '../../layout/SinglePlotLayout/SinglePlotLayout';
import * as d3 from "d3";

const Start = () => {
    const title = 'Start';
    const description = 'Testing new layout';
    const renderPlot = () => {
        let svg = d3.select('#canvas')
            .append('svg')
            .attr('height', '100%')
            .attr('width', '100%');

        svg.append('rect')
            .attr('width', 400)
            .attr('height', 400)
            .attr('fill', 'blue');

        svg
          .append("circle")
          .attr("r", 200)
          .attr("cx", 400)
          .attr("cy", 300)
          .attr("fill", "red");    
        
        svg
          .append("line")
          .attr("x1", 550)
          .attr("x2", 300)
          .attr("y1", 50)
          .attr("y2", 400)
          .attr("stroke-width", 10)
          .attr("stroke", "yellow");    
    };
    return (
        <SinglePlotLayout 
            title={title} 
            description={description}
            renderPlot={ renderPlot } />
    );
}

export default Start;