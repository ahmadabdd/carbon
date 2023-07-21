import { FC } from "react";
import "./all-model-results.css";
import ScatterChart from "components/charts/scatter/scatter-chart";
import { Table, Typography } from "antd";
import { MoreHorizontal } from "react-feather";
import { useLogic } from "./all-model-results.logic";

const AllModelResults: FC = () => {
  const { chartData, tableData, columns, rowSelection, handleChange } =
    useLogic();

  return (
    <div className="all-model-results">
      <div className="header">
        <Typography.Title style={{ margin: 0 }} level={4}>
          All model results
        </Typography.Title>
        <MoreHorizontal color="#94A3B8" cursor="pointer" />
      </div>
      <ScatterChart data={chartData || []} key="scatter-chart" />
      <Table
        dataSource={tableData}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        scroll={{ x: "max-content" }}
        pagination={{
          responsive: true,
        }}
        onChange={handleChange}
      >
        <Table.Column title={"Strategy name"} />
        <Table.Column title={"Building name"} />
        <Table.Column title={"Emissions reduction (tCO2e)"} />
        <Table.Column title={"Emissions reduction (% of portfolio)"} />
        <Table.Column title={"Project cost ($/m3)"} />
      </Table>
    </div>
  );
};

export default AllModelResults;
