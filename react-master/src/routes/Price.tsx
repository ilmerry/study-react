import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchCoinTickers } from '../api';

const Menus = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Menu = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px 0px;
  border-radius: 10px;
`;

const Title = styled.div`
  opacity: 0.5;
`

const Content = styled.div<{value?: number}>`
  margin: 15px 0px;
  font-size: 16px;
  color: ${(props) => 
    props.value == undefined? props.theme.textColor :
    props.value < 0? 'red' : props.theme.accentColor
  }
`

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
interface PriceProps {
  coinId: string;
}

const Price = ({coinId}: PriceProps) => {
  const { isLoading, data } = useQuery<IPriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId),{
      // 5초마다 리렌더링
      refetchInterval: 5000
    }
  );

  return <div>{isLoading ? "Loading data ..." : 
    <Menus>
      <Menu>
        <Title>ATH DATE</Title>
        <Content>{data?.quotes.USD.ath_date.substring(0, 10)}</Content>
      </Menu>
      <Menu>
        <Title>ATH PRICE</Title>
        <Content>{data?.quotes.USD.ath_price.toFixed(3)}</Content>
      </Menu>
      <Menu>
        <Title>VOLUME</Title>
        <Content>{data?.quotes.USD.volume_24h.toString().substring(0, 5)} m</Content>
      </Menu>
      <Menu>
        <Title>MARKET CAP</Title>
        <Content value={data?.quotes.USD.market_cap_change_24h}>{data?.quotes.USD.market_cap_change_24h}</Content>
      </Menu>
      <Menu>
        <Title>PERCENT CHANGE</Title>
        <Content value={data?.quotes.USD.percent_change_24h}>{data?.quotes.USD.percent_change_24h}</Content>
      </Menu>
      <Menu>
        <Title>PERCENT FROM PRICE</Title>
        <Content value={data?.quotes.USD.percent_from_price_ath}>{data?.quotes.USD.percent_from_price_ath}</Content>
      </Menu>
    </Menus>
  }</div>;
};

export default Price;
