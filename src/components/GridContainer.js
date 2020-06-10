import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
import { Sparkline } from '@progress/kendo-react-charts';

const SparkLineChartCell = (props) => <td><Sparkline data={props.dataItem.RatingHistory}/></td>

const processData = (data) => {
    data.forEach((item) => {
      item.PriceHistory = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
      return item;
    })

    debugger;
    return data;
  }


export const GridContainer = () => (

    <div>
      <Grid style={{height: '300px', width: '690px'}} data={processData(gridData)}>
        <Column field="PlayerRank" title="#" width="70px" />
        <Column field="PlayerName" title="Name" width="160px" />
        <Column field="Age" title="Age" width="100px" />
        <Column field="Country" title="Country" width="130px" />
        <Column field="Rating.Classical" title="Rating" width="100px" />
        <Column field="RatingHistory" width="130px" cell={SparkLineChartCell} title="Rating history" />
      </Grid>
    </div>
  );


