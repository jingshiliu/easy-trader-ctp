import React, {useEffect, useState} from 'react';
import '../CSS/Newsfeed.css'
import LineGraph from "./LineGraph";

function Newsfeed({stockCandles}) {
    const [totalValue, setTotalValue] = useState(0)
    const [totalCandle, setTotalCandle] = useState([])

    useEffect(()=>{
        if(stockCandles.length === 0)
            return
        let tempTotalCandle = []
        let curCandleVal;
        // Iterate through timestamps
        // in each timestamp, calculate the total price of that time, and add to totalCandle list
        for (let i = 0; i < stockCandles[0].candle.length; i++) {
            curCandleVal = 0
            for (let j = 0; j < stockCandles.length; j++) {
                curCandleVal += stockCandles[j].candle[i] * stockCandles[j].quantity
            }
            tempTotalCandle.push(curCandleVal)
        }
        setTotalCandle(tempTotalCandle)
        setTotalValue(tempTotalCandle[tempTotalCandle.length - 1]) // last one is current price
        console.log(tempTotalCandle)
    }, [stockCandles])

    return (
        <section className='Newsfeed'>
            <div className="newsfeed__container">
                <div className="newsfeed__chart-section">
                    <div className="newsfeed__portfolio-value">
                        <h1>${totalValue}</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>

                    <div className="newsfeed__chart">
                        <LineGraph yAxes={totalCandle}/>
                    </div>

                    <div className="newsfeed__buying-power">
                        <BuyingPower />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsfeed;