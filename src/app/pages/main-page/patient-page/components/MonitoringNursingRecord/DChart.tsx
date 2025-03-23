'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Define data type
interface DataPoint {
    hour: string;
    hr: number | null;
}

export type D3LineChartProps = {
    Domain?: any;
    chartData: DataPoint[];
    tick?: number;
};

// **Chart Size (Keep Width Fixed)**
const WIDTH = 317;
const HEIGHT = 127;
const MARGIN = { top: 10, right: 50, bottom: 25, left: 25 };
const SHIFT_RIGHT = 11; // Move only data points & labels

export default function D3LineChart({
    Domain,
    chartData,
    tick,
}: D3LineChartProps) {
    const ref = useRef<SVGSVGElement | null>(null);

    const uniqueDates = Array.from(
        new Set(chartData.map((d) => d.hour.split(':')[0].split('-')[2]))
    );

    useEffect(() => {
        if (!ref.current) return;

        // Convert hour values to numeric, differentiating days
        const numericData = chartData.map((d, i) => ({
            hour: Number(d.hour.split(':')[1]) + (i >= 6 ? 24 : 0),
            hr: d.hr,
        }));

        // Detect Min & Max X values
        const xMin = d3.min(numericData, (d) => d.hour) ?? 0;
        const xMax = d3.max(numericData, (d) => d.hour) ?? 48;

        // **Clear previous chart before re-rendering**
        d3.select(ref.current).selectAll('*').remove();

        // **Create SVG container**
        const svg = d3
            .select(ref.current)
            .attr('width', WIDTH)
            .attr('height', HEIGHT);

        // **Expand X-Axis scale within fixed width**
        const xScale = d3
            .scaleLinear()
            .domain([xMin, xMax])
            .range([MARGIN.left, WIDTH - MARGIN.right]);

        const yScale = d3
            .scaleLinear()
            .domain([Domain[0], Domain[Domain.length - 1]])
            .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

        // **Draw Horizontal Grid (Y-axis grid)**
        svg.append('g')
            .attr('class', 'y-grid') // Unique class for Y grid
            .attr('transform', `translate(${MARGIN.left},0)`)
            .call(
                d3
                    .axisLeft(yScale)
                    .ticks(tick ? tick : 5) // Reduce number of Y-axis ticks
                    .tickSize(-WIDTH + MARGIN.left + MARGIN.right - 22) // Extend grid lines across chart
                    .tickFormat(() => '') // Hide Y-axis tick labels
            )
            .selectAll('line')
            .attr('stroke', '#828080')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-dasharray', '2 2'); // Dashed style for Y grid lines

        // **Ensure main Y-axis line remains invisible**
        svg.select('.y-grid path') // Selects the Y-axis main line
            .attr('stroke', 'none'); // Hides the default solid Y-axis line

        // **Draw Vertical Grid (X-axis grid)**
        const xGrid = svg
            .append('g')
            .attr('class', 'x-grid') // Unique class for X grid
            .attr('transform', `translate(0,${HEIGHT - MARGIN.bottom})`)
            .call(
                d3
                    .axisBottom(xScale)
                    .tickValues([
                        2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50,
                    ])
                    .tickSize(-HEIGHT + MARGIN.top + MARGIN.bottom) // Extend grid lines vertically
                    .tickFormat(() => '') // Hide X-axis tick labels
            );

        // **Adjust X-Grid Lines (Make Middle One Longer)**
        xGrid
            .selectAll('line')
            .attr('stroke', '#828080')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-dasharray', '2 2')
            .attr('y1', (d) => (d === 26 ? 15 : 0)) // Move middle grid line lower
            .attr('y2', (d) =>
                d === 26 ? -HEIGHT + 15 : -HEIGHT + MARGIN.top + MARGIN.bottom
            ); // Make middle grid line longer

        // **Ensure main X-axis line remains invisible**
        svg.select('.x-grid path') // Selects the X-axis main line
            .attr('stroke', 'none'); // Hides the default solid X-axis line

        const solidLineTicks = [2, 50]; // Modify these values as needed

        solidLineTicks.forEach((tick) => {
            svg.append('line')
                .attr('x1', xScale(tick)) // Start at the tick value
                .attr('x2', xScale(tick)) // Keep it vertical
                .attr('y1', HEIGHT - MARGIN.bottom - HEIGHT + 10) // Slightly above grid
                .attr('y2', MARGIN.bottom - 15) // Extend down to X-axis
                .attr('stroke', '#828080') // Solid black line
                .attr('stroke-width', 1); // Slightly thicker than grid lines
        });

        // **Line generator (Straight Line)**
        const line = d3
            .line<{ hour: number; hr: number | null }>()
            .defined((d) => d.hr !== null) // Skip if hr is null
            .x((d) => xScale(d.hour) + SHIFT_RIGHT)
            .y((d) => yScale(d.hr as number))
            .curve(d3.curveLinear);

        // **Draw the line (Shifted Right)**
        svg.append('path')
            .datum(numericData)
            .attr('fill', 'none')
            .attr('stroke', '#1fa9c4')
            .attr('stroke-width', 1)
            .attr('d', line);

        // **Draw dots (Shifted Right)**
        svg.selectAll('circle')
            .data(numericData.filter((d) => d.hr !== null)) // Exclude null values
            .enter()
            .append('circle')
            .attr('cx', (d) => xScale(d.hour) + SHIFT_RIGHT)
            .attr('cy', (d) => yScale(d.hr as number))
            .attr('r', 2)
            .attr('fill', '#1fa9c4');
        const dateScale = d3
            .scaleBand()
            .domain(uniqueDates)
            .range([MARGIN.left, WIDTH - MARGIN.right + 22]);

        const dateAxis = d3
            .axisTop(dateScale)
            .tickValues(uniqueDates)
            .tickFormat((d) => `${d}`)
            .tickSize(0);

        const dateAxisGroup = svg
            .append('g')
            .attr('class', 'date-axis')
            .attr('transform', `translate(0,${MARGIN.top})`)
            .call(dateAxis);

        // Remove the axis line
        dateAxisGroup.select('path').attr('stroke', 'none');

        // Style the tick labels
        dateAxisGroup
            .selectAll('text')
            .style('font-size', '10px')
            .style('text-anchor', 'middle')
            .style('fill', (d, i) => (i === 0 ? '#828080' : '#1fa9c4')); // Gray for first, blue for second

        // **X-Axis (Expanded, Without Shifting Line)**
        const xAxis = d3
            .axisBottom(xScale)
            .tickValues([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46])
            .tickFormat((d) => `${(d as number) % 24}`)
            .tickSize(0);

        // Append X-axis line separately to expand its width
        svg.append('line')
            .attr('x1', MARGIN.left)
            .attr('x2', WIDTH - MARGIN.right + 22)
            .attr('y1', HEIGHT - MARGIN.bottom)
            .attr('y2', HEIGHT - MARGIN.bottom)
            .attr('stroke', '#828080')
            .attr('stroke-width', 1);

        // Append X-axis labels and ticks separately
        svg.append('g')
            .attr('transform', `translate(0,${HEIGHT - MARGIN.bottom})`)
            .call(xAxis)
            .selectAll('text')
            .attr('dx', SHIFT_RIGHT) // Shift only labels
            .style('font-size', '9px') // Slightly larger for better visibility
            .style('text-anchor', 'middle'); // Center align text

        // **Y-Axis with Labels (Properly Positioned)**
        const yAxis = svg
            .append('g')
            .attr('class', 'y-axis-labels') // Unique class for Y-axis labels
            .attr('transform', `translate(${MARGIN.left},0)`)
            .call(
                d3
                    .axisLeft(yScale)
                    .tickValues(Domain) // Show only these labels
                    .tickFormat((d) => d.toString()) // Ensure labels display correctly
                    .tickSize(0) // Removes tick lines but keeps labels
            );

        // **Move Y-axis labels slightly left**
        yAxis
            .selectAll('text')
            .attr('dx', '-1') // Move labels slightly left (adjust as needed)
            .style('font-size', '9px') // Adjust size
            .style('fill', '#828080') // Match grid color
            .style('text-anchor', 'end'); // Align text to the right of Y-axis

        // **Make Y-Axis Line Dashed**
        yAxis
            .select('path') // Select the Y-axis line
            .attr('stroke', '#828080') // Match grid color
            .attr('stroke-dasharray', '2 2') // Dashed line style
            .attr('stroke-opacity', 0.1)
            .attr('stroke-width', 1);
    }, [chartData, Domain]);

    return <svg ref={ref} />;
}
