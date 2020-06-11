import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartSeriesLabels,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

import { barChartDeltaStats } from '../data/appData';

const seriesToolTip = {
  background: "DAF7A6", // Note that visible defaults to false
  visible: true
};

export const BarChartContainer = () => (
  <Chart style={{ height: 288, width:300 }}>
    <ChartLegend visible={false} />
    <ChartSeriesLabels visible={true} position="center"/>
    <ChartTitle font="20px" text={"Year-over-Year Change"}/>
    <ChartSeries>
      {
        barChartDeltaStats.map((item, idx) => (
          <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} tooltip={seriesToolTip} gap={2}/>
        ))}
    </ChartSeries>
    <ChartValueAxis skip={4}>
      <ChartValueAxisItem color="#888" skip={2} />
    </ChartValueAxis>
  </Chart>
);