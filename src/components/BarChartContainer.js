import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

import { barChartDeltaStats } from '../data/appData';

let colcolor = (a) => {
  switch (a) {
      case 'Aronian':
          return 'Chocolate';
      case 'So':  
          return 'Wheat';
      case 'Radjabov':
          return 'Aquamarine';
      case 'Giri':
          return 'DarkCyan';
      default:
          break;

  }
}

const seriesToolTip = {
  background: "DAF7A6", // Note that visible defaults to false
  visible: true
};

const reflectaxis = {
  mirror: true
};

export const BarChartContainer = () => (
  <Chart style={{ height: 288, width:300 }}>
    <ChartLegend visible={false} />
    <ChartTitle font="20px" text={"Year-over-Year Change"}/>
    <ChartSeries>
      {
        barChartDeltaStats.map((item, idx) => (
          <ChartSeriesItem key={idx} type="bar" data={item.data} name={item.name} color={colcolor(item.name)} tooltip={seriesToolTip} gap={2}/>
        ))}
    </ChartSeries>
    <ChartValueAxis skip={4}>
      <ChartValueAxisItem color="#888" line={reflectaxis} />
    </ChartValueAxis>
  </Chart>
);