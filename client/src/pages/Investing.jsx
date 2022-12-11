import React, {useEffect, useState} from 'react';
import '../CSS/Investing.css'
import Header from "../components/Header";
import LineGraph from "../components/LineGraph";
import BuyingStock from "../components/BuyingStock";
import {useLocation} from "react-router-dom";
import SellingStock from "../components/SellingStock";

const backendPort = 8001
const backendApi = ``


function Investing() {
    // const [stockSymbol, setStockSymbol] = useState('AAPL');
    const {stockSymbol, quantity, userId} = useLocation().state
    const [stockCandle, setStockCandle] = useState([]);
    const [stockPrice, setStockPrice] = useState(0);
    const [stockQuantity, setStockQuantity] = useState(0);

    useEffect(() => {
        (async ()=>{
            const res = await fetch(`${backendApi}/stock/candle?stockSymbol=${stockSymbol}`)
            const data = await res.json()
            setStockCandle(data['candle'])
            setStockPrice(data['candle'][data['candle'].length - 1])

            const userStockRes = await fetch(`/userstock/getOne`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    userId,
                    stockSymbol
                }),
            })
            const userStockData = await userStockRes.json()
            console.log(userStockData)
            setStockQuantity(userStockData['data']['quantity'])
        })()
    }, []);


    return (
        <div className='Investing'>
            <div className="Investing__container">
                <Header />
                <body className="Investing__body">
                    <section className="Investing__stock-info">
                        <div className="Investing__stock-symbol">
                            <p>{stockSymbol}  ${stockPrice}</p>

                        </div>
                        <p>Amount Owned: {stockQuantity}</p>
                        <LineGraph yAxes={stockCandle}  />
                    </section>
                    <section className="Investing__stock-trade">
                        <BuyingStock props={{
                            userId,
                            setStockQuantity,
                            stockQuantity,
                            stockSymbol
                        }}/>

                        <SellingStock props={{
                            userId,
                            setStockQuantity,
                            stockQuantity,
                            stockSymbol
                        }}/>
                    </section>
                </body>
            </div>
        </div>
    );
}

export default Investing;