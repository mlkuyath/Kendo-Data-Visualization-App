import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartTitle,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

import { bulletChartJuneTitle, bulletChartJuneRatings } from '../data/appData';

export const BulletChartContainer = () => (
  <Chart style={{ height: 300, width: 400 }}>
    <ChartLegend visible={false} />
    <ChartTitle font="20px" text={"Rating"}/>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={bulletChartJuneTitle} startAngle={45} />
    </ChartCategoryAxis>
    <ChartSeries>
      {
        bulletChartJuneRatings.map((item, idx) => (
          <ChartSeriesItem key={idx} type="bar" data={item.data} name={item.name} gap={2}/>
        ))}
    </ChartSeries>
    <ChartValueAxis skip={4}>
      <ChartValueAxisItem color="#888" min={2700} max={2900}/>
    </ChartValueAxis>
  </Chart>
);