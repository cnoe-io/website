import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './radar.module.css';

const RadarChart = ({ colors = ['lightgray', 'black', "black"], data, quadrants }) => {
  const d3Container = useRef(null);

    useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);

        // Define size
      const width = 600, height = 500;
      const maxRadius = Math.min(width, height) / 2 - 1;

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
              const radius = maxRadius / 2;
              return `translate(${radius * Math.cos(angle)}, ${radius * Math.sin(angle)})`;
            })
            .text(d => d.innerLabel);
        }) ;

    }
  }, []);

  return (
    <svg
      className={styles.radar}
      width={650}
      height={600}
      ref={d3Container}
    />
  );
};

export default RadarChart;
