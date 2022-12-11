import React from 'react';
import LineGraph from "./LineGraph";
import '../CSS/StockCard.css'
import {Link} from "react-router-dom";


/**
 * accepting stock candle which smaller index is closer the present time, and display the graph from left to right
 * in the order of past to present
 * @param stockData - a stock candle from now to the past
 * @returns {JSX.Element}
 * @constructor
 */
function StockCard({stockData, userId}) {
    function getCurPrice() {
        return stockData.candle[stockData.candle.length - 1]
    }
    console.log(stockData)

    return (
        <Link className='StockCard'
              target='' href='#'
              to={{pathname: '/investing'}}
              state={{
                  stockSymbol: stockData.stockSymbol,
                  userId: userId
              }}>
            <span>{stockData.stockSymbol}</span>

            <LineGraph yAxes={stockData.candle} reverseArray={true}/>

            <span>${getCurPrice()}</span>
        </Link>
    );
}

export default StockCard;