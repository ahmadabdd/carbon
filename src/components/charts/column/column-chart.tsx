import { Column } from '@ant-design/plots';
import { ISelectionSummary } from "services/types/types";

const ColumnChart = ({ data }: ISelectionSummary) => { 
  const chartData = [
    {
      "group": "Current emissions",
      "value": data?.currentEmissions,
      "type": ""
    },
    {
      "group": "With all strategies",
      "value": data?.withAllStrategies.lowEstimate,
      "type": "lowEstimate"
    },
    {
      "group": "With all strategies",
      "value": data?.withAllStrategies.median,
      "type": "median"
    },
    {
      "group": "With all strategies",
      "value": data?.withAllStrategies.highEstimate,
      "type": "highEstimate"
    },
  ];
    
const formatValue = (value: number) => value.toLocaleString();


  const tooltip = {
    customContent: (title: any, items: any) => (
        <div style={{ padding: 8 }}>
        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</div>
        {items.map((item: any) => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px'}}>
            <span style={{ backgroundColor: item.color, height: '10px', width: '10px', borderRadius: '50%' }}></span>
            {title === 'Current emissions' ? 'Current emissions' : item.name}: <p style={{ fontWeight: 'bold', margin: 0 }}>{formatValue(item.value)}</p>
          </div>
        ))}
      </div>
      )
  };

  const config = {
    data: chartData,
    tooltip,
    isStack: true,
    xField: 'group',
    yField: 'value',
    seriesField: 'type',
    style: {
      height: 400,
      width: '100%',
    },
    colorField: 'type',
    color: ['#F1F5F9', '#BFDBFE', '#60A5FA', '#2563EB'],
  };

  return <Column {...config} />;
};

export default ColumnChart
