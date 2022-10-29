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
        let tempTotal = 0
        let curCandleVal;
        for (let i = 0; i < stockCandles[0].candle.length; i++) {
            curCandleVal = 0
            for (let j = 0; j < stockCandles.length; j++) {
                curCandleVal += stockCandles[j].candle[i] * stockCandles[j].quantity
            }
            tempTotalCandle.push(curCandleVal)
            tempTotal += curCandleVal
        }
        setTotalCandle(tempTotalCandle)
        setTotalValue(Math.round(tempTotal))
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
                </div>
            </div>
        </section>
    );
}

export default Newsfeed;