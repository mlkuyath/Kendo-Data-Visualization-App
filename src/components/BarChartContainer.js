import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartTitle,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

import { barChartDeltaStats } from '../data/appData';

export const BarChartContainer = () => (
  <Chart style={{ height: 288 }}>
    <ChartLegend visible={false} />
    <ChartTitle font="20px" text={"Year-over-Year Change"}/>
    <ChartSeries>
      {
        barChartDeltaStats.map((item, idx) => (
          <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} gap={2}/>
        ))}
    </ChartSeries>
    <ChartValueAxis skip={4}>
      <ChartValueAxisItem color="#888" skip={2} />
    </ChartValueAxis>
  </Chart>
);