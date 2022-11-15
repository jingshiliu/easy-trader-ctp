import React from 'react';
import LineGraph from "./LineGraph";
import '../CSS/StatsCard.css'


function ListCard({stockData}) {

    function getCurPrice(){
        return stockData.candle[stockData.candle.length - 1]
    }

    return (
        <a className='StatsCard' href='#'>
            <span>{stockData.symbol}</span>

            <LineGraph yAxes={stockData.candle} />

            <span>${getCurPrice()}</span>
        </a>
    );
}

export default ListCard;