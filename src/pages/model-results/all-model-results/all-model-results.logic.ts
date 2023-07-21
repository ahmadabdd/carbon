import { useEffect, useState } from "react";
import { useGetStrategiesDetails } from "services/react-query/dashboard-methods";
import { ColumnsType, SorterResult } from "antd/es/table/interface";
import { TableProps } from "antd";
import { IStrategiesDetail, Strategy } from "services/types/types";

type DataType = {
  title: string;
  dataIndex: string;
  key: string;
  strategyName: string;
  buildingName: string;
  emissionsReductionTco2e: number;
  emissionsReductionPercent: number;
  projectCost: number;
};

export const useLogic = () => {
  const { data } = useGetStrategiesDetails({});
  const [tableData, setTableData] = useState<any[]>();
  const [chartData, setChartData] = useState<Strategy[]>();
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const columns: ColumnsType<DataType> = [
    {
      title: "Strategy name",
      dataIndex: "strategyName",
      key: "strategyName",
      sorter: (a, b) => a.strategyName.length - b.strategyName.length,
      sortOrder:
        sortedInfo.columnKey === "strategyName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Building name",
      dataIndex: "buildingName",
      key: "buildingName",
      sorter: (a: DataType, b: DataType) =>
        a.buildingName.localeCompare(b.buildingName),
      sortOrder:
        sortedInfo.columnKey === "buildingName" ? sortedInfo.order : null,
    },
    {
      title: "Emissions reduction (tCO2e)",
      dataIndex: "emissionsReductionTco2e",
      key: "emissionsReductionTco2e",
      sorter: (a, b) => a.emissionsReductionTco2e - b.emissionsReductionTco2e,
      sortOrder:
        sortedInfo.columnKey === "emissionsReductionTco2e"
          ? sortedInfo.order
          : null,
    },
    {
      title: "Emissions reduction (% of portfolio)",
      dataIndex: "emissionsReductionPercent",
      key: "emissionsReductionPercent",
      sorter: (a, b) =>
        a.emissionsReductionPercent - b.emissionsReductionPercent,
      sortOrder:
        sortedInfo.columnKey === "emissionsReductionPercent"
          ? sortedInfo.order
          : null,
    },
    {
      title: "Project cost ($/m3)",
      dataIndex: "projectCost",
      key: "projectCost",
      sorter: (a, b) => a.projectCost - b.projectCost,
      sortOrder:
        sortedInfo.columnKey === "projectCost" ? sortedInfo.order : null,
    },
  ];

  const getStrategies = (data?: IStrategiesDetail[]) => {
    return (
      data?.flatMap((item) => {
        const strategies = item.stratagy.map((strategy) => ({
          ...strategy,
          buildingName: item.name,
        }));
        return strategies;
      }) || []
    );
  };

  // setting chart data
  useEffect(() => {
    setChartData(getStrategies(data?.data));
  }, [data]);

  // setting table data
  useEffect(() => {
    if (data?.data) {
      const result = data?.data.flatMap((item, i) => {
        return item.stratagy.map((strategy, j) => ({
          key: `${i}-${j}`,
          strategyName: strategy.name,
          buildingName: item.name,
          emissionsReductionTco2e: strategy.emissions_reduction_tco2e,
          emissionsReductionPercent:
            strategy.emissions_reduction_portfolio_percent,
          projectCost: strategy.project_cost,
        }));
      });
      setTableData(result);
    }
  }, [data]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      if (selectedRows.length) {
        const selectedStrategyNames = selectedRows.map(
          (item) => item.strategyName
        );
        setChartData(
          chartData?.filter((chartDataItem) =>
            selectedStrategyNames.includes(chartDataItem.name)
          ) || []
        );
      } else {
        setChartData(getStrategies(data?.data));
      }
    },
  };

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  return {
    chartData,
    tableData,
    columns,
    sortedInfo,
    handleChange,
    rowSelection,
  };
};
