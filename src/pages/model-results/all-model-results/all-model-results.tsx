import { FC } from "react";
import "./all-model-results.css";
import ScatterChart from "components/charts/scatter/scatter-chart";
import { Table, Typography } from "antd";
import { Filter, MoreHorizontal, Plus, Search, Triangle } from "react-feather";
import { useLogic } from "./all-model-results.logic";

const AllModelResults: FC = () => {
  const {
    columns,
    rowSelection,
    handleChange,
    filteredChartData,
    handleSearch,
    filteredTableData,
  } = useLogic();

  return (
    <div className="all-model-results">
      <div className="header">
        <Typography.Title style={{ margin: 0 }} level={4}>
          All model results
        </Typography.Title>
        <MoreHorizontal color="#94A3B8" cursor="pointer" />
      </div>
      <div className="scatter-chart-container">
        <ScatterChart data={filteredChartData || []} key="scatter-chart" />
      </div>
      <div className="search-container">
        <div className="search">
          <Search size={18} color="#64748B" />
          <input
            type="text"
            placeholder="Search strategies"
            className="search-input"
            onChange={handleSearch}
          />
        </div>
        <div className="buttons">
          <button className="table-button">
            <Plus size={20} />
            <span className="text">Columns</span>
          </button>
          <button className="table-button">
            <Filter size={18} />
            <span className="text">Filters</span>
          </button>
        </div>
      </div>
      <Table
        dataSource={filteredTableData}
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
