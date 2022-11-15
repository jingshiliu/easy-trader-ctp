import React from 'react';
import LineGraph from "./LineGraph";
import '../CSS/StockCard.css'

function StockCard({stockData}) {
    function getCurPrice() {
        return stockData.candle[stockData.candle.length - 1]
    }

    return (
        <a className='StockCard' href='#'>
            <span>{stockData.symbol}</span>

            <LineGraph yAxes={stockData.candle}/>

            <span>${getCurPrice()}</span>
        </a>
    );
}

export default StockCard;