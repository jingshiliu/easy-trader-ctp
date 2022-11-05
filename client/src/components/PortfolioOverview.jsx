import React, {useEffect, useState} from 'react';
import '../CSS/PortfolioOverview.css'
import LineGraph from "./LineGraph";

function PortfolioOverview({stockCandles}) {
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
        setTotalValue(Math.round(tempTotalCandle[tempTotalCandle.length - 1])) // last one is current price
        console.log(tempTotalCandle)
    }, [stockCandles])

    return (
        <section className='PortfolioOverview'>
            <div className="PortfolioOverview__container">
                <div className="PortfolioOverview__chart-section">
                    <div className="PortfolioOverview__portfolio-value">
                        <h1>${totalValue}</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>

                    <div className="PortfolioOverview__chart">
                        <LineGraph yAxes={totalCandle}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioOverview;