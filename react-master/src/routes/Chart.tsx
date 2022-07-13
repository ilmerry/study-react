import React from 'react';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexCharts from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = ({coinId}: ChartProps) => {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(
    coinId
  ))
  return <div>{isLoading ? "Loading data ..." : <ApexCharts 
      type="line" 
      series={[
        {
          name: "sales",
          data: data?.map((price) => price.close) ?? [],
        },
      ]}
      options={{
        theme : {
          mode: "dark"
        },
        chart :{
          height: 500,
          width: 500,
          toolbar: {
            show: false
          },
          background: "transparent"
        },
        grid: { show: false },
        stroke: {
          curve: "smooth",
          width: 4
        },
        yaxis : { show: false },
        xaxis : { 
          axisTicks: {show: false},
          axisBorder: {show: false},
          labels: { show: false,
            datetimeFormatter: {month: "mmm 'yy"}
          },
          type: "datetime",
          categories: data?.map((price) => price.time_close),
        },
        fill: {
          type: "gradient",
          gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
        },
        colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            }
      }}
    />}</div>;
};

export default Chart;
