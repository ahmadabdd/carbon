import React from "react";
import { Box } from "@ant-design/plots";

type BoxPlotChart = {
  data: data[];
};

type data = {
  y: string;
  x: number[];
};

const BoxPlotChart = ({ data }: BoxPlotChart) => {
  const tooltip = {
    customContent: (title: any, items: any) => {
      const data = items[0]?.data;
      if (!data) return null;

      const xValues = ["Min", "Q1", "Median", "Q3", "Max"];
      const tooltipContent = (
        <>
          <h3 style={{ marginTop: 16 }}>{data.y}</h3>
          <ul style={{ paddingLeft: 0 }}>
            {xValues.map((xValue: string, index: number) => {
              return (
                <li
                  key={xValue}
                  className="g2-tooltip-list-item"
                  data-index={index}
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      marginRight: "8px",
                    }}
                  >
                    <div style={{ color: items[0].color, fontSize: "16px" }}>
                      {data.x[index]}
                    </div>
                    <div>{xValue}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      );
      return tooltipContent;
    },
  };
  const config = {
    width: 400,
    height: 400,
    data: data,
    xField: "x",
    yField: "y",
    tooltip: tooltip,
    textAlign: 'left',
    xAxis: {
        // label: {
        //   textAlign: 'start', // Align x-axis labels to the left
        // },
        nice: true,
        transpose: true,
      },
      yAxis: {
        // label: {
        //   textAlign: 'start', // Align y-axis labels to the left
        // },
        nice: true,
        transpose: true,
      },
    boxStyle: {
      stroke: "#2563EB",
      fill: "#2563EB",
      fillOpacity: 0.2,
    //   point: {
    //     size: 5,
    //     shape: "diamond",
    //     style: {
    //       fill: "red",
    //       stroke: "#2593fc",
    //       lineWidth: 2,
    //     },
    //   },
    },
    animation: true,
  };
  return <Box {...config} />;
};

export default BoxPlotChart;
