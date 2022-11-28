import React, {useEffect, useState} from 'react';
import '../CSS/Investing.css'
import Header from "../components/Header";
import LineGraph from "../components/LineGraph";


function Investing() {
    const [stockSymbol, setStockSymbol] = useState('AAPL');
    const [stockCandle, setStockCandle] = useState([]);
    const [stockPrice, setStockPrice] = useState(0);
    const {finnhubClient, getTimeInterval} = require('../stock_api')

    useEffect(() => {
        // req stock candle
        let {from, until} = getTimeInterval()
        finnhubClient.stockCandles(stockSymbol, 'D', from, until, (err, data) =>{
            if(err) throw err;
            setStockCandle(data['c'].slice(-30, data['c'].length))
            setStockPrice(data['c'][data['c'].length - 1])
        })
    }, []);


    return (
        <div className='Investing'>
            <div className="Investing__container">
                <Header />
                <div className="Investing__body">
                    <div className="Investing__stock-symbol">
                        <p>{stockSymbol}  ${stockPrice}</p>
                    </div>
                    <LineGraph yAxes={stockCandle}  />
                </div>
            </div>
        </div>
    );
}

export default Investing;