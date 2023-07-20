import { Typography } from "antd";
import { FC } from "react";
import ColumnChart from "components/charts/column/column-chart";
import { EmissionsData } from "services/types/types";

export const SelectionSummary: FC<{ data?: EmissionsData;}> = ({ data }) => (
    <>
        <Typography.Title style={{ margin: 0 }} level={5}>
          Selection summary
        </Typography.Title>
        <ColumnChart data={data} key="column-chart" />
    </>
)