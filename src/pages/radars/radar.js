import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './radar.module.css';

const RadarChart = ({ details, colors = ['lightgray', 'black', "black"], data, quadrants }) => {
  const d3Container = useRef(null);

    useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);

        // Define size
      const width = 600, height = 500;
      const maxRadius = Math.min(width, height) / 2 - 1;
      const labels = ["Hold", "Assess", "Trial", "Adopt"];

      // Define a circle
      const circle = d3.arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1)
        .startAngle(0)
        .endAngle(0);

      // Draw the circle
      const path = svg.append("g")
        .style("fill", `var(${colors[0]})`)
        .attr("fill-opacity", 1)
        .attr("stroke", "var(--ifm-background-surface-color)")
        .attr("stroke-width", 2)
        .attr("stroke-opacity", 0)
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
        .selectAll("path")
        .data(Array(quadrants).fill())
        .join("path")
        .attr("d", circle);

        path.transition()
        .duration(750)
        .ease(d3.easeCubicOut)
        .delay((d, i) => i * 750 / quadrants)
        .attrTween("d", function(d, i) {
          const interpolate = d3.interpolate(0, maxRadius);
          return t => {
            const circle = d3.arc()
              .innerRadius(0)
              .outerRadius(interpolate(t))  // Interpolate the radius
              .startAngle(i * 2 * Math.PI / quadrants)
              .endAngle((i + 1) * 2 * Math.PI / quadrants);
            return circle();
          };
        })
        .attrTween("fill-opacity", function() {
          return d3.interpolate(0.9, 1);  // Interpolate the opacity of the fill color
        })
        .attrTween("stroke-opacity", function() {
          return d3.interpolate(0.9, 1);  // Interpolate the opacity of the stroke color
        })
        .end()
        .then(() => {
            path.on('mouseover', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .attr("fill", colors[1])
                .attr('transform', 'scale(1.1)');
            })
            .on('mouseout', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .attr("fill", colors[0])
                .attr('transform', 'scale(1)');
            });

            if (details) {
              const line = d3.line()
                .x(d => d[0])
                .y(d => d[1]);

              // Upper line
              svg.append("path")
                .datum([[width / 2 - maxRadius, height / 2 - 20], [width / 2 + maxRadius, height / 2 - 20]])
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("d", line);

              // Lower line
              svg.append("path")
                .datum([[width / 2 - maxRadius, height / 2 + 20], [width / 2 + maxRadius, height / 2 + 20]])
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("d", line);

              svg.append("rect")
                .attr("x", 52)
                .attr("y", height / 2 - 20) // 20px above the center
                .attr("width", 496)
                .attr("height", 40) // the rectangle will be 40px high, 20px below and above the center
                .attr("fill", "rgba(255, 255, 255, 0.8)");

              for (let i = 1; i <= 2; i++) {
                svg.append("circle")
                  .attr("cx", width / 2)
                  .attr("cy", height / 2)
                  .attr("r", (maxRadius / 3) * i)
                  .style("fill", "none")
                  .style("stroke", "black");
              }

              // Add the text labels
              for (let i = 1; i <= 4; i++) {
                svg.append("text")
                  .attr("x", (i==4) ? width /  2 : maxRadius / 4 * i + (10*i))
                  .attr("y", height / 2 + 5)
                  .style("text-anchor", "middle")
                  .text(labels[i-1]);

                if (i == 4) continue;
                svg.append("text")
                  .attr("x", width - (maxRadius / 4 * i + (10*i)))
                  .attr("y", height / 2 + 5)
                  .style("text-anchor", "middle")
                  .text(labels[i-1]);
              }
            }

            const label = svg.append("g")
              .attr("transform", `translate(${width / 2}, ${height / 2})`)
              .selectAll("text")
              .data(data)
              .join("text")
              .attr("dy", "-1.5em")
              .attr("fill", "var(--ifm-color-content)")
              .style("text-anchor", "middle")
              .attr("transform", (d, i) => {
                const angle = ((i * 2 + 1) * Math.PI / data.length) - (Math.PI / 2);
                  const radius = Math.sin(angle) * maxRadius > 0 ? maxRadius + 20 : maxRadius - 20;
                return `translate(${radius * Math.cos(angle)}, ${radius * Math.sin(angle)})`;
              })
              .text(d => d.label);


            const innerLabel = svg.append("g")
              .attr("transform", `translate(${width / 2}, ${height / 2})`)
              .selectAll("text")
              .data(data)
              .join("text")
              .attr("dy", "0.35em")
              .attr("fill", "white")
              .style("text-anchor", "middle")
              .attr("transform", (d, i) => {
                const angle = ((i * 2 + 1) * Math.PI / data.length) - (Math.PI / 2);
                const radius = d.relevance && details ? maxRadius * (1 - d.relevance) : maxRadius * .5;
                return `translate(${radius * Math.cos(angle)}, ${radius * Math.sin(angle)})`;
              })
              .text(d => d.innerLabel);

        }) ;
    }
  }, []);

  return (
    <svg
      width={650}
      height={600}
      ref={d3Container}
    />
  );
};

export default RadarChart;
