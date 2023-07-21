import React from 'react';
import { Scatter } from '@ant-design/plots';
import { Strategy }  from "services/types/types";

interface ScatterChartProps {
  data: Strategy[];
}

const tooltip = {
  customContent: (title: any, items: any) => {
    return (
      <div style={{ padding: 8 }}>
      {items.map((item: any) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "5px",
          }}
        >
          <span
            style={{
              backgroundColor: item.color,
              height: "10px",
              width: "10px",
              borderRadius: "50%",
            }}
          ></span>
          {item.name === "emissions_reduction_tco2e" ? "Emition reduction:" : ''}
          {item.name === "project_cost" ? "Project cost:" : ''}
          {item.name === "name" ? "Strategy:" : ''}
          <p style={{ fontWeight: "bold", margin: 0 }}>
            {item.value}
          </p>
        </div>
      ))}
        <div
          key={items[0]?.color}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "5px",
          }}
        >
          <span
            style={{
              backgroundColor: items[0]?.color,
              height: "10px",
              width: "10px",
              borderRadius: "50%",
            }}
          ></span>
          Building:
          <p style={{ fontWeight: "bold", margin: 0 }}>
            {items[0]?.data?.buildingName}
          </p>
        </div>
    </div>
    )
  }
};

const ScatterChart: React.FC<ScatterChartProps> = ({ data }) => {
  const config = {
    height: 480,
    data: data,
    xField: 'emissions_reduction_tco2e',
    yField: 'project_cost',
    colorField: 'name',
    color: ['#1D4ED8', '#16A34A', '#EA580C', '#A855F7', '#DB2777', '#64748B', '#14B8A6'],
    size: 7,
    shape: 'circle',
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: '#F1F5F9',
            lineWidth: 1,
            lineDash: [],
            strokeOpacity: 1,
            shadowColor: 'black',
            shadowBlur: 0,
            cursor: 'pointer'
          }
        }
      }
    },
    legend: {
      position: 'bottom-left',
      title: {
        text: 'Emissions Reduction (tCO2e)',
      },
    },
    brush: {
      enabled: true,
      mask: {
        style: {
          fillOpacity: 1,
          width: 1
        },
      },
    },
  };

  return <Scatter {...config as any} tooltip={tooltip} />;
};

export default ScatterChart;
