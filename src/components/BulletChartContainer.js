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
  ChartValueAxisItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import { bulletChartJuneTitle, bulletChartJuneRatings } from '../data/appData';

const seriesToolTip = {
    background: "DAF7A6", // Note that visible defaults to false
    visible: true
};


export const BulletChartContainer = () => (
  <Chart style={{ height: 300, width: 400 }}>
    <ChartLegend visible={true} />
    <ChartTitle font="20px" text={"Rating"}/>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={bulletChartJuneTitle} startAngle={45} />
    </ChartCategoryAxis>
    <ChartSeries>
      {
        bulletChartJuneRatings.map((item, idx) => (
          <ChartSeriesItem key={idx} type="bar" data={item.data} name={item.name} tooltip={seriesToolTip} gap={2}/>
        ))}
    </ChartSeries>
    <ChartValueAxis skip={4}>
      <ChartValueAxisItem color="#888" min={2700} max={2900}/>
    </ChartValueAxis>
  </Chart>
);