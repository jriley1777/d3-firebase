import React from "react";
import SinglePlotLayout from "../../layout/SinglePlotLayout/SinglePlotLayout";
import * as d3 from 'd3';
import firebase from '../../../firebase';

const FireBar = () => {
    const title = "FireBar";
    const description = "This is a connected bar graph to a firestore db.";
    const renderPlot = () => {

        firebase.getCollection('dishes').then(res => {

            const data = res.docs.map(x => x.data());
            let svg = d3
                .select("#canvas-FireBar")
                .append("svg")
                .attr("height", "100%")
                .attr("width", "100%");

            let svgHeight = svg.style("height").replace("px", "");
            let svgWidth = svg.style("width").replace("px", "");
            const margin = { left: 60, right: 20, top: 20, bottom: 30 };
            const graphWidth = svgWidth - margin.left - margin.right;
            const graphHeight = svgHeight - margin.top - margin.bottom;

            const graph = svg.append('g')
                .attr('width', graphWidth)
                .attr('height', graphHeight)
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

            let rects = graph.selectAll("rect").data(data);

            let yScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.orders)])
                .range([graphHeight, 0]);

            let xScale = d3.scaleBand()
                .domain(data.map(x => x.name))
                .range([0, graphWidth])
                .paddingInner(0.2)
                .paddingOuter(0.2);

            const yAxisGroup = graph.append('g');
            const xAxisGroup = graph.append('g')
                .attr('transform', `translate(0, ${graphHeight})`);
            const yAxis = d3.axisLeft(yScale)
                .ticks(3)
                .tickFormat(d => d + ' orders');
            const xAxis = d3.axisBottom(xScale);

            xAxisGroup.call(xAxis);
            yAxisGroup.call(yAxis);


            rects.attr("x", d => xScale(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", xScale.bandwidth)
                .attr("fill", `purple`)
                .transition().duration(500)
                .attr("y", d => yScale(d.orders))
                .attr("height", d => graphHeight - yScale(d.orders));

            rects.exit().remove();
            rects
                .enter()
                .append("rect")
                .attr("x", d => xScale(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", xScale.bandwidth)
                .attr("fill", `purple`)
                .transition().duration(500)
                .attr("y", d => yScale(d.orders))
                .attr("height", d => graphHeight - yScale(d.orders));
        })
    };
    return <SinglePlotLayout
        title={title}
        id='canvas-FireBar'
        description={description}
        renderPlot={renderPlot}
    />;
};

export default FireBar;
