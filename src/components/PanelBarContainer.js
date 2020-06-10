import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { panelBarData } from '../data/appData';

const imageUrl = (imageName) => ('img/'+ imageName +'.jpg');

export const PanelBarContainer = () => (
  <PanelBar >
    <PanelBarItem expanded={true} title="Top 10 Players">
      <div>
        {panelBarData.players.map((item, idx) => (
          <div className={idx === 0 ? 'teammate k-state-selected' : 'teammate'} id={item.firstName + ' ' + item.lastName} key={idx}>
            <img src={imageUrl(item.firstName)} alt={item.firstName + ' ' + item.lastName} width = "75" height = "75" />
            <span className="mate-info">
              <h4 style={{textIndent: "10px", height: "10px"}}>{item.firstName + ' ' + item.lastName}</h4>
              <p style={{color: "green", textIndent: "50px"}}>{"#" + item.rank}</p>
            </span>
          </div>
        ))}
      </div>
    </PanelBarItem>
    
      <PanelBarItem title={'Previous Reports'} >
        {panelBarData.salesReports.map((item, idx) => (
          <PanelBarItem title={item.title} key={idx} />
        ))}
      </PanelBarItem >
    <PanelBarItem title="Communication" disabled={true} />
  </PanelBar>
)