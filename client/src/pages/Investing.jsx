import React, {useEffect, useState} from 'react';
import '../CSS/Investing.css'
import Header from "../components/Header";
import LineGraph from "../components/LineGraph";
import {useLocation} from "react-router-dom";

const backendPort = 8001
const backendApi = ``


function Investing() {
    // const [stockSymbol, setStockSymbol] = useState('AAPL');
    const location = useLocation();
    const {stockSymbol} = location.state
    const [stockCandle, setStockCandle] = useState([]);
    const [stockPrice, setStockPrice] = useState(0);

    useEffect(() => {
        (async ()=>{
            const res = await fetch(`${backendApi}/stock/candle?stockSymbol=${stockSymbol}`)
            const data = await res.json()

            setStockCandle(data['candle'])
            setStockPrice(data['candle'][data['candle'].length - 1])
        })()
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