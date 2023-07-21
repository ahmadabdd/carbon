import React from 'react';
import { Scatter } from '@ant-design/plots';
import { Strategy }  from "services/types/types";

interface ScatterChartProps {
  data: Strategy[];
}

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

  return <Scatter {...config as any} />;
};

export default ScatterChart;
