const BASE_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins(){
    return fetch(`${BASE_URL}/coins`).then(response => response.json())
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(response => response.json())
}

// 코인의 가격 정보
export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json())
}

export function fetchCoinHistory(coinId: string){
    const endDate = Math.floor(Date.now() / 1000)
    const startDate = endDate - 60*60*24*7*2; // endDate로부터 2주 전 같은 시간
    // Chart 만들기 위한 api
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`).then(response => response.json())
}