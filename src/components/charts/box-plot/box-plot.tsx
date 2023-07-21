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
      const reversedXValues = xValues.slice().reverse();
  
      const tooltipContent = (
        <>
          <h3 style={{ marginTop: 16 }}>{data.y}</h3>
          <ul style={{ paddingLeft: 0 }}>
            {reversedXValues.map((xValue: string, index: number) => {
              const reversedIndex = xValues.length - index - 1; // Calculate the corresponding index in the original array
              return (
                <li
                  key={xValue}
                  className="g2-tooltip-list-item"
                  data-index={reversedIndex}
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
                      {data.x[reversedIndex]} {/* Use the reversed index */}
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
    width: 300,
    height: 400,
    data: data,
    xField: "x",
    yField: "y",
    tooltip: tooltip,
    textAlign: "left",
    legend: {
      position: "bottom",
      title: {
        text: "Emissions reduction (tCO2e)",
      },
    },
    boxStyle: {
      lineJoin: "round",
      lineCap: "round",
      stroke: "#2563EB",
      fill: "#2563EB",
      fillOpacity: 0.2,
      lineHeight: 20,
      height: 40,
    },
    animation: true,
  };
  return (
    <Box
      {...(config as any)}
      xAxis={{
        tickCount: 15,
        grid: {
          line: {
            style: {
              stroke: '#F1F5F9',
              lineWidth: 1,
              lineDash: [],
              strokeOpacity: 1,
              shadowColor: "black",
              shadowBlur: 0,
              cursor: "pointer",
              lineCap: 'round',
            },
          },
        },
        position: 'bottom'
      }}
      yAxis={{
        grid: {
          alignTick: false,
          closed: false,
          align: "left",
          line: {
            style: {
              stroke: 'white',
            },
          },
        },
        verticalFactor: 18,
          label: {
            style: {
              textAlign: "start",
              fontSize: 14,
              fill: "black",
            },
          },
      }}
    />
  );
};

export default BoxPlotChart;
