import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './radar.module.css';

const RadarChart = ({ size, details, colors = ['lightgray', 'black', "black"], data, quadrants }) => {
  const d3Container = useRef(null);

    useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);

        // Define size
      const width = size, height = size;
      const maxRadius = (Math.min(width, height) / 2 - 1)-70;
      console.log("maxRadius " + maxRadius + " Width " + width + " Height " + height)
      const labels = ["Hold", "Assess", "Trial", "Adopt"];
      const margin = 50;

      // Define a circle
      const circle = d3.arc()
        .innerRadius(0)
        .outerRadius(maxRadius)
        .startAngle(0)
        .endAngle(0);

      // Draw the circle
      const path = svg.append("g")
        .style("stroke", `var(${colors[0]})`)
        .attr("fill-opacity", 0.8)
        .attr("fill", `var(${colors[0]})`)
        .attr("stroke-width", 2)
        .attr("stroke-opacity", 0)
        .attr("transform", `translate(${width / 2 + margin}, ${height / 2 + margin})`)
        .selectAll("path")
        .data(Array(quadrants).fill())
        .join("path")
        .attr("d", circle);

        path.transition()
        .duration(300)
        .ease(d3.easeCubicOut)
        .delay((d, i) => i * 300 / quadrants)
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
          return d3.interpolate(0.9, 0.2);  // Interpolate the opacity of the fill color
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
                .attr("fill-opacity", 0.6)
                .attr('transform', 'scale(1.1)');
            })
            .on('mouseout', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .attr("fill-opacity", 0.2)
                .attr('transform', 'scale(1)');
            });

            if (details) {
              const line = d3.line()
                .x(d => d[0])
                .y(d => d[1]);

              svg.append("rect")
                .attr("x", width/2 -maxRadius + margin)
                .attr("y", height / 2 - 20 + margin) // 20px above the center
                .attr("width", width / 2 + maxRadius - margin - 20)
                .attr("height", 40) // the rectangle will be 40px high, 20px below and above the center
                .attr("fill", `var(${colors[0]})`)
                .attr("fill-opacity", 0.5);

                // inner circles
              for (let i = 1; i <= 2; i++) {
                svg.append("circle")
                  .attr("cx", width / 2 + margin)
                  .attr("cy", height / 2 + margin)
                  .attr("r", (maxRadius / 3) * i)
                  .style("fill", `var(${colors[0]})`)
                  .style("opacity", 0.15 * i)
                  .style("stroke", `var(${colors[0]})`);
              }

              // Add the text labels
              for (let i = 1; i <= 4; i++) {
                svg.append("text")
                  .attr("x", (i==4) ? width /  2 + margin  :  (maxRadius / 3 * (i-1) ) + margin + 16 + (width/2 - maxRadius))
                  .attr("y", height / 2 + 5 + margin)
                  .style("text-anchor", "middle")
                  .style("font-size", "14")
                  .style("font-weight", "400")
                  .attr("fill", "var(--ifm-color-neutral-lightest)")
                  .text(labels[i-1]);

                if (i == 4) continue; // right side text
                svg.append("text")
                  .attr("x", width - margin - (maxRadius / 3 * (i-1)) + 12)
                  .attr("y", height / 2 + 5 + margin)
                  .style("text-anchor", "middle")
                  .style("font-size", "14")
                  .style("font-weight", "400")
                  .attr("fill", "var(--ifm-color-neutral-lightest)")
                  .text(labels[i-1]);
              }
            }

            const label = svg.append("g")
              .attr("transform", `translate(${width / 2}, ${height / 2})`)
              .selectAll("text")
              .data(data)
              .join("text")
              .attr("dy", "-0.5em")
              .attr("fill", "var(--ifm-color-neutral-darkest)")
              .style("text-anchor", "middle")
              .style("font-size", "14")
              .style("font-weight", "600")
              .attr("transform", (d, i) => {
                const angle = ((i * 2 + 1) * Math.PI / data.length) - (Math.PI / 2);
                const radius = Math.sin(angle) * maxRadius > 0 ? maxRadius + 55 : maxRadius + 55;
                return `translate(${radius * Math.cos(angle) + margin}, ${radius * Math.sin(angle) + margin})`;
              })
              .call(text => {
                text.each(function(d) {
                  if (d.label == undefined) return;
                  let arr = d.label.split(' ');
                  d3.select(this).text(arr[0].replaceAll("~", " "));
                  for(let i = 1; i < arr.length; i++) {
                    d3.select(this).append('tspan')
                      .attr('x', 0)
                      .attr('dy', '1.2em')
                      .text(arr[i].replaceAll("~", " "));
                  }
                });
              });


            const innerLabel = svg.append("g")
              .attr("transform", `translate(${width / 2}, ${height / 2})`)
              .selectAll("text")
              .data(data)
              .join("g")
              .attr("dy", "0.35em")
              .attr("fill", "var(--ifm-color-content)")
              .style("text-anchor", "middle")
              .style("font-size", "14")
              .attr("transform", (d, i) => {
                const angle = ((i * 2 + 1) * Math.PI / data.length) - (Math.PI / 2)-0.2;
                const radius = (maxRadius)/5;
                return `translate(${radius * Math.cos(angle) + margin}, ${radius * Math.sin(angle) + margin})`;
              })
              .each(function(d,i) {
                const g = d3.select(this);
                if (details && Array.isArray(d.innerLabel)) {
                  for (let j=0; j < d.innerLabel.length; j++) {
                    let angleOffset = Math.PI / 12; // Adjust this value to change angle
                    let radiusOffset = 0.8
                    g.append("text")
                      .attr("transform", () => {
                        let radiusFactor = d.innerLabel ? 1 - d.innerLabel[j].relevance : 1.0; // Adjust this value to change distance
                        const angle = ((i * 2 + 1) * Math.PI / data.length) - (Math.PI / 2) + angleOffset;
                        const radius = maxRadius * radiusOffset * radiusFactor;
                        return `translate(${radius * Math.cos(angle)}, ${radius * Math.sin(angle)})`;
                      })
                      .attr("fill", "var(--ifm-color-content)")
                      .style("text-anchor", "middle")
                      .text(p => d.innerLabel[j]) //? d.innerLabel[j].value.replaceAll("~", " ") : "");//(d) => { Array.isArray(d.innerLabel) ? (d.innerLabel.map(d=> {return d.value})).toString() : d.innerLabel });
                      .call(text => text.each(function(p) {
                          console.log(p.innerLabel[j])
                           if (p.innerLabel == undefined) return;
                           let arr = p.innerLabel[j].value.split(' ');
                           d3.select(this).text(arr[0].replaceAll("~", " "));
                           for(let i = 1; i < arr.length; i++) {
                             d3.select(this).append('tspan')
                               .attr('x', 0)
                               .attr('dy', '1.2em')
                               .text(arr[i].replaceAll("~", " "));
                           }
                        })
                      )
                  }
                } else {
                  const angleOffset  = Math.PI / 20; // Adjust this value to change angle
                  const radiusOffset = .8; // Adjust this value to change distance
                  g.append("text")
                    .attr("transform", () => {
                      const angle = ((i * 2 + 1) * Math.PI / data.length) - (Math.PI / 2) + angleOffset;
                      const radius = maxRadius / 2 * radiusOffset;
                      return `translate(${radius * Math.cos(angle)}, ${radius * Math.sin(angle)})`;
                    })
                    .attr("fill", "var(--ifm-color-content)")
                    .style("text-anchor", "middle")
                    .text( d => d.innerLabel)
                    .call(text => text.each(function(d) {
                       if (d.innerLabel == undefined) return;
                       if (!Array.isArray(d.innerLabel)) {
                         let arr = d.innerLabel.split(' ');
                         d3.select(this).text(arr[0].replaceAll("~", " "));
                         for(let i = 1; i < arr.length; i++) {
                           d3.select(this).append('tspan')
                             .attr('x', 0)
                             .attr('dy', '1.2em')
                             .text(arr[i].replaceAll("~", " "));
                         }
                       } else {
                         let arr = d.innerLabel.map(d => {return d.value})
                         d3.select(this).text(arr[0].replaceAll("~", " "));
                         for(let i = 1; i < arr.length; i++) {
                           d3.select(this).append('tspan')
                             .attr('x', 0)
                             .attr('dy', '1.2em')
                             .text(arr[i].replaceAll("~", " "));
                         }
                       }
                      })
                    )
                }
              });
        }) ;
    }
  }, []);

  return (
    <svg
      width={size + 100}
      height={size + 100}
      ref={d3Container}
    />
  );
};

export default RadarChart;
