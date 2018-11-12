/* import React from 'react';
import { appleStock } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';
import { AreaClosed } from '@vx/shape';
import { Group } from '@vx/group';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { letterFrequency } from '@vx/mock-data';

const data = appleStock;
const width = 750;
const height = 400;

const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80,
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;


const x = d => new Date(d.date);
const y = d => d.close;

const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, x)
});

const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(data, y)],
});

const see = letterFrequency.slice(5);
const chart = (
    console.log(see),
    console.log(data),
    <svg width={width} height={height}>
    <LinearGradient
        from='#fbc2eb'
        to='#a6c1ee'
        id='gradient'
        />
   <Group top={margin.top} left={margin.left}>
        <AxisLeft
          scale={yScale}
          top={0}
          left={0}
          label={'Close Price ($)'}
          stroke={'#1b1a1e'}
          tickTextFill={'#1b1a1e'}
        />
       <AxisBottom
          scale={xScale}
          top={yMax}
          label={'Years'}
          stroke={'#1b1a1e'}
          tickTextFill={'#1b1a1e'}
        />
       <AreaClosed
          data={data}
          xScale={xScale}
          yScale={yScale}
          x={x}
          y={y}
          fill={"url(#gradient)"}
        />
   </Group>
</svg>
)

export default (chart)
 */
import React from 'react';
import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientTealBlue } from '@vx/gradient';
import { scaleBand, scaleLinear } from '@vx/scale';
import { LinearGradient } from '@vx/gradient';
import { extent, max } from 'd3-array';
import { letterFrequency } from '@vx/mock-data';

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


const data = letterFrequency.slice(5);

// accessors
const x = d => d.letter;
const y = d => +d.frequency * 100;


export default ({
    width,
    height,
  }) => {
    if (width < 10) return null;
  
    // bounds
    const xMax = width;
    const yMax = height - 120;
  
    // scales
    const xScale = scaleBand({
      rangeRound: [0, xMax],
      domain: data.map(x),
      padding: 0.4,
    });
    const yScale = scaleLinear({
      rangeRound: [yMax, 0],
      domain: [0, max(data, y)],
    });
  
    return (
      <svg width={width} height={height}>
        <GradientTealBlue id="teal" />
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={`url(#teal)`}
          rx={14}
        />
        <Group top={40}>
          {data.map((d, i) => {
            const barHeight = yMax - yScale(y(d));
            return (
              <Group key={`bar-${x(d)}`}>
                <Bar
                  width={xScale.bandwidth()}
                  height={barHeight}
                  x={xScale(x(d))}
                  y={yMax - barHeight}
                  fill="rgba(23, 233, 217, .5)"
                  data={{ x: x(d), y: y(d) }}
                  onClick={data => event => {
                    alert(`clicked: ${JSON.stringify(data)}`)
                  }}
                />
              </Group>
            );
          })}
        </Group>
      </svg>
    );
  }