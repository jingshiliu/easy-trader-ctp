import './CSS/App.css'
import Header from './components/Header'
import PortfolioOverview from "./components/PortfolioOverview";
import {useEffect, useState} from "react";
import MainAppContent from "./components/MainAppContent";

// const backendPort = 8001
const userId = 1
const backendApi = `` // localhost:${backendPort}


function App() {
    const [profileStocks, setProfileStocks] = useState([])
    const [stockCandles, setStockCandles] = useState([])
    const [news, setNews] = useState([])

    async function requestCandles(stockSymbols = profileStocks.map(stockData => stockData.stockSymbol)) {
        console.log('requestCandle')
        console.log(stockSymbols)
        console.log(JSON.stringify(stockSymbols))
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stockSymbols}),
        }


        const res = await fetch(`${backendApi}/stock/candles`, options)
        const {data} = (await res.json())
        console.log(data)

        const candles = []
        for (const candle of data) {
            candles.push({
                stockSymbol: candle.stockSymbol,
                candle: candle.candle,
                quantity: profileStocks.filter(stock => stock.stockSymbol === candle.stockSymbol)[0].quantity
            })
        }
        setStockCandles(candles)
        console.log(candles)
    }

    async function requestProfile() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                userId: userId
            }),
        }
        const res = await fetch(`${backendApi}/userstock/getAll`, options)
        const profile = (await res.json())

        console.log(profile)
        setProfileStocks(profile.data)
    }

    async function requestNews(newsType = 'general') {
        const res = await fetch(`${backendApi}/news`)
        setNews((await res.json()))
    }

    useEffect(() => {
        requestNews()
            .catch(err => console.log(err))

        requestProfile()
            .then(()=> requestCandles())
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        requestCandles()
            .catch(err => console.log(err))
    }, [profileStocks])

    return (
        <div className="App">
            <div className='app__header'>
                <Header/>
            </div>

            <div className='app__body'>
                <div className="app__body__container">
                    <div className="app__body__main-chart__container">
                        <PortfolioOverview stockCandles={stockCandles}/>
                    </div>

                    <MainAppContent stockCandles={stockCandles} news={news} userId={userId}/>

                </div>


            </div>
        </div>
    );
}

export default App;
