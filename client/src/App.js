import './CSS/App.css'
import Header from './components/Header'
import PortfolioOverview from "./components/PortfolioOverview";
import {useEffect, useState} from "react";
import MainAppContent from "./components/MainAppContent";


const defaultProfileStocks = [
    {
        symbol: 'GME',
        quantity: 3,
    },
    {
        symbol: 'SNAP',
        quantity: 10,
    },
    {
        symbol: 'AAPL',
        quantity: 21,
    },
    {
        symbol: 'TWTR',
        quantity: 13,
    },
    {
        symbol: 'TSLA',
        quantity: 31,
    },
    {
        symbol: 'NFLX',
        quantity: 22,
    },
    {
        symbol: 'UBER',
        quantity: 103,
    },
]

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cdaaobqad3i97v8jfvagcdaaobqad3i97v8jfvb0"
const finnhubClient = new finnhub.DefaultApi()

const HOURS = 24
const DAYS = 60
const GRAPH_LENGTH = 30

function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
}


function App() {
    const [profileStocks, setProfileStocks] = useState([])
    const [stockCandles, setStockCandles] = useState([])
    const [news, setNews] = useState([])

    function calculateStockCandles(){
        let candles = [] // list of {symbol, candle, quantity}
        let until = getTimestampInSeconds()
        let from = until - DAYS * HOURS * 3600

        for (let i = 0; i < profileStocks.length; i++) {
            // fetch candle data of each stock
            finnhubClient.stockCandles(profileStocks[i].symbol, 'D', from, until, (err, data)=>{
                if(err)
                    throw err;
                candles.push(
                    {
                        symbol: profileStocks[i].symbol,
                        candle: data['c'].slice(-GRAPH_LENGTH, data['c'].length),
                        quantity: profileStocks[i].quantity
                    }
                )
                if(candles.length === profileStocks.length){
                    setStockCandles(candles)
                }
            })
        }
    }
    function requestNews(newsType='general'){
        finnhubClient.marketNews(newsType, {}, (err, data, response)=>{
            if(err)
                throw err
            setNews(data.slice(0, 30))
        })
    }


    useEffect( ()=>{
        requestNews()
        // await fetch profile data
        // set stockCandles
        // fetch profile data: list of stocks and quantity
        setProfileStocks(defaultProfileStocks)
        // establish websocket connection with api, and pass in stock tickers(symbol)
        // pass in data to child
    }, [])

    useEffect(()=>{
        calculateStockCandles()
    }, [profileStocks])

    return (
        <div className="App">
            <div className='app__header'>
                <Header />
            </div>

            <div className='app__body'>
                <div className="app__body__container">
                    <div className="app__body__main-chart__container">
                        <PortfolioOverview stockCandles={stockCandles} />
                    </div>

                    <MainAppContent stockCandles={stockCandles} news={news}/>

                </div>


            </div>
        </div>
    );
}

export default App;
