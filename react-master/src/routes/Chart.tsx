import React from 'react';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

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
  const isDark = useRecoilValue(isDarkAtom);
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(
    coinId
  ),{
    refetchInterval: 10000
  })
  return <div>{isLoading ? "Loading data ..." : <ApexCharts 
    type="candlestick" 
    series={[{
        data: data?.map((price) => ({
          x : new Date(price.time_close),
          y : new Array(price.open, price.high, price.low, price.close)
        })) ?? []
    }]}
    options={{
      theme : {
        mode: isDark? "dark" : "light"
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
      xaxis : { 
        labels: { 
          datetimeFormatter: {month: "mmm 'yy"}
        },
        type: "datetime",
        categories: data?.map((price) => price.time_close),
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
