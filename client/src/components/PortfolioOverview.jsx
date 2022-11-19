import React, {useEffect, useState} from 'react';
import '../CSS/PortfolioOverview.css'
import LineGraph from "./LineGraph";
import BuyingPower from './BuyingPower';

function PortfolioOverview({stockCandles}) {
    const [totalValue, setTotalValue] = useState(0)
    const [totalCandle, setTotalCandle] = useState([])
    const [changeMessage, setChangeMessage] = useState('')

    function calculateChangeFromYesterday(todayVal, yesterdayVal){
        let percentChange = Math.round((todayVal - yesterdayVal) / yesterdayVal * 100) / 100
        let valChange = Math.round((todayVal - yesterdayVal) * 100) / 100
        let newChangeMessage;

        if(percentChange > 0){
            newChangeMessage = (
                <p className='PortfolioOverview__change-message'>
                    <span className='increase'>+</span> ${valChange} (<span className='increase'>+</span>{percentChange} %) Today
                </p>
            )
        }else {
            newChangeMessage = (
                <p className='PortfolioOverview__change-message'>
                    <span className='decrease'>-</span> ${valChange*-1} (<span className='decrease'>-</span>{percentChange*-1} %) Today
                </p>
            )
        }
        setChangeMessage(newChangeMessage)
    }

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
        calculateChangeFromYesterday(tempTotalCandle[0], tempTotalCandle[1])
    }, [stockCandles])



    return (
        <section className='PortfolioOverview'>
            <div className="PortfolioOverview__container">
                <div className="PortfolioOverview__chart-section">
                    <div className="PortfolioOverview__portfolio-value">
                        <h1>${totalValue}</h1>
                        {changeMessage}
                    </div>

                    <div className="PortfolioOverview__chart">
                        <LineGraph yAxes={totalCandle} reverseArray={true}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioOverview;