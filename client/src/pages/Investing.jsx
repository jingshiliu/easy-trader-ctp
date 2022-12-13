import React, {useEffect, useState} from 'react';
import '../CSS/Investing.css'
import Header from "../components/Header";
import LineGraph from "../components/LineGraph";
import BuyingStock from "../components/BuyingStock";
import {useLocation, useNavigate} from "react-router-dom";
import SellingStock from "../components/SellingStock";




function Investing() {
    const {stockSymbol, userId} = useLocation().state
    const [stockCandle, setStockCandle] = useState([]);
    const [stockPrice, setStockPrice] = useState(0);
    const [stockQuantity, setStockQuantity] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        (async ()=>{
            const res = await fetch(`/stock/candle?stockSymbol=${stockSymbol}`)
            const data = await res.json()

            if(data.status === 400){
                navigate('*')
            }

            setStockCandle(data['candle'])
            setStockPrice(data['candle'][data['candle'].length - 1])

            const userStockRes = await fetch(`/userstock/getOne`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    userId: 1,
                    stockSymbol
                }),
            })
            const userStockData = await userStockRes.json()
            console.log(userStockData)
            setStockQuantity(userStockData['data']['quantity'])
        })()
    }, [stockSymbol]);


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