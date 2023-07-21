import { Select, Typography } from "antd";
import "./reduction-potential.css";
import { MoreHorizontal } from "react-feather";
import BoxPlotChart from "components/charts/box-plot/box-plot";
import { FC } from "react";
import { ReductionPotentialProps } from "./reduction-potential.types";

export const ReductionPotential: FC<ReductionPotentialProps> = ({
  options,
  isLoadingBuildings,
  setBuilding,
  data,
}) => (
  <div className="reduction-potential-chart">
    <div className="chart-header">
      <Typography.Title style={{ margin: 0 }} level={4}>
        Reduction potential
      </Typography.Title>
      <MoreHorizontal color="#94A3B8" cursor="pointer" />
    </div>
    <Select
      loading={isLoadingBuildings}
      defaultValue={"All buildings"}
      options={options}
      onChange={(e) => setBuilding(e)}
    />
    <div className="chart">
      <BoxPlotChart key="box-plot-chart" data={data} />
    </div>
  </div>
);
